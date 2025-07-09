# 🔐 JavaScript: Closures

This project explains **Closures** in JavaScript — a powerful feature that allows a function to access variables from its outer scope even after the outer function has finished executing.

Closures are a fundamental part of JavaScript and are commonly used in **data encapsulation**, **function factories**, and maintaining **private state**.

---

## 📘 Topics Covered

- 🔄 Lexical Scope
- 🧠 Understanding how inner functions remember outer scope variables
- 🧽 Code simplification using closures
- 🧪 Block scope behavior with `let`

---

## 📂 Code Highlights

### 🔍 Example 1: Closure with Variable Scope

```js
let name = "Hritik";

function outerFunction() {
    {
        let name = "Tinku"; // Block scope
    }

    function innerFunction() {
        console.log(name);  // Prints "Hritik" due to closure
    }

    innerFunction();
}

outerFunction();
```

### ✅ Example 2: Clean Closure with Return

```js
function outerFunction() {
    let name = "Virat";

    function innerFunction() {
        console.log(name);  // Has access to `name` from outer scope
    }

    return innerFunction;
}

let inner = outerFunction();
inner();  // Output: Virat
```

🧠 In this example, even after `outerFunction` finishes execution, the `innerFunction` still has access to `name` because of **closure**.

---

## 📌 Why Closures Are Useful

- Maintain state between function calls
- Create private variables
- Delay execution while preserving context
- Common in event handlers, callbacks, and async operations

---

## 📝 Footer Year Note
  - Built in **2024**
  - Hosted in **2025**
  - Used footer as: `© 2024 - 2025 Virat Rai. All rights reserved.`