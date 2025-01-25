# Promises

### 1. What is a Promise?
- It is an JS object used to handle asynchronous operations.
- It may produce a single value either resolved or rejected.

---

### 2. What are the states of a Promise?
- Pending: Initial state. The operation is ongoing, and the result is not yet available.
- Fulfilled: The operation completed successfully, and the promise is resolved with a value.
- Rejected: The operation failed, and the promise is rejected with an error.

---

### 3. What are the methods of Promises?
- `then(onFulfilled, onRejected)`:
   - Used to define callbacks for success or failure.
   - Example
  ```js
  myPromise.then(result => console.log(result), error => console.error(error));
  ```
- `catch(onRejected)`
  - Handles errors or rejected promises.
  - Example:
  ```js
   myPromise.catch(error => console.error(error));
  ```
- `finally(onFinally)`
  - Executes a callback once the promise is settled (fulfilled or rejected).
  - Example:
   ```js
  myPromise.finally(() => console.log("Promise settled."))
   ```

### 4. How to create an Promise?
- Promises are created using the Promise constructor, which takes an executor function with two parameters: `resolve` (for success) and `reject` (for failure).
```js
  const myPromise = new Promise((resolve, reject) => {
    const success = true; // Simulate a condition
    if (success) resolve("Operation succeeded!");
    else reject("Operation failed.");
});
```

### 5. How to consume an Promise?
```js
myPromise
    .then(result => console.log(result))  // Logs: "Operation succeeded!"
    .catch(error => console.error(error)) // Logs: "Operation failed."
    .finally(() => console.log("Done"));  // Logs: "Done"
```

### 6. What is Promise Chaining?
- Promises can be chained to execute multiple asynchronous operations in sequence.
```js
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log("Data:", data))
    .catch(error => console.error("Error:", error));
```

### 7. What are the advantages of an Promise?
- Avoids callback hell.
- Makes asynchronous code more readable and manageable.
- Built-in error handling using `.catch().`