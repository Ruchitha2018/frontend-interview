# Pure Functions

### What is Pure Function?
- Deterministic – Same input always gives the same output.
- No Side Effects – Doesn't modify external variables or state.
- No Dependency on External Data – Works only with its input parameters.
- Pure functions make JavaScript code more predictable, maintainable, and bug-free! 
```js
function add(a, b) {
    return a + b; // No external dependencies, no side effects
}

console.log(add(2, 3)); // Output: 5
console.log(add(2, 3)); // Output: 5 (Always same output)
```

```js
//Impure Function
let total = 0;
function addToTotal(value) {
    total += value; // Modifies external state
    return total;
}

console.log(addToTotal(5)); // Output: 5
console.log(addToTotal(5)); // Output: 10 (Different output for the same input!)
```