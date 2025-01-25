# Basics

### Can we defined Properties for Functions?
- Yes, in JS, functions are objects, so we can define properties
```js
  function myFunction() {}
myFunction.property = "Value"; // Add a property
console.log(myFunction.property); // Output: "Value"
```
---
### What are the Use Cases for defining properties in Functions?
1. Metadata Storage: Store additional info about the function
```js
function greet() {}
greet.author = "Ruchitha";
console.log(greet.author); // Output: "Ruchitha"
```
2. Memoization (Cache Results): Cache computed values for performance.
```js
function factorial(n) {
  if (n === 0 || n === 1) return 1;

  // Check cache
  if (factorial.cache[n]) {
    return factorial.cache[n];
  }

  // Compute and store in cache
  const result = n * factorial(n - 1);
  factorial.cache[n] = result;
  return result;
}

// Initialize cache property
factorial.cache = {};

console.log(factorial(5)); // Output: 120
console.log(factorial.cache); // Output: { '2': 2, '3': 6, '4': 24, '5': 120 }
```
3. Function Call Counter: Track how many times a function is called.
```js
function countCalls() {
  countCalls.counter = (countCalls.counter || 0) + 1;
  console.log(`Called ${countCalls.counter} times`);
}
countCalls(); // Called 1 times
countCalls(); // Called 2 times
```
3. Properties Are Stored on the Function Object:
- They don't affect the function's internal logic or scope.
4. Use Sparingly:
- Avoid overusing this feature to keep code clean and readable.

---
### What is the way to find the number of parameters expected by a function?
```js
function sum(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4;
}
sum.length; // 4 is the number of parameters expected.
```
---

### What is Polyfill?
- It is a piece of code that adds support for a feature to older browser or environments.
- To make modern features (like ES6+ methods or APIs) work in older browsers.
- Ensures consistent behavior across all environments.
- Popular libraries like Core-JS provide many polyfills for modern JavaScript features.
- Services like polyfill.io automatically deliver polyfills based on the user's browser.

### What are the alternatives to Polyfills?
- Transpilers: Tools like Babel convert modern code into older versions.
- Feature Detection: Use libraries like Modernizr to check if features exist before using them.

### How do we generate random integers
```js
Math.floor(Math.random() * 10) + 1; // returns a random integer from 1 to 10
Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100
```
