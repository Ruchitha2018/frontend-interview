# Basics


### What is Local Storage?
- Purpose: Stores data for the long term.
- Lifespan: Data persists even after the browser is closed and reopened.
- Scope: Shared across all tabs and windows of the same origin.
- Storage Limit: Typically 5MB per origin (may vary by browser).
- Use Case: Storing user preferences, theme settings, or other data that needs to persist over time.
```jsx
// Store data
localStorage.setItem("username", "Ruchitha");

// Retrieve data
console.log(localStorage.getItem("username")); // Output: "Ruchitha"

// Remove data
localStorage.removeItem("username");

// Clear all data
localStorage.clear();
```