# 🧠 JavaScript Theory - Variable/Function Hoisting & Function Calls

This theory project explains how **function and variable hoisting** works in JavaScript. It also covers multiple ways to define and invoke functions — including usage within data structures and objects.

## 📂 About This Code

This file covers:
- Function and variable hoisting with `var`, `let`, and `const`
- Function declaration vs function expression
- Using functions as first-class citizens (passing, returning, storing)
- Real-world use cases of functions in arrays and objects

---

### 🧩 Key Concepts Covered

#### ⬆️ Hoisting in JavaScript

**Function Hoisting**
- Functions declared using the `function` keyword are hoisted entirely — you can call them before they're defined.

```js
sayMyName("Virat");

function sayMyName(finalName) {
    console.log(finalName);
}
```

**Variable Hoisting**
- Variables declared with `var` are hoisted but initialized as `undefined`
- `let` and `const` are hoisted but not initialized (Temporal Dead Zone)

```js
console.log(age); // undefined
var age = 25;

console.log(age); // ReferenceError
let age = 25;
```

---

### 🔃 Function Types & Use Cases

#### ✅ Function Declaration
```js
function sayHello() {
  console.log("Hello Ji Kaise Ho Sare");
}
sayHello();
```

#### ⚠️ Function Expression (Hoisting Issues)
```js
sayHello(); // ❌ ReferenceError
let sayHello = function () {
  console.log("Hello Ji Kaise Ho Sare");
};
```

#### 🔁 Passing Functions as Arguments
```js
function greet() {
  console.log("Greeting for the day");
}

function greetMe(greetFunc, fullName) {
  console.log("Hello", fullName);
  greetFunc();
}

greetMe(greet, 'Virat');
```

#### 🧪 Returning Functions from Functions
```js
function solve() {
  return function(number) {
    return number * number;
  };
}

let ans = solve();
console.log(ans(10)); // 100
```

#### 🧰 Function Inside Data Structures
```js
const arr = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
];

console.log(arr[0](5, 10)); // 15
```

#### 🧱 Functions as Object Properties
```js
let obj = {
  name: "Virat",
  greet: () => {
    console.log("Hello Ji Kaise Ho Saare");
  }
};

obj.greet();
```

---

## 💡 Technologies Used

- HTML5 (structure)
- JavaScript (ES6+ features and hoisting behavior)

---

## 📘 What I Learned

- How **function hoisting** allows calling functions before declarations
- Why **variable hoisting** behaves differently for `var`, `let`, and `const`
- Real differences between **function declarations** and **expressions**
- Functions can be:
  - Passed as arguments
  - Returned from other functions
  - Stored inside arrays
  - Used as object properties
- Understanding **first-class functions** in JavaScript

---

## 📝 Footer Year Note
  - Built in **2024**
  - Uploaded in **2025**
  - Used footer as: `© 2025 Virat Rai. All rights reserved.`
