# Call, Apply and Bind Method

### `call` method:
- Invokes a function immediately with a specified `this` value and arguments passed individually.
- `functionName.call(thisArg, arg1, arg2, ...)`
```js
  const person = { name: "Ruchitha" };
function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

greet.call(person, "Hello", "!"); // Output: "Hello, Ruchitha!"
```

### `apply` method:
- Invokes a function immediately with a specified `this` value and arguments passed as an array.
- `functionName.apply(thisArg, [argsArray])`
```js
const person = { name: "Ruchitha" };
function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

greet.apply(person, ["Hi", "!"]); // Output: "Hi, Ruchitha!"

```

### `bind` method:
- Returns a new function with a specified `this` value and arguments passed individually, but does not invoke immediately.
```js
const person = { name: "Ruchitha" };
function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

const greetPerson = greet.bind(person, "Hey");
greetPerson("!"); // Output: "Hey, Ruchitha!"
```

