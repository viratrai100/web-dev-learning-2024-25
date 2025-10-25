# 🚀 useRef Hook - Accessing DOM and Mutable Values in React

This project explores the **useRef Hook** in React, demonstrating how to access DOM elements and store mutable values that persist across renders. It's an important part of my React learning journey, focusing on references and direct DOM manipulation.

## 📂 About This Code

This project implements useRef patterns:
- Accessing and manipulating DOM nodes
- Storing mutable values
- Avoiding unnecessary re-renders
- useRef vs useState

```jsx
import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
```

It helps confirm:
- Understanding of useRef Hook
- Accessing and manipulating DOM elements
- Storing mutable values
- Avoiding unnecessary re-renders

## 💡 Technologies Used

- React.js
- React Hooks (useRef)
- JavaScript (ES6+)
- HTML5
- CSS3

## 📘 What I Learned

- How to use useRef for DOM access
- Storing and updating mutable values
- Difference between useRef and useState
- Avoiding re-renders with useRef
- Best practices for using refs

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

This project deepens my understanding of the useRef Hook in React. It demonstrates how to access DOM elements and store mutable values, which is essential for certain interactive and performance-sensitive scenarios in React applications. 