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




