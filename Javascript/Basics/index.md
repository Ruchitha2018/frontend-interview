# Basics
### 1. What is JSON?
- JSON (JavaScript Object Notation) is a lightweight data format used for storing and exchanging data.
- Values can be strings, booleans, arrays or other objects

---

### 2. Where the JSON used for?
- Data interchange: Used to send data between a server and a client in web applications.
- APIs: Common format for responses in REST APIs.
- Easy to read and write for humans.
- Easy to parse and generate by machines.
- Language-independent format (works in various programming languages).
  
---

### 3. What are the common operation of JSON?
- `JSON.parse()`: Converts a JSON string into a JavaScript object.
- `JSON.stringify()`: Converts a JavaScript object into a JSON string.

---

### 4. How do you get the current url with javascript?
```window.location.href```

### 5. What are the various url properties of location object?
```js
const hostname = window.location.hostname;
console.log(hostname); // Example: "www.example.com"

const pathname = window.location.pathname;
console.log(pathname); // Example: "/page"

const protocol = window.location.protocol;
console.log(protocol); // Example: "https:"

const port = window.location.port;
console.log(port); // Example: "8080" (if specified)

const search = window.location.search;
console.log(search); // Example: "?query=123"

const hash = window.location.hash;
console.log(hash); // Example: "#section"
```

### What is Map?
- A Map stores key-value pairs.
- Keys can be of any type (e.g., objects, strings, numbers).
- Maintains the insertion order of entries.
- Provides useful methods: set(), get(), has(), delete(), size.
- Supports iteration with for...of, .keys(), .values(), etc.

```jsx
const map = new Map();
map.set("name", "Ruchitha");
map.set(42, "Age");
console.log(map.get("name")); // Output: Ruchitha
console.log(map.size);        // Output: 2
```
---
### What is WeakMap?
- A WeakMap stores key-value pairs.
- Keys must be objects (no strings, numbers, etc.).
- Keys are weakly held, meaning they are removed if no references exist (garbage-collected).
- Not iterable and has no size property.
- Provides methods: set(), get(), has(), delete().
```js
const weakMap = new WeakMap();
const obj = { name: "Ruchitha" };
weakMap.set(obj, "Frontend Developer");
console.log(weakMap.get(obj)); // Output: Frontend Developer
```
---

### What is Babel?
- Babel is a JavaScript compiler.
- It converts modern JavaScript (ES6+ and beyond) to older JavaScript for compatibility with older browsers.
- Cross-browser compatibility: Ensures your code works in older browsers.
- Use modern features: Allows you to write code with the latest features (e.g., arrow functions, classes).
- Transform JSX: Converts React JSX code to plain JavaScript.
- Polyfills: Adds support for newer JavaScript features (e.g., Promise, Array.from).

### How to set the cursor to wait?
```css
  cursor: wait;
```

```js
// Set the cursor to "wait"
document.body.style.cursor = "wait";

// Reset the cursor back to default after the operation
setTimeout(() => {
  document.body.style.cursor = "default";
}, 3000); // Replace with the duration of your operation
```

### How do you create an infinite loop and when to use?
- Server-like tasks (e.g., polling a server, keeping a game loop running).
- Waiting for an event (but use event listeners or Promises where possible).
```js
while (true) {
  console.log("This is an infinite loop.");
}

for (;;) {
  console.log("This is another infinite loop.");
}

setInterval(() => {
  console.log("This will run forever every second.");
}, 1000);

//Recursion
function infiniteLoop() {
  console.log("This is an infinite loop.");
  infiniteLoop(); // Calls itself
}
infiniteLoop();
```






