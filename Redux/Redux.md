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
   - It must have a `type` property, which acts as a unique indentifier.

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

- `dispatch()` sends an action to the store, triggering the reducer to calculate the new state.
- `dispatch({type: 'INCREMENT'})`

# How Mutating and Unmutating State Works

1. Mutating State

- Definition: Directly modifying the existing state object or array.
- How It Works:
  - Changes the original state in place.
  - The reference of the state object remains the same.
- Why It’s a Problem: Redux cannot detect changes if the reference doesn’t change, which can break React updates and debugging tools.
- Result: React may not re-render because state reference hasn’t changed.

```
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

```
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

# Visual Representation of Redux Flow

- User Interaction: A user clicks a button or interacts with the UI.
- Dispatch Action: The app dispatches an action `(e.g., { type: 'INCREMENT' })`.
- Reducer: The action is sent to the reducer, which computes the new state.
- Store Update: The store updates the state.
- Re-render: The UI re-renders to reflect the updated state.

# Steps to use Redux Toolkit

## 1. Install Redux Toolkit

```
npm install @reduxjs/toolkit react-redux
```

## 2. Set Up a Redux Store

```
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {}, // Add your slice reducers here
});

export default store;
```

## 3. Create a Slice

- Use `createSlice` to define the state, reducers, and actions for a specific feature.

```
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    reset: (state) => { state.value = 0; },
    incrementByAmount: (state, action) => {
      state.value += action.payload; // Use payload to update state
    },
  },
});

export const { increment, decrement, reset,  incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

```

## 4. Integrate Reducers in the Store

```
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

```

## 5. Provide the Store to the Application

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

## 6. Access State and Dispatch Actions

- Use `useSelector` to access state and `useDispatch` to dispatch actions in your components.

```
import React from 'react';
import { useSelector } from 'react-redux';

const CounterValue = () => {
  const count = useSelector((state) => state.counter.value);
  return <div>Counter Value: {count}</div>;
};

```

```
import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

const CounterButtons = () => {
  const dispatch = useDispatch();
   const handleIncrementByAmount = () => {
    const amount = 5; // Example payload
    dispatch(incrementByAmount(amount));
  };
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
       <button onClick={handleIncrementByAmount}>
        Increment by 5
      </button>
    </div>
  );
};
```

# Where Are Actions in Redux Toolkit?

- Actions are auto-generated:
  - Redux Toolkit creates actions automatically for each reducer in `createSlice`.
- Exported from the slice:
  - Actions are available as part of the slice.actions object.
  - Example: `export const { increment, decrement } = counterSlice.actions`;
- No need for manual definition:
  - Unlike traditional Redux, you don't define type or action creators.
- Access in Components:
  - Use `dispatch(action)` to call actions in React components.
  - Example: `dispatch(increment())` or `dispatch(incrementByAmount(5))`.
- Action object format:
  - Every action generates a plain object with:
    - type: Auto-named based on sliceName/reducerName (e.g., counter/increment).
    - payload: Holds any additional data passed to the action.

# Action Creators
- Action creators are functions that return action objects.
- They make code cleaner, reusable, and easier to debug.
- In Redux Toolkit, ```createAction``` further simplifies action creator usage.    

# What is createAsyncThunk?

### Definition

- It’s a Redux Toolkit function for handling asynchronous actions (e.g., API calls).
- Automatically generates actions for different states: pending, fulfilled, and rejected.
- Simplifies error handling and state management for async operations

### Steps to Use createAsyncThunk

1. Import `createAsyncThunk`:

```
import { createAsyncThunk } from '@reduxjs/toolkit';
```

2. Define the Async Thunk:

- Pass an action type and an async function.

```
export const fetchUserData = createAsyncThunk(
  'user/fetchData', // Action type
  async (userId, thunkAPI) => {
    try {
      const response = await fetch(`https://api.example.com/users/${userId}`);
      if (!response.ok) throw new Error('Failed to fetch');
      return await response.json(); // On success
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // On failure
    }
  }
);
```

3. Add to Slice Using extraReducers:

- Handle the pending, fulfilled, and rejected actions.

```
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;

```

4. Dispatch in Components:

- Use `useDispatch` to trigger the thunk.
- Use `useSelector` to access state updates.

```
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from './asyncThunks';

const UserComponent = ({ userId }) => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserData(userId)); // Dispatch the thunk
  }, [dispatch, userId]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;
  if (status === 'succeeded') return <p>{JSON.stringify(data)}</p>;

  return null;
};
```

### Lifecycle Actions

- pending: Starts the async call (e.g., set loading state).
- fulfilled: Completes successfully (e.g., update data).
- rejected: Fails (e.g., update error).

### Advantages

- Simplifies async logic (no need for manual action types).
- Manages loading, success, and error states automatically.
- Provides built-in error handling with thunkAPI.rejectWithValue.

###

View → Dispatch Action → Reducer → Update State → Reflect in View

Detailed Text Representation of Redux Flow

1. React Component (View)
   Purpose: The starting point where the user interacts with the application. This could be a button click, form submission, etc.
   Action Trigger: When an event occurs (e.g., a button click), a function in the React component calls dispatch() to send an action.
   Example:

javascript
Copy code
const handleClick = () => {
dispatch({ type: 'INCREMENT', payload: 1 });
}; 2. Dispatch Action
What Happens:
dispatch() is a method provided by the Redux store.
It sends an action object to the store, describing the change you want to make.
Example:

javascript
Copy code
dispatch({ type: 'INCREMENT', payload: 1 });
Action Object:

A plain JavaScript object that must have a type property and optional payload for additional data.
javascript
Copy code
{ type: 'INCREMENT', payload: 1 } 3. Action
What Happens:
The dispatched action reaches the Redux store.
The store forwards it to the reducer(s) for processing.
Key Points:

Actions are plain objects.
They describe what happened, but not how the state changes. 4. Reducer
What Happens:
The store calls the reducer function with the current state and the action.
The reducer computes the new state based on the action type and payload.
The reducer returns the updated state.
Key Points:

Reducers are pure functions (no side effects).
They must not mutate the original state but return a new one.
Example:

javascript
Copy code
const counterReducer = (state = { count: 0 }, action) => {
switch (action.type) {
case 'INCREMENT':
return { ...state, count: state.count + action.payload };
default:
return state;
}
}; 5. Redux Store
What Happens:
The store updates its state with the new state returned by the reducer.
It notifies all React components subscribed to the store.
Key Points:

The store acts as the central source of truth for the application state.
Subscribed components automatically receive the latest state. 6. Updated State
What Happens:
The updated state is made available to React components.
Components re-render if they are subscribed to the updated portion of the state.

### Redux Flow Summary

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
