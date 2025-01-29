# Higher Order Functions

### What is Higher Order Functions?
 - A function that takes another function as an argument or returns a function
 - Relies on first class functions
```js
function operateOnNumbers(a, b, operation) {  
    return operation(a, b);  // Using function as an argument
}

const add = (x, y) => x + y;

console.log(operateOnNumbers(5, 3, add)); // Output: 8
```