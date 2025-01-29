# Currying Function

### What is Currying Function?
- Currying is a technique in functional programming where a function takes multiple arguments one at a time instead of all at once.
- Each function returns another function until all arguments are provided.
- Helps in reusability and function composition.
- Currying helps break a function into smaller reusable functions

```js
//Example Without Currying (Normal Function):

function multiply(a, b, c) {
    return a * b * c;
}

console.log(multiply(2, 3, 4)); // Output: 24
```

```js
//Example With Currying:
function curryMultiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}

console.log(curryMultiply(2)(3)(4)); // Output: 24
```

### Why Currying is Used?
- Partial Application
  - You can pre-fill some arguments and reuse the function multiple times.
- Function Composition:
  - Currying helps break a big function into smaller, more manageable ones.
  - These smaller functions can be chained together for better readability.
- Makes complex logic easier to understand.
- Encourages writing pure functions, which are easier to debug and test.
- Works well with higher-order functions like `.map()`, `.filter()`, and `.reduce()`.

```js
function curryUnaryFunction(sum = 0) {
    return function next(num) {
        if (num === undefined) return sum; // Return sum when called with ()
        return curryUnaryFunction(sum + num); // Keep collecting values
    };
}

console.log(curryUnaryFunction(1)(2)(3)()); // Output: 6
console.log(curryUnaryFunction(5)(10)(15)(20)()); // Output: 50
```