# 🚀 React Form - Handling Forms in React

This project explores **form handling** in React, demonstrating how to manage user input, validation, and form submission. It's a key part of my React learning journey, focusing on controlled components and form state management.

## 📂 About This Code

This project implements form handling patterns:
- Controlled components
- Handling input changes
- Form submission
- Basic validation
- Managing form state

```jsx
import { useState } from 'react';

function MyForm() {
  const [input, setInput] = useState('');

  const handleChange = (e) => setInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted: ' + input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

It helps confirm:
- Understanding of controlled components
- Managing form state
- Handling user input and submission
- Basic validation techniques

## 💡 Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- React Hooks (useState)

## 📘 What I Learned

- Controlled vs uncontrolled components
- Managing form state in React
- Handling input and form events
- Basic validation and feedback
- Best practices for form handling

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

This project deepens my understanding of form handling in React, showing how to manage user input, validation, and submission. It demonstrates best practices for building interactive and user-friendly forms in React applications. 