# Arrow Functions

### 1. What are lambda or arrow functions?
- An arrow function is a shorter syntax for writing functions in JS.

### 2. What are key features of arrow functions?
- No `this` binding: The value of this inside an arrow function is lexically inherited from the surrounding code.
- No `arguments` object: Arrow functions do not have their own arguments object.
- If the function body is a single expression, it can return the result directly without using return.

```jsx
const obj = {
    name: "Ruchitha",
    greet: function() {
        setTimeout(() => {
            console.log("Hello, " + this.name); // `this` refers to `obj`
        }, 1000);
    }
};
obj.greet();  // Output: "Hello, Ruchitha"
```