### How do you flat Multi-Dimensional Array?
```jsx
const multiArray = [1, [2, [3, [4]]]];
const flattened = multiArray.flat(Infinity); // Infinity ensures all levels are flattened
console.log(flattened); // Output: [1, 2, 3, 4]
```
```jsx
function flattenArray(arr) {
  return arr.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []
  );
}

const multiArray = [1, [2, [3, [4]]]];
console.log(flattenArray(multiArray)); // Output: [1, 2, 3, 4]
```
```jsx
function flattenArray(arr) {
  const stack = [...arr];
  const result = [];

  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next); // Push elements back to process later
    } else {
      result.unshift(next); // Add to the beginning of the result
    }
  }

  return result;
}

const multiArray = [1, [2, [3, [4]]]];
console.log(flattenArray(multiArray)); // Output: [1, 2, 3, 4]
```