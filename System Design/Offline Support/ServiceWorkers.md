# Service Workers

### Definition:
A Service Worker is a background script that runs separately from the main JavaScript execution thread. It acts as a proxy between the web page and the network, enabling features like offline caching, push notifications, and background sync.

### Key Features:
- Runs in the Background:
  - Does not block the main JavaScript thread.
  - Works independently of the webpage (persists even after page reloads).
- Intercepts Network Requests:
  - Can modify, cache, or completely respond to network requests before they reach the server.
- Provides Offline Support:
  - Enables caching of resources so that web apps work offline.
- Push Notifications & Background Sync:
  - Can receive and display notifications even when the web page is closed.
  - Can sync data when the internet connection is restored.
- Works Only Over HTTPS:
  - Service Workers require a secure context (HTTPS) for security reasons (except localhost for development).

### Service Worker Lifecycle

#### Step 1: Registering the Service Worker
Before using a service worker, it must be registered in your web app.

```js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('Service Worker Registered Successfully'))
        .catch(error => console.log('Service Worker Registration Failed:', error));
}
```
- Checks if the browser supports service workers ('serviceWorker' in navigator).
- Registers the service worker from the file sw.js.

#### Step 2: Installing the Service Worker
When the browser registers a new service worker, the install event is triggered.
```js
self.addEventListener('install', (event) => {
    console.log('Service Worker Installing...');
});
```
- Runs once when the service worker is installed.
- Ideal for caching static assets like CSS, JS, and images.

#### Step 3: Activating the Service Worker
Once installed, the service worker activates and takes control.
```js
self.addEventListener('activate', (event) => {
    console.log('Service Worker Activated');
});
```
- Clears old caches and prepares for fetching requests.

#### Step 4: Fetch Event (Intercepting Requests)
A service worker can listen to all network requests and decide how to respond.
```js
self.addEventListener('fetch', (event) => {
    console.log('Intercepting request for:', event.request.url);
});
```
Used to serve cached content instead of making network requests.

#### Step 5: Caching Strategy (Offline Support)
Service workers cache resources so they can be served even when the network is unavailable.
```js
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/script.js',
                '/logo.png'
            ]);
        })
    );
});
```
- Stores important assets in a cache named "my-cache-v1".
- These files will be available even when offline.

#### Step 6: Serving Cached Content
When a request is made, the service worker first checks the cache, then fetches from the network if necessary.

```js
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
```
- Checks cache first; if found, it returns the cached response.
- If not found, it fetches the resource from the network.

### Handling Dynamic Data in Service Workers

#### 1. Network First, Fallback to Cache
- Best for: APIs with frequently updated data (e.g., news feeds, stock prices).
- How it Works:
  - Try fetching fresh data from the network.
  - If the network fails, return cached data as a backup.
- Ensures fresh data when online
- Slower when offline (since it tries the network first)
```js
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                return caches.open('dynamic-cache').then((cache) => {
                    cache.put(event.request, response.clone()); // Update cache
                    return response; // Return fresh data
                });
            })
            .catch(() => caches.match(event.request)) // Fallback to cache if offline
    );
});
```
#### 2. Cache First, Update in Background 
- Best for: Data that changes periodically but can be served stale (e.g., blog posts, product listings).
- How it Works:
  - Serve cached data immediately for fast response.
  - Fetch the latest data in the background and update the cache.
- Fast load times (serves cached data instantly)
- Data updates in the background (ensures freshness for future requests)
- May show stale data briefly until the cache updates
```js
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.open('dynamic-cache').then((cache) => {
            return cache.match(event.request).then((cachedResponse) => {
                const fetchPromise = fetch(event.request).then((networkResponse) => {
                    cache.put(event.request, networkResponse.clone()); // Update cache
                    return networkResponse;
                });
                return cachedResponse || fetchPromise; // Return cache first, update later
            });
        })
    );
});
```

### 3. Cache with Expiration (Time-based Cache Invalidation)
- Best for: Data that changes on a schedule (e.g., weather updates every 30 min).
- How it Works:
  - Store the timestamp when data is cached.
  - Check if the cache is older than a certain threshold before serving it.
- Ensures fresh data after a fixed interval
- Extra complexity (needs to track timestamps)
```js
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.open('time-based-cache').then((cache) => {
            return cache.match(event.request).then((cachedResponse) => {
                if (cachedResponse) {
                    // Check if cache is older than 30 minutes
                    let cachedTime = new Date(cachedResponse.headers.get('date')).getTime();
                    let now = new Date().getTime();
                    if (now - cachedTime < 30 * 60 * 1000) { // 30 minutes
                        return cachedResponse;
                    }
                }
                return fetch(event.request).then((networkResponse) => {
                    cache.put(event.request, networkResponse.clone()); // Update cache
                    return networkResponse;
                });
            });
        })
    );
});
```
#### 4. Network Only (No Caching for Dynamic Data)
- Best for: APIs with real-time data (e.g., live chat, stock market prices).
- How it Works:
  - Always fetch fresh data from the network.
  - No cache is used.
- Ensures always up-to-date data
- No offline support (fails if there's no internet)
```js
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request)); // Always fetch fresh data
});
```




 
