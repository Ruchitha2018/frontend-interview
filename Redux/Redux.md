# Redux

- It is a state management library commonly used in JS applications, like React.
- It is a unidirectional data flow.

# Core Principles of Redux

1. Single Source of Truth
   - The entire application state is stored in a single JS object called store
2. State is Read-Only
   - State changes only through actions.
3. Reducers are Pure Functions.
   - Reducers don't modify the state directly; they return a new one.

# Detailed Representation of Redux Flow

1. React Component (View)
- The starting point where the user interacts with the application. This could be a button click, form submission, etc.
2. Action Trigger:
- When an event occurs (e.g., a button click), a function in the React component calls dispatch() to send an action.

```js
const handleClick = () => {
  dispatch({ type: "INCREMENT", payload: 1 });
};
```

3. Dispatch Action
- ```dispatch()``` is a method provided by the Redux store.
- It sends an action object to the store, describing the change you want to make.

```js
dispatch({ type: 'INCREMENT', payload: 1 });
```

4. Action Object:

- A plain JavaScript object that must have a type property and optional payload for additional data.

```js
{ type: 'INCREMENT', payload: 1 }
```

5. Action
- The dispatched action reaches the Redux store.
- The store forwards it to the reducer(s) for processing.
- Actions are plain objects.
- They describe what happened, but not how the state changes. 

6. Reducer
- The store calls the reducer function with the current state and the action.
- The reducer computes the new state based on the action type and payload.
- The reducer returns the updated state.
- Reducers are pure functions (no side effects).
- They must not mutate the original state but return a new one.

```js
const counterReducer = (state = { count: 0 }, action) => {
switch (action.type) {
case 'INCREMENT':
return { ...state, count: state.count + action.payload };
default:
return state;
}
};
```

7. Redux Store
- The store updates its state with the new state returned by the reducer.
- It notifies all React components subscribed to the store.
- The store acts as the central source of truth for the application state.
- Subscribed components automatically receive the latest state.

8. Updated State
- The updated state is made available to React components.
- Components re-render if they are subscribed to the updated portion of the state.

# Action Creators in Redux

- Functions that return action objects (used to update Redux state).
- Example:
  - Without Action Creator:
  ```js
  dispatch({ type: 'INCREMENT' });
  ```
  - With Action Creator:

```js
const increment = () => ({ type: 'INCREMENT' });
dispatch(increment());
```

   - With Payload:

```js
const setUser = (user) => ({ type: 'SET_USER', payload: user });
dispatch(setUser({ name: 'John', age: 30 }));
```

 - Async Example (with Redux Thunk):

```js
const fetchUser = (id) => async (dispatch) => {
  const user = await fetch(`/api/users/${id}`).then(res => res.json());
  dispatch({ type: 'SET_USER', payload: user });
};
dispatch(fetchUser(1));
```

- Action creators make Redux code easier to manage and scale!

# Redux Flow Summary

- User Interaction:

User clicks a button or performs an action in the React component.

- Dispatch Action:

The component calls dispatch() with an action object.

- Action Received by Store:

The Redux store forwards the action to the appropriate reducer(s).

- Reducer Updates State:

The reducer processes the action and computes a new state without mutating the existing state.

- Store Updates State:

The store replaces the old state with the new state and notifies subscribers.

- React Component Re-Renders:

Subscribed React components fetch the updated state and re-render to reflect the changes.

# How Mutating and Unmutating State Works

1. Mutating State

- Definition: Directly modifying the existing state object or array.
- How It Works:
  - Changes the original state in place.
  - The reference of the state object remains the same.
- Why It’s a Problem: Redux cannot detect changes if the reference doesn’t change, which can break React updates and debugging tools.
- Result: React may not re-render because state reference hasn’t changed.

```js
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      state.count += 1; // Directly modifies state
      return state;      // Returns the same reference
    default:
      return state;
  }
};
```

2. Unmutating (Immutable) State

- Definition: Creating a new object or array with the necessary changes, without modifying the original state.
- How It Works:
  - Copies the existing state.
  - Makes changes in the new copy.
  - Returns the new state with a different reference.
- Why It’s Correct: Redux detects the state change through the new reference, enabling proper updates and debugging.
- Result: React re-renders because the state reference has changed.

```js
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }; // Creates a new object
    default:
      return state;
  }
};
```

### Real-World Analogy

- Mutating: Writing directly on a shared document (others won’t know you changed it).
- Unmutating: Making a copy of the document, editing it, and sharing the new version.

# How It Works in `{...state, productId: 1}`

- Copy Existing Properties:

  - The `...state` spreads all the key-value pairs from the state object into a new object.

- Override/Add a Property:

  - `{...state, productId: 1}` adds or overrides the productId property in the new object.
  - If state already has a productId property, its value will be replaced with 1.
  - If state does not have a productId property, it will be added with the value 1.

- Return a New Object:

  - A completely new object is created without modifying the original state object, preserving immutability.