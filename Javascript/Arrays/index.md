### What is `slice()`?
  - Extracts a portion of an array without changing the original.
  - Parameters: `start (inclusive) and end (exclusive)`.
  - Returns a new array.
```jsx
const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(1, 4); // Extracts elements at index 1, 2, 3
console.log(sliced); // [2, 3, 4]
console.log(arr);    // [1, 2, 3, 4, 5] (unchanged)
```

### What is `splice()` ?
- Modifies the original array by adding, removing, or replacing elements.
- Parameters: `start (index), deleteCount, and optional ...items to add`
```jsx
const arr = [1, 2, 3, 4, 5];
const removed = arr.splice(1, 2); // Removes 2 elements starting from index 1
console.log(removed); // [2, 3]
console.log(arr);     // [1, 4, 5] (modified)
```
```jsx
const arr = [1, 4, 5];
arr.splice(1, 0, 2, 3); // Adds 2, 3 at index 1
console.log(arr); // [1, 2, 3, 4, 5]
```
