# Memoization

- What is memoization?
- React.memo
- useMemo hook
- useCallback hook
- React.lazy and Suspense

### Definition:

Memoization is a performance optimization technique where the result of a function is cached so that it doesn’t need to be recomputed for the same inputs.

### Purpose:

Improves performance by avoiding redundant computations.

### How it Works:

Stores input-output pairs in a cache.
On repeated inputs, returns the cached result instead of recalculating.

### Use Cases:

- React:

  Hooks like useMemo and useCallback for caching values or functions.

- Dynamic Programming:

  For solving problems like Fibonacci, knapsack, etc.

- API Responses:

  Caching API results to avoid duplicate network calls.

- Data Filtering/Sorting:

  Avoid recomputing when data hasn’t changed.

### Benefits:

Saves computation time.
Reduces system load.

### Drawbacks:

Uses extra memory for caching.
Cache management can add complexity.

```
const memoizedAdd = () => {
  const cache = {};
  return (a, b) => {
    const key = `${a},${b}`;
    if (cache[key]) {
      console.log("Fetching from cache...");
      return cache[key];
    }
    console.log("Calculating...");
    const result = a + b;
    cache[key] = result;
    return result;
  };
};

const add = memoizedAdd();
console.log(add(1, 2)); // Calculating...
console.log(add(1, 2)); // Fetching from cache...
```

### React.memo function

- `React.memo` is a higher-order component (HOC) that optimizes functional components by preventing unnecessary re-renders. It memoizes the output of the component and re-renders it only when its props change.
- Improves performance by skipping re-renders for components that receive the same props.
- If the props remain the same between renders, the component is not re-rendered.
- We can customize the comparison logic using a second argument to React.memo.
- If we are sending the function as props, then React.memo wont work.
```
import React from 'react';

const MyComponent = React.memo((props) => {
  console.log('Rendering MyComponent');
  return <div>{props.value}</div>;
});

export default MyComponent;
```

```
const MyComponent = React.memo(
  (props) => {
    return <div>{props.value}</div>;
  },
  (prevProps, nextProps) => prevProps.value === nextProps.value
);
```

### useMemo Hook in React

- Purpose:

  - The `useMemo ` hook is used to optimize performance by memoizing the result of a function so that it is recalculated only when dependencies change.

  - Avoid unnecessary recalculations of expensive functions.

- When to Use:

  - For heavy computations (e.g., filtering, sorting).
  - When the result of a calculation doesn’t change unless specific values (dependencies) change.

    `const memoizedValue = useMemo(() => computeFunction(), [dependencies]);`

- Parameters:

  - computeFunction: The function whose result you want to memoize.
  - [dependencies]: An array of values that, when changed, will trigger the recomputation.

- Return Value:

  Returns the memoized result of the function.

```
import React, { useState, useMemo } from 'react';

const App = () => {
  const [search, setSearch] = useState('');
  const [data] = useState(['apple', 'banana', 'cherry', 'date', 'elderberry']);

  // Memoized filtering
  const filteredData = useMemo(() => {
    console.log('Filtering...');
    return data.filter((item) => item.includes(search));
  }, [search, data]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search fruits"
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```

### useCallback Hook

`useCallback` is a React hook that memorizes a function definition so that it doesn’t get recreated unnecessarily during re-renders.

- Purpose:
  - Prevents the creation of a new function on every render.
  - Useful when passing functions as props to child components.
- How It Works:
  - Returns a cached version of the function unless its dependencies change.

```
const memoizedFunction = useCallback(() => {
  // Function logic here
}, [dependencies]);
```

- Parameters:

  - Callback Function: The function to be cached.
  - Dependencies: Values that, when changed, recreate the function.

- Use Cases:

  - Optimizing child components that rely on props for avoiding unnecessary re-renders.
  - When functions depend on variables that might change (dependencies).

```
import React, { useState, useCallback } from 'react';

const Button = React.memo(({ handleClick }) => {
  console.log('Button re-rendered');
  return <button onClick={handleClick}>Click Me</button>;
});

const App = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button handleClick={increment} />
    </div>
  );
};

export default App;
```

- How it Helps in This Example

  - Without useCallback:

    The increment function is recreated on every render, causing the Button to re-render unnecessarily.

  - With useCallback:

    The increment function is cached and does not trigger a re-render of Button unless its dependencies change.

### React.lazy function

- Dynamically loads components for code-splitting, reducing the initial bundle size.
- Loads components only when they are rendered.
- It helps reduce the initial load time by splitting the app into smaller bundles and loading components only when needed.
- Improves performance by reducing the size of the initial JavaScript bundle.

```
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./MyComponent'));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

- How it works?
  - React.lazy takes a function that dynamically imports a component (e.g., () => import('./MyComponent')).
  - The component is loaded when it’s rendered for the first time.
  - A Suspense component is required to handle the loading state.
