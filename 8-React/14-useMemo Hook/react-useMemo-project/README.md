# 🚀 useMemo Hook - Performance Optimization in React

This project explores the **useMemo Hook** in React, demonstrating how to optimize performance by memoizing expensive calculations. It's an important part of my React learning journey, focusing on rendering efficiency and optimization.

## 📂 About This Code

This project implements useMemo patterns:
- Memoizing expensive calculations
- Avoiding unnecessary recalculations
- Dependency arrays
- Performance optimization

```jsx
import { useMemo, useState } from 'react';

function ExpensiveComponent({ num }) {
  const expensiveValue = useMemo(() => {
    // Simulate expensive calculation
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += num;
    }
    return result;
  }, [num]);

  return <div>Expensive Value: {expensiveValue}</div>;
}
```

It helps confirm:
- Understanding of useMemo Hook
- Memoizing calculations
- Dependency management
- Performance optimization

## 💡 Technologies Used

- React.js
- React Hooks (useMemo)
- JavaScript (ES6+)
- HTML5
- CSS3

## 📘 What I Learned

- How to use useMemo for optimization
- Memoizing expensive calculations
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

This project deepens my understanding of performance optimization in React using the useMemo Hook. It demonstrates how to avoid unnecessary recalculations and improve rendering efficiency, which is essential for building high-performance React applications. 