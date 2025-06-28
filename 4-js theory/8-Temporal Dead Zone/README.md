# 🧠 JavaScript Theory - Temporal Dead Zone (TDZ)

This theory project explains the concept of **Temporal Dead Zone (TDZ)** in JavaScript — what it is, how it differs between `var`, `let`, and `const`, and how block scope and function scope affect variable accessibility.

## 📂 About This Code

This file demonstrates:
- Global, function, and block scope
- Behavior differences between `var`, `let`, and `const`
- Temporal Dead Zone (TDZ) — what happens when variables are accessed before declaration

---

### 🧩 Key Concepts Covered

#### 🌍 Global Scope
```js
var age = 20;
console.log(age); // ✅ Accessible globally
```

Even inside `if`, `for`, or block statements, `var` remains in global scope:
```js
{
    console.log(age); // ✅ Still accessible if declared globally
}
```

#### 🔒 Function Scope
```js
function sayHello() {
    let fullName = "Earth";
    console.log("Hello Duniya", fullName);
}
sayHello();

console.log(fullName); // ❌ ReferenceError — not accessible outside function
```

#### 📦 Block Scope
`var` is not block scoped:
```js
{
    var age = 20;
}
console.log(age); // ✅ Accessible
```

But `let` and `const` **are block scoped**:
```js
{
    let age = 20;
}
console.log(age); // ❌ ReferenceError
```

Same with `const`:
```js
{
    const age = 20;
}
console.log(age); // ❌ ReferenceError
```

---

### ⏳ Temporal Dead Zone (TDZ)

TDZ refers to the time between entering the block and the actual variable declaration, during which the variable exists but **cannot be accessed**.

#### ⚠️ `var` is hoisted and initialized as `undefined`:
```js
console.log(marks); // undefined
var marks = 100;
console.log(marks); // 100
```

#### ❌ `let` and `const` are hoisted but not initialized (TDZ exists):
```js
console.log(marks); // ❌ ReferenceError
let marks = 100;
console.log(marks); // ✅ Accessible after declaration
```

---

## 💡 Technologies Used

- HTML5 (for structure)
- JavaScript (ES6+ focus on scoping and hoisting behavior)

---

## 📘 What I Learned

- `var` has **function/global scope**, and is accessible outside block scopes
- `let` and `const` have **block scope**, preventing access outside `{}` blocks
- **Temporal Dead Zone** is a critical concept for understanding:
  - Why `let` and `const` throw ReferenceErrors if accessed before declaration
  - How hoisting works differently with `var`, `let`, and `const`

---

## 📝 Footer Year Note
  - Built in **2024**
  - Uploaded in **2025**
  - Used footer as: `© 2025 Virat Rai. All rights reserved.`