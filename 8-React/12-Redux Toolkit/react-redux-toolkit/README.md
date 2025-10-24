# 🚀 Redux Toolkit - State Management in React

This project explores **Redux Toolkit**, demonstrating how to manage global state in React applications efficiently. It's a key part of my React learning journey, focusing on scalable state management patterns.

## 📂 About This Code

This project implements Redux Toolkit patterns:
- Setting up Redux store
- Creating slices and reducers
- Dispatching actions
- Using selectors
- Connecting Redux to React components

```jsx
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

function Counter() {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>+</button>
    </div>
  );
}
```

It helps confirm:
- Understanding of Redux Toolkit basics
- Global state management
- Action dispatching and reducers
- Connecting Redux to React

## 💡 Technologies Used

- React.js
- Redux Toolkit
- JavaScript (ES6+)
- HTML5
- CSS3

## 📘 What I Learned

- Setting up Redux store with Redux Toolkit
- Creating and using slices
- Dispatching actions and using selectors
- Connecting Redux to React components
- Best practices for scalable state management

## 📝 Footer Year Note
  - Built in **2024**
  - Uploaded in **2025**
  - Used footer as: `© 2025 Virat Rai. All rights reserved.`

## 📝 Author

```
Name     : Virat Rai
Email    : viratrai255075@gmail.com
LinkedIn : https://www.linkedin.com/in/viratrai100
GitHub   : https://github.com/viratrai100
```

---

## 🎯 Summary & Purpose

This project deepens my understanding of global state management in React using Redux Toolkit. It demonstrates how to efficiently manage and update state in large-scale applications, which is essential for building robust and maintainable React projects. 