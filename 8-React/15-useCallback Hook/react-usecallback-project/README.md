# 🚀 useCallback Hook - Memoizing Functions in React

This project explores the **useCallback Hook** in React, demonstrating how to memoize functions and optimize performance by preventing unnecessary re-creations of callbacks. It's an important part of my React learning journey, focusing on function memoization and rendering efficiency.

## 📂 About This Code

This project implements useCallback patterns:
- Memoizing callback functions
- Passing stable callbacks to child components
- Dependency arrays
- Performance optimization

```jsx
import { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

It helps confirm:
- Understanding of useCallback Hook
- Memoizing functions
- Passing stable callbacks
- Performance optimization

## 💡 Technologies Used

- React.js
- React Hooks (useCallback, useState)
- JavaScript (ES6+)
- HTML5
- CSS3

## 📘 What I Learned

- How to use useCallback for function memoization
- Passing stable callbacks to children
- Dependency array usage
- Avoiding unnecessary renders
- Best practices for performance

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

This project deepens my understanding of function memoization in React using the useCallback Hook. It demonstrates how to optimize performance by preventing unnecessary re-creations of functions, which is essential for building efficient React applications. 