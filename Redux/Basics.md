# Action Creators in Redux

- What are they?
  Functions that return action objects (used to update Redux state).
- Why use them?
- Example:
  - Without Action Creator:
  ```
  dispatch({ type: 'INCREMENT' });
  ```
  - With Action Creator:

```
const increment = () => ({ type: 'INCREMENT' });
dispatch(increment());
```

  - With Payload:

```
const setUser = (user) => ({ type: 'SET_USER', payload: user });
dispatch(setUser({ name: 'John', age: 30 }));
```

 - Async Example (with Redux Thunk):

```
const fetchUser = (id) => async (dispatch) => {
  const user = await fetch(`/api/users/${id}`).then(res => res.json());
  dispatch({ type: 'SET_USER', payload: user });
};
dispatch(fetchUser(1));
```

- Action creators make Redux code easier to manage and scale!


