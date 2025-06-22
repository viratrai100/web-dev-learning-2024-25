# 📘 JavaScript Theory - Variables & Data Types

This code demonstrates the foundational concepts of **variables** and **data types** in JavaScript. It explores how different variable declarations (`var`, `let`, `const`) behave, along with how JavaScript handles dynamic typing.

## 📂 About This Code

This theory file includes multiple commented examples that explain:

- Scope and re-declaration rules of `var`, `let`, and `const`
- JavaScript's dynamic typing (changing data types during runtime)
- Handling of large numbers and type checking using `typeof`
- The difference between `null`, `undefined`, and primitive values

### Sample Concepts Covered

```javascript
var x = 10;
var x = 20; // Re-declaration allowed with var

let a = 10;
a = "Virat"; // Dynamic typing

const b = 28;
// b = 30; // ❌ Error: const variables can't be reassigned

let mark = null;
console.log(typeof(mark)); // "object"
```

These examples are important for understanding how JavaScript stores and manages values in memory, and how different types of variables behave in different scopes.

## 💡 Technologies Used

- HTML5 (for structure)
- JavaScript (Vanilla)

## 📘 What I Learned

- Difference between `var`, `let`, and `const` declarations
- How `let` and `const` are block-scoped while `var` is function-scoped
- JavaScript is a dynamically typed language
- Use of `typeof` to check variable data types
- Why `typeof null` returns `"object"` (a long-standing JavaScript quirk)

## 📝 Footer Year Note
  - Built in **2024**
  - Uploaded in **2025**
  - Used footer as: `© 2025 Virat Rai. All rights reserved.`