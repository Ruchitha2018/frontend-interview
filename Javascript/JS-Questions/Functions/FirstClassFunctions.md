# First Class Function

### 1. What is a First Class function?
- Functions in JavaScript are treated as "first-class citizens," meaning they can be used like any other value.
---

### 2. What are the key features of First Class function?
1. Assigned to variables: Functions can be assigned to variables.

```jsx
const greet = () => console.log("Hello!");

```
2. Passed as arguments: Functions can be passed to other functions
```jsx
const callFunction = (fn) => fn();
callFunction(() => console.log("Hi!"));

   ```
3. Returned from functions: Functions can return other functions
```jsx
const getFunction = () => () => console.log("Returned function");
const newFunction = getFunction();
newFunction(); // Output: "Returned function"
```
4. Stored in Data Structures: Functions can be stored in arrays or objects
```jsx
const functions = [() => console.log("Function 1"), () => console.log("Function 2")];
functions[0](); // Output: "Function 1"
```
---
### 3. Why First Class Functions is important?
- Enables functional programming
- Makes callbacks and higher-order functions possible

```jsx
const add = (a, b) => a + b;
const operate = (fn, a, b) => fn(a, b);
console.log(operate(add, 5, 3)); // Output: 8
```
