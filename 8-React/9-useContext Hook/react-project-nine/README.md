# 🚀 useContext Hook - Context API in React

This project explores the **useContext Hook** in React, demonstrating how to manage global state and share data across components without prop drilling. It's an important part of my React learning journey, focusing on context and state management.

## 📂 About This Code

This project implements useContext patterns:
- Creating and providing context
- Consuming context in components
- Avoiding prop drilling
- Managing global state

```jsx
import React, { useContext, createContext, useState } from 'react';

const MyContext = createContext();

function Parent() {
  const [value, setValue] = useState('Hello Context!');
  return (
    <MyContext.Provider value={value}>
      <Child />
    </MyContext.Provider>
  );
}

function Child() {
  const value = useContext(MyContext);
  return <div>{value}</div>;
}
```

It helps confirm:
- Understanding of React Context API
- Avoiding prop drilling
- Sharing state globally
- useContext Hook usage

## 💡 Technologies Used

- React.js
- React Hooks (useContext, useState)
- JavaScript (ES6+)
- HTML5
- CSS3

## 📘 What I Learned

- How to create and use context
- Avoiding prop drilling
- Global state management
- Best practices for context usage
- Performance considerations

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

This project deepens my understanding of the Context API and useContext Hook in React. It demonstrates how to manage and share global state efficiently, which is essential for building scalable React applications. 