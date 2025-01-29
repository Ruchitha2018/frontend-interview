# Basics

### What is a Service Worker?
- A background script in JavaScript that runs separately from the webpage.
- Handles tasks like caching, network requests and create offline-first experiences.
- Key Features:
  - Background Execution: Runs independently of the webpage.
  - Offline Capability: Enables websites to function offline by caching resources.
  - Event-Driven: Listens for install, activate, fetch, and push events.
  - Network Interception: Decides whether to serve resources from cache or the network.
  - No DOM Access: Communicates with pages via postMessage.
  - Secure Context: Works only over HTTPS or localhost (for development).
```js
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('cache-v1').then(cache => cache.addAll(['/index.html', '/style.css']))
    );
});
```
- Use Cases:
  - Offline Support: Serve content when there’s no internet.
  - Caching: Store static files (CSS, JS, images) for faster load times.
  - Background Sync: Sync data with the server when online.
  - Push Notifications: Deliver real-time notifications.
  - Improved Performance: Optimize resource loading. 
### What is Local Storage?
- Purpose: Stores data for the long term.
- Lifespan: Data persists even after the browser is closed and reopened.
- Scope: Shared across all tabs and windows of the same origin.
- Storage Limit: Typically 5MB per origin (may vary by browser).
- Use Case: Storing user preferences, theme settings, or other data that needs to persist over time.
```jsx
// Store data
localStorage.setItem("username", "Ruchitha");

// Retrieve data
console.log(localStorage.getItem("username")); // Output: "Ruchitha"

// Remove data
localStorage.removeItem("username");

// Clear all data
localStorage.clear();
```