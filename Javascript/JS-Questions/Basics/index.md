# Basics

### What is the difference between == and === operators? 

1. `==` (Equality Operator):

   - Checks for value equality but allows type coercion.
   - Converts the operands to the same type before comparison.
```jsx
console.log(5 == "5"); // true (string "5" is converted to number 5)
```

2. `===` (Strict Equality Operator):
   - Checks for both value and type equality.
   - No type conversion (strict comparison).
```jsx
console.log(5 === "5"); // false (number and string are different types)
```

### What is the difference between `let`, `const` and `var`?
1. `var` (Function Scoped):
   - Can be re-declared and updated.
   - Not block-scoped, only function-scoped.
   - Hoisted but initialized as `undefined`.
```js
var x = 10;
var x = 20; // Allowed (Re-declaration)
x = 30; // Allowed (Re-assignment)
console.log(x); // 30
```

2. `let` (Block Scoped)
   - Cannot be re-declared but can be updated.
   - Block-scoped (exists only inside {}).
   - Hoisted, but not initialized (Throws an error if used before declaration).
```js
let y = 10;
y = 20; // Allowed (Re-assignment)
// let y = 30; Error (Cannot re-declare)
console.log(y); // 20
```

3. `const` (Block Scoped & Immutable)
   - Cannot be re-declared or updated.
   - Block-scoped (like let).
   - Hoisted, but not initialized.
   - Must be assigned a value at the time of declaration.
```js
const z = 50;
// z = 60; Error (Cannot re-assign)
// const z = 70; Error (Cannot re-declare)
console.log(z); // 50
```

### What is Temporal Dead Zone (TDZ)?
- Hoisting: Variables declared with `let` or `const` are hoisted to the top of their block scope.
- TDZ: They stay in the "dead zone" until they are initialized in the code.
- Accessing during TDZ: If you try to access them before they are initialized, a ReferenceError is thrown.

```js
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 20;
```

### What is Hoisting?
- Hoisting is JavaScript's default behavior of moving declarations to the top of their respective scopes (functions or global) during the compile phase before the code is executed.
- Variable Declarations are hoisted to the top.
- Function Declarations are hoisted to the top.
- Only the declarations are hoisted, not the initializations or assignments.
- `var` variables are hoisted and initialized with undefined.
- `let` and `const` are hoisted but not initialized, leading to the Temporal Dead Zone (TDZ).

### What is Closure?
- A closure is a function that remembers its lexical scope (the scope in which it was created), even when it's executed outside that scope.
- When a function is defined inside another function, the inner function has access to the outer function's variables.
- They allow inner functions to access outer function variables even after the outer function has finished execution.
- The inner function "remembers" the outer function’s environment.
- Access to outer function’s variables.
- Private state: Variables can be kept private within a closure.
- Preserves state: A closure remembers the value of variables even after the outer function has finished executing.

```js
function outer() {
    let count = 0;  // Outer variable
    return function inner() {
        count++;  // Inner function modifies outer variable
        console.log(count);
    };
}

const counter = outer();
counter(); // Output: 1
counter(); // Output: 2
```

### What are Modules?
- Modules are separate files that contain reusable code, allowing you to organize, maintain, and reuse code more efficiently.
- Two Types of Modules:
  - ES6 Modules (ESM): Uses `import` and `export` to handle modules.
  - CommonJS Modules: Uses `require` and `module.exports`, commonly used in Node.js.
- Better organization of code.
- Code reusability across different parts of the project.
- Easier maintenance by splitting code into smaller units.
- Prevents global scope conflicts by keeping things modular.

### How do you detect caps lock key turned on or not?

```js
document.addEventListener("keydown", function (event) {
  if (event.getModifierState("CapsLock")) {
    console.log("Caps Lock is ON");
  } else {
    console.log("Caps Lock is OFF");
  }
});
```

