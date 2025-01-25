# Objects

### 1. Different ways to create Objects
#### 1. Object Literal
```js
const obj = {
  name: "Ruchitha",
  age: 28,
  greet() {
    console.log("Hello, " + this.name);
  },
};
obj.greet(); // Output: Hello, Alice

```

### 2. ```Object.create()```

```js
const prototypeObj = {
  greet() {
    console.log("Hello, " + this.name);
  },
};
const obj = Object.create(prototypeObj);
obj.name = "Bob";
obj.greet(); // Output: Hello, Bob
```

### 3. Using Constructor Functions
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("Hi, I'm " + this.name);
  };
}
const person = new Person("Ruchi", 30);
person.greet(); // Output: Hi, I'm Ruchi
```

### 4. Using ES6 Classes
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hi, I'm " + this.name);
  }
}
const person = new Person("Ruchi", 28);
person.greet(); // Output: Hi, I'm Ruchi
```
### 5. Using Factory Functions
```js
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log("Hi, I'm " + this.name);
    },
  };
}
const person = createPerson("Ruchi", 30);
person.greet(); // Output: Hi, I'm Ruchitha
```

### 6. Using Object.assign()
```js
const source = { name: "Frank", age: 40 };
const obj = Object.assign({}, source);
console.log(obj); // Output: { name: "Frank", age: 40 }
```

### 7. Using Spread Operator ```(...)```
```js
const source = { name: "Grace", age: 22 };
const obj = { ...source, location: "NYC" };
console.log(obj); // Output: { name: "Grace", age: 22, location: "NYC" }
```

### 8. Using ```JSON.parse()```
```js
const jsonString = '{"name": "Ivy", "age": 26}';
const obj = JSON.parse(jsonString);
console.log(obj); // Output: { name: "Ivy", age: 26 }
```

### Using Map (for Key-Value Pairs)
```js
const map = new Map();
map.set("name", "Jack");
map.set("age", 45);
console.log(map.get("name")); // Output: Jack
```
---
## 2. What is a Constructor?
- A method to initialize objects when creating instances of a class.
- They are named with capital letter first.
- They should be executed only with `"new"` operator.
```js
//Syntax in ES6 classes
class ClassName {
  constructor(parameters) {
    this.property = parameters;
  }
}
```
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const person = new Person('Ruchitha', 25);
```
```js
//Traditional Function Constructor (Pre-ES6):
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person = new Person('Ruchitha', 25);
```
### Key Points
1. Default Constructor: If you don't define a constructor, JavaScript provides a default constructor.
2. Single Constructor: A class can only have one constructor. Attempting to define more than one will throw an error.
3. Inheritance: When using inheritance `(extends)`, the `super()` method must be called in the constructor before using `this`.

### When `new` is used:
- A new blank object `({})` is created.
- The constructor method is automatically called.
- The `this` keyword inside the constructor refers to the new object.
- Properties and methods are assigned to the object.
- The object is returned automatically.

```js
//Inheritance
class Employee extends Person {
  constructor(name, age, position) {
    super(name, age); // Call the parent constructor
    this.position = position;
  }

  describe() {
    console.log(`${this.name} is a ${this.position} and is ${this.age} years old.`);
  }
}

const emp = new Employee('Ruchitha', 25, 'Developer');
emp.describe();
// Output: Ruchitha is a Developer and is 25 years old.
```
---
### How to add key value pair in JS?
  1. Using Dot Notation
```js
const obj = {};
obj.key = "value"; // Add a key-value pair
console.log(obj);  // Output: { key: "value" }
```
2. Using Bracket Notation
- Useful when the key is dynamic or contains special characters.
```js
const obj = {};
obj["key"] = "value"; // Add a key-value pair
console.log(obj);     // Output: { key: "value" }

```
--- 
### How do you copy properties from one object to other?
- Shallow Copy: `Object.assign()` and the spread operator create a shallow copy, meaning nested objects are not deeply cloned.
- Deep Copy: For deeply nested objects, use libraries like Lodash or structured cloning (`structuredClone()` in modern browsers).

```js
const source = { a: 1, b: 2 };
const target = { c: 3 };

Object.assign(target, source);
console.log(target); // Output: { c: 3, a: 1, b: 2 }
```

```js
const source = { a: 1, b: 2 };
const target = { c: 3 };

const result = { ...target, ...source };
console.log(result); // Output: { c: 3, a: 1, b: 2 }
```

### What is `Object.seal()` method?
- New properties cannot be added.
- Existing properties cannot be deleted.
- Existing properties can still be modified (if they are writable).
```js
const obj = { a: 1, b: 2 };
Object.seal(obj);

obj.a = 3;  // Allowed: value of 'a' is modified
obj.c = 4;  // Not allowed: new property 'c' cannot be added
delete obj.b; // Not allowed: 'b' cannot be deleted

console.log(obj); // Output: { a: 3, b: 2 }
```

### What is `Object.freeze()` method?
- New properties cannot be added.
- Existing properties cannot be deleted.
- Existing properties cannot be modified (they become read-only).

```js
const obj = { a: 1, b: 2 };
Object.freeze(obj);

obj.a = 3;  // Not allowed: 'a' is read-only
obj.c = 4;  // Not allowed: new property 'c' cannot be added
delete obj.b; // Not allowed: 'b' cannot be deleted

console.log(obj); // Output: { a: 1, b: 2 }
```
---
### How do you determine if an object is sealed or not?
```js 
Object.isSealed(obj)
```
---
### What is `Object.values()` ?
- Returns an array of values from the object.
```js
const obj = { a: 1, b: 2 };
console.log(Object.values(obj)); // Output: [1, 2]
```
---
### What is `Object.entries()` ?
- Returns an array of key-value pairs (each pair is an array).
```js
const obj = { a: 1, b: 2 };
console.log(Object.entries(obj)); // Output: [['a', 1], ['b', 2]]
```
---
### What is `Object.keys()` ?
- It returns an array of keys in the object.
```js
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // Output: [ 'a', 'b', 'c' ]
```

### How do you create an object with Prototype?
1. Using `Object.create()`:
```js
const prototypeObj = { greet: function() { console.log("Hello!"); } };
const obj = Object.create(prototypeObj);

obj.greet(); // Output: Hello!
```
2. Using Constructor Functions:
```js
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() {
  console.log(`Hi, I'm ${this.name}`);
};

const person = new Person("Ruchitha");
person.sayHello(); // Output: Hi, I'm Ruchitha
```
3. Using ES6 `class` syntax: Classes in JavaScript are syntactic sugar over constructor functions and prototypes.
```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal("Dog");
dog.speak(); // Output: Dog makes a sound.
```

