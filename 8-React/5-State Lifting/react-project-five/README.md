# 🚀 State Lifting - Managing Shared State in React

This project demonstrates **state lifting** in React, showing how to manage and share state between sibling components. It's a crucial concept in my React learning journey, focusing on state management patterns.

## 📂 About This Code

This project implements state lifting patterns:
- Lifting state up to common ancestor
- Sharing state between siblings
- State management best practices
- Component communication

```jsx
// Parent Component
function Parent() {
  const [sharedState, setSharedState] = useState('');
  
  return (
    <div>
      <ChildA 
        value={sharedState} 
        onChange={setSharedState} 
      />
      <ChildB 
        value={sharedState} 
        onChange={setSharedState} 
      />
    </div>
  );
}
```

It helps confirm:
- Understanding of state lifting patterns
- State sharing between components
- Component communication methods
- State management architecture

## 💡 Technologies Used

- React.js
- React Hooks (useState)
- JavaScript (ES6+)
- HTML5
- CSS3

## 📘 What I Learned

- State lifting patterns and when to use them
- Managing shared state between components
- Component communication strategies
- State management best practices
- Understanding component hierarchy
- Performance considerations in state management

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

This project deepens my understanding of state management in React, particularly focusing on state lifting patterns. It demonstrates how to effectively share and manage state between components, which is essential for building complex React applications with proper data flow and component communication. 