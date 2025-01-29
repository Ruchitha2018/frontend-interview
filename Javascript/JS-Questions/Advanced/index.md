# Advanced

### What is Object and Map?
#### 1. Object
 - A basic data structure to store key-value pairs.
 - Keys are strings or symbols.
 - Commonly used for representing structured data (e.g., JSON).
 - Inherits from `Object.prototype` (default properties like toString may exist).
 - Key order is not guaranteed (varies by implementation).
```jsx
const obj = { name: "Alice", age: 25 };
console.log(obj.name); // "Alice"
```
#### 2. Map
 - A specialized data structure for key-value pairs.
 - Keys can be any type (e.g., objects, functions, numbers, etc.).
 - Maintains insertion order of keys.
 - Provides better performance for frequent key-value operations.
```jsx
const map = new Map();
map.set("name", "Alice");
map.set(25, "Age");
console.log(map.get("name")); // "Alice"
```

### What is Memoization?

Memoization is a **performance optimization** technique where the result of a function is cached so that it doesn’t need to be recomputed for the same inputs.

- #### Purpose:
  Improves performance by avoiding redundant computations.

- #### How it Works:
  - Stores input-output pairs in a cache.
  - On repeated inputs, returns the cached result instead of recalculating.

- #### Use Cases:
  - React:
  Hooks like ```useMemo``` and ``useCallback`` for caching values or functions.
  - Dynamic Programming:
  For solving problems like Fibonacci, knapsack, etc.
  - API Responses:
  Caching API results to avoid duplicate network calls.
 - Data Filtering/Sorting:
  Avoid recomputing when data hasn’t changed.

- #### Benefits:
  - Saves computation time.
  - Reduces system load.

- #### Drawbacks:

  - Uses extra memory for caching.
  - Cache management can add complexity.

```js
const memoizedAdd = () => {
  const cache = {};
  return (a, b) => {
    const key = `${a},${b}`;
    if (cache[key]) {
      console.log("Fetching from cache...");
      return cache[key];
    }
    console.log("Calculating...");
    const result = a + b;
    cache[key] = result;
    return result;
  };
};

const add = memoizedAdd();
console.log(add(1, 2)); // Calculating...
console.log(add(1, 2)); // Fetching from cache...
```