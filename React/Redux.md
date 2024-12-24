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
  - Use ```useDispatch``` to trigger the thunk.
  - Use ```useSelector``` to access state updates.

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


