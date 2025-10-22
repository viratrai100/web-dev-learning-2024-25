# 🚀 React Routing - Navigation in React Applications

This project explores **React Router**, demonstrating how to implement navigation and routing in React applications. It's a key part of my React learning journey, focusing on multi-page app structure and navigation patterns.

## 📂 About This Code

This project implements routing patterns:
- Setting up React Router
- Defining routes and navigation
- Route parameters
- Nested routes
- Navigation links

```jsx
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```

It helps confirm:
- Understanding of React Router basics
- Navigation between pages
- Route configuration
- Dynamic and nested routing

## 💡 Technologies Used

- React.js
- React Router
- JavaScript (ES6+)
- HTML5
- CSS3

## 📘 What I Learned

- How to set up React Router
- Defining and using routes
- Navigation link creation
- Route parameters and nested routes
- Best practices for navigation

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

This project deepens my understanding of navigation and routing in React applications. It demonstrates how to structure multi-page apps and manage navigation, which is essential for building scalable and user-friendly React projects. 