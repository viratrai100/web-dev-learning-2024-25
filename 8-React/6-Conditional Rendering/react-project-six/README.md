# 🚀 Conditional Rendering - Dynamic UI in React

This project explores **conditional rendering** in React, demonstrating how to create dynamic user interfaces based on different conditions. It's an essential part of my React learning journey, focusing on UI control flow.

## 📂 About This Code

This project implements various conditional rendering patterns:
- if/else conditions
- Ternary operators
- Logical && operator
- Switch statements
- Conditional components

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please sign in</h1>
      )}
      
      {isLoggedIn && <UserDashboard />}
    </div>
  );
}
```

It helps confirm:
- Understanding of conditional rendering patterns
- Dynamic UI implementation
- Component visibility control
- State-based rendering

## 💡 Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- React Hooks (useState)

## 📘 What I Learned

- Different conditional rendering patterns
- When to use each pattern
- Performance considerations
- Code readability best practices
- Component reusability with conditions
- State management with conditional UI

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

This project enhances my understanding of conditional rendering in React, showing how to create dynamic and responsive user interfaces. It demonstrates various patterns for controlling component visibility and content based on different conditions, which is crucial for building interactive React applications. 