# 🚨 JavaScript Theory - Error Handling

This JavaScript project focuses on **error types**, and how to gracefully handle exceptions using `try-catch-finally` blocks, as well as how to **create custom errors** using the `Error` object.

## 📂 About This Code

The project demonstrates:
- Different types of errors in JavaScript (Compile-time, Runtime)
- How to use `try-catch` for safer code execution
- The use of `finally` block
- Throwing custom errors using the `Error` constructor

---

## 🧱 Key Concepts Covered

### ❌ Compile-Time Error (Syntax Error)
Occurs due to incorrect syntax and stops code from executing.

```js
// Missing closing parenthesis
// console.log(50;
```

---

### 🛑 Runtime Error (Reference Error)
Occurs during execution when accessing undefined variables.

```js
// x is not declared
// console.log(x);     // ReferenceError
```

---

### 🧪 `try-catch` Block

```js
try {
    console.log("Try block starts");
    console.log(x);  // x is not declared
    console.log("Try block ends");
} catch (err) {
    console.log("I AM INSIDE CATCH BLOCK");
    console.log("Your Error Is Here:", err);
}
```

> Only code inside `try` block after the error is skipped. `catch` handles it gracefully.

---

### 🔁 `finally` Block

The `finally` block **always executes**, whether an error occurs or not.

```js
try {
    console.log(x);
} catch (err) {
    console.log("Caught error");
} finally {
    console.log("I will run every time");
}
```

---

### ⚙️ Throwing Custom Errors

You can manually create and throw custom errors using the `Error` constructor.

```js
try {
    console.log(x);
} catch {
    throw new Error("Bhai Pahle Declare Kar Do Phir Print Karna");
}
```

Another example:
```js
let errorCode = 100;
if (errorCode === 100) {
    throw new Error("Invalid JSON");
}
```

---

## 💡 Technologies Used

- HTML5 (basic structure)
- JavaScript (Error objects, control flow)

---

## 📘 What I Learned

- Differences between compile-time and runtime errors
- How to use `try`, `catch`, and `finally` blocks
- How to create and throw custom errors
- Why error handling improves reliability in applications

---

## 📝 Footer Year Note
  - Built in **2024**
  - Uploaded in **2025**
  - Used footer as: `© 2025 Virat Rai. All rights reserved.`