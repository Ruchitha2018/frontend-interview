### Difference Between `for...of` and `for...in`
 #### 1. `for..in`:
-  Iterates over keys (indexes or property names).
- Works with objects and arrays.
- Use for iterating over object properties.

```js
const obj = { a: 1, b: 2 };
for (let key in obj) {
  console.log(key); // Output: a, b
}
```

#### 2. `for..of`:
- Iterates over values of iterable objects (e.g., arrays, strings).
- Does not work with plain objects.
- Use for iterating over array or string elements.
```js
const str = "Ruchitha";

for (let char of str) {
  console.log(char); // Output: R, u, c, h, i, t, h, a
}
```
```js
const arr = [10, 20, 30];

for (let value of arr) {
  console.log(value); // Output: 10, 20, 30 (values of the array)
}
```