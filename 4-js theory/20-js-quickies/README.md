# ⚡ JavaScript Quickies – 7 Mini Concepts

A super quick reference to clear basic JS concepts with tiny examples.

---

## ✅ 1) Null vs Undefined
```js
let a = null;  // Intentionally empty
console.log(a); // null

let b;  // Declared but not assigned
console.log(b); // undefined
```

---

## ✅ 2) Call by Value & Call by Reference
```js
// Call by Value (Primitive)
let x = 5;
let y = x;
x = 10;
console.log(x); // 10
console.log(y); // 5

// Call by Reference (Non-Primitive)
let obj1 = { name: "Virat" };
let obj2 = obj1;
obj1.name = "Rai";
console.log(obj1); // { name: "Rai" }
console.log(obj2); // { name: "Rai" }
```

---

## ✅ 3) Method vs Function
```js
// Function
function greet() { console.log("I am a Function!"); }
greet();

// Method (function inside object)
const person = {
  name: "Virat",
  greet: function() { console.log("Hello, " + this.name); }
};
person.greet();
```

---

## ✅ 4) Event Loop
```js
console.log("Start");
setTimeout(() => console.log("Timeout Done"), 0);
console.log("End");
// Output: Start -> End -> Timeout Done
```

---

## ✅ 5) Prototype Inheritance
```js
let papa = { wallet: "$1000" };
let beta = {};
beta.__proto__ = papa;
console.log(beta.wallet); // $1000
```

---

## ✅ 6) Lexical Scope
```js
function parentFunction() {
  let outerVar = "Hello from Outer!";
  function childFunction() {
    console.log(outerVar);
  }
  childFunction();
}
parentFunction();
```

---

## ✅ 7) Closure
```js
function outer() {
  let a = 3;
  function inner() {
    console.log(a);
  }
  return inner;
}
let z = outer();
z(); // 3
```

---

## 📝 Footer Year Note
  - Built in **2024**
  - Hosted in **2025**
  - Used footer as: `© 2024 - 2025 Virat Rai. All rights reserved.`

---

## 📝 Author

```
Name     : Virat Rai
Email    : viratrai255075@gmail.com
LinkedIn : https://www.linkedin.com/in/viratrai100
GitHub   : https://github.com/viratrai100
```
