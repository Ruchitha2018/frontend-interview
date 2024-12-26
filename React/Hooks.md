# Hooks

### Definition:
- Hooks are functions in React that allows to use state and lifecycle methods in functional components.

### List of Hooks:
- ```useState```
  - Manages state in a component
- ```useEffect```
  - Handles side effects ( e.g., data fetching, subscriptions)
- ```useRef```
  - Stores a reference to a DOM element or value.
- ```useContext```
  - Accesses context values.
- ```useReducer```
  - An alternative to ```useState``` for managing complex state logic.
- ```useMemo```
  - Optimizes performance by memoizing a value.
- ```useCallback```
  - Memoizes a function.
- ```useLayoutEffect``` 
  - Runs synchronously after DOM updates.

### Rules of Hooks:
- Call hooks only at the top level (not inside loops, conditions, or nested functions).
- Call hooks only in React function components or custom hooks.

### How to ensure hooks followed the rules in your project?
- Install the ESLint plugin for React hooks.
```npm install eslint-plugin-react-hooks --save-dev```

### Difference Between ```useEffect``` and ```useLayoutEffect```

#### Timing:

- useEffect: Runs after the browser paints the UI.
- useLayoutEffect: Runs before the browser paints the UI.

#### Blocking:

- useEffect: Non-blocking, doesn’t delay rendering.
- useLayoutEffect: Blocking, delays rendering until the effect finishes.

#### Use Cases:

- useEffect: For non-visual tasks like data fetching, event subscriptions, or logging.
- useLayoutEffect: For DOM-related tasks like measuring elements or updating layout/styles.

#### Performance:

- useEffect: More efficient; recommended for most cases.
- useLayoutEffect: Can impact performance if overused.

### Custom Hooks

#### Steps to Create a Custom Hook
1. Start with a Function:
- Create a JavaScript function that starts with `use`.

2. Use React Hooks Inside It:
- Use React's built-in hooks (`useState`, `useEffect`, etc.) to build the logic you want to reuse.

3. Return Values or Functions:
- Return the necessary state, functions, or computed values from the custom hook for the consuming component.

4. Import and Use the Hook in Components:
- Import the custom hook in any component where the logic is needed.
#### Example 1: Custom Hook for Window Size

```js
import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
```
```js
import React from "react";
import useWindowSize from "./useWindowSize";

function App() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>Window Width: {width}</p>
      <p>Window Height: {height}</p>
    </div>
  );
}

export default App;
```

#### Example 2: Custom Hook for Fetching Data
```js
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
}

export default useFetch;
```

```js
import React from "react";
import useFetch from "./useFetch";

function App() {
  const { data, error, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default App;
```



