# 🚀 Pass Props as Child - Component Composition in React

This project demonstrates **component composition** in React by exploring different ways to pass props and children to components. It's an important part of my React learning journey, focusing on component communication patterns.

## 📂 About This Code

This project showcases various prop passing techniques:
- Props drilling
- Children props
- Component composition
- Prop types and validation

```jsx
// Parent Component
function Parent() {
  return (
    <Child>
      <h1>This is a child element</h1>
      <p>Passed as children prop</p>
    </Child>
  );
}

// Child Component
function Child({ children }) {
  return (
    <div className="child-container">
      {children}
    </div>
  );
}
```

It helps confirm:
- Understanding of component composition
- Different ways to pass data between components
- Children prop usage
- Component hierarchy and data flow

## 💡 Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- PropTypes (optional)

## 📘 What I Learned

- Component composition patterns
- Children prop usage and benefits
- Props drilling and its implications
- Component hierarchy management
- Best practices for component communication
- Understanding React's component tree

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

This project enhances my understanding of component composition in React, demonstrating how to effectively pass data and children between components. It shows the importance of proper component structure and communication patterns in building maintainable React applications. 