# 🚀 useEffect Hook - Side Effects in React

This project explores the **useEffect Hook** in React, demonstrating how to handle side effects in functional components. It's a crucial part of my React learning journey, focusing on lifecycle management and side effects.

## 📂 About This Code

This project implements various useEffect patterns:
- Basic side effects
- Cleanup functions
- Dependency arrays
- Multiple effects
- Effect timing

```jsx
import { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Side effect: Fetch data
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));

    // Cleanup function
    return () => {
      // Cleanup code here
    };
  }, []); // Empty dependency array

  return (
    <div>
      {data ? <DisplayData data={data} /> : <Loading />}
    </div>
  );
}
```

It helps confirm:
- Understanding of side effects
- Effect cleanup
- Dependency management
- Effect timing control
- Performance optimization

## 💡 Technologies Used

- React.js
- React Hooks (useEffect, useState)
- JavaScript (ES6+)
- HTML5
- CSS3

## 📘 What I Learned

- useEffect Hook fundamentals
- Side effect management
- Cleanup function implementation
- Dependency array usage
- Effect timing and optimization
- Common useEffect patterns
- Avoiding infinite loops

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

This project deepens my understanding of side effects in React through the useEffect Hook. It demonstrates how to properly manage side effects, handle cleanup, and optimize performance in functional components. This knowledge is essential for building robust React applications that handle asynchronous operations and side effects effectively. 