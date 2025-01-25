### What is the output of the following for loops?
```jsx
for (var i = 0; i < 4; i++) {
  // global scope
  setTimeout(() => console.log(i)); // 4 4 4 4
}

for (let i = 0; i < 4; i++) {
  // block scope
  setTimeout(() => console.log(i)); //0 1 2 3
}
```
- Scope:
  - var: Single, shared variable for the entire loop (function or global scope).
  - let: New variable created for each iteration (block scope).
- Behavior in Asynchronous Code:
  - var: Final value of the variable is shared across all closures.
  - let: Each closure captures the value of the variable from its iteration.
---

### List down some of the features of ES6
- let and const (block-scoped variables).
- Arrow Functions (shorter syntax, lexical this).
- Template Literals (multi-line strings, string interpolation).
- Default Parameters (function parameters with default values).
- Destructuring (extract values from objects/arrays).
- Spread and Rest Operators (... for spreading or collecting).
- Promises (asynchronous code handling).
- Classes (simplified syntax for OOP).
- Modules (import/export for modular code).
- Enhanced Object Literals (shorthand for properties/methods).
- Map and Set (new data structures).
- Symbols (unique, immutable identifiers).
- Iterators and Generators (custom iteration logic).
- for...of Loop (iterating over iterable objects).
- Block-Scoped Functions (functions scoped to blocks).
---
### What is ES6?
- Released: June 2015.
- Purpose: To enhance JavaScript with new syntax, features, and tools for better productivity and code management.
- Compatibility: Modern browsers and JavaScript engines support most ES6 features. Transpilers like Babel are used to ensure compatibility with older browsers.
  
---

### What are Default Paramters?
- Set a default value for function parameters if no argument is passed.
```js
function functionName(param1 = defaultValue1, param2 = defaultValue2) {
  // Function body
}
```
```js
function add(a, b = a) {
  return a + b;
}

console.log(add(5));      // Output: 10 (b defaults to 5)
console.log(add(5, 3));   // Output: 8 (b is 3)
```
---
### What are Template Literals
- Template literals are a feature in JavaScript (introduced in ES6) that provide an easy way to work with strings, allowing for multi-line strings and string interpolation.
 - Backticks: Use backticks (`) for strings instead of single or double quotes.
 - String Interpolation: Embed variables/expressions inside strings using `${}`.
 - Multi-line Strings: Easily create multi-line strings without `\n`.
```jsx
const a = 5, b = 10;
console.log(`Sum: ${a + b}`);  // Output: Sum: 15
```

### What are Tagged Templates?
- Tagged templates are a feature in JavaScript that allow you to parse template literals with a function. 
  - Tag Function: A tag function is placed before the template literal.
  - Arguments: The tag function receives the string parts and values inside `${}`.
  - Return: The tag function processes these values and returns a result.
```jsx
function tag(strings, ...values) {
  console.log(strings);  // Array of string parts
  console.log(values);   // Array of interpolated values
  return "Processed String";
}

const name = "Alice";
const age = 25;
console.log(tag`Hello, my name is ${name} and I am ${age} years old.`);
```
Ouput:
- `strings: ["Hello, my name is ", " and I am ", " years old."]`
- `values: ["Alice", 25]`
- `Processed String`

---
### What is Destructuring Assignment?
- Destructuring assignment is a shorthand way to extract values from arrays or objects and assign them to variables.
```jsx
const arr = [1, 2, 3];
const [a, b] = arr;  // a = 1, b = 2

const person = { name: "Alice", age: 25 };
const { name, age } = person;  // name = "Alice", age = 25

```
---

### What is Dynamic Imports?
- Dynamic imports allow us to load modules or components on demand at runtime, instead of importing them statically at the beginning of the file. This helps with code splitting, improving performance by loading only what is needed when it's needed.
- Load on Demand: Load modules or components only when needed.
- Asynchronous: Returns a promise.
- Syntax: `import('module-path')`
```jsx
function loadModule() {
  import('./myModule.js')
    .then(module => {
      module.myFunction();
    })
    .catch(err => {
      console.error('Error loading module', err);
    });
}
```
---
### What is Module Loaders?
- Module loaders are tools or mechanisms used to load JavaScript modules in a structured and efficient way, especially in large-scale applications.
- Types:
  - CommonJS: Used in Node.js with `require()` and module.exports.
  - AMD: Asynchronous module loader for the browser.
  - ES Modules (ESM): Modern JavaScript system with `import/export`.
- Benefits:
  - Code Organization: Breaks code into smaller, reusable parts.
  - Dependency Management: Loads modules in the correct order.
  - Lazy Loading: Loads modules only when needed, improving performance.
- Avoid Global Scope Pollution: Keeps variables/functions scoped to their respective modules.
```jsx
// math.js
export const add = (a, b) => a + b;

// app.js
import { add } from './math.js';
console.log(add(2, 3));  // Output: 5
```
---

### What is Thunk Function?
- A thunk function is a function that delays the execution of another function or piece of code. It wraps logic inside another function, which can be called later to execute the logic.
- Thunk functions are often used to handle asynchronous operations or defer computation until it is explicitly invoked.
```jsx
// Regular function
const add = (a, b) => a + b;

// Thunk function
const createThunk = (a, b) => () => add(a, b);

// Usage
const thunk = createThunk(2, 3); // Returns a function
console.log(thunk()); // Executes the wrapped function and prints 5
```
- In Redux, a thunk is an action creator that returns a function (instead of an object). This function can contain asynchronous code and has access to `dispatch` and `getState.`
```jsx
const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_START" }); // Dispatching a loading state
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "FETCH_SUCCESS", payload: data })) // Dispatch success
      .catch((error) => dispatch({ type: "FETCH_ERROR", payload: error })); // Dispatch error
  };
};
```





