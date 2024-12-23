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

# Terms

1. Action
   - It is a plain JS object that describes what happened.
   - It must have a ```type``` property, which acts as a unique indentifier.
```
const incrementAction = {
    type: 'INCREMENT',
    payload: 1 // Optional additional data
};
 ```   

2. Reducer
- A reducer is a pure function.
- It takes the current state and an action as arguments and returns the new state.    


3. Dispatch
- ```dispatch()``` sends an action to the store, triggering the reducer to calculate the new state.

# Visual Representation of Redux Flow
- User Interaction: A user clicks a button or interacts with the UI.
- Dispatch Action: The app dispatches an action ```(e.g., { type: 'INCREMENT' })```.
- Reducer: The action is sent to the reducer, which computes the new state.
- Store Update: The store updates the state.
- Re-render: The UI re-renders to reflect the updated state.