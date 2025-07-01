# 🧠 JavaScript Theory - Object Cloning & Garbage Collector

This JavaScript project explores the concept of **object cloning** using various techniques and touches upon the automatic memory management mechanism known as the **Garbage Collector**.

## 📂 About This Code

This project demonstrates:
- Dynamic behavior of objects in JavaScript
- How to **clone** an object using multiple methods
- Difference between shallow copy and reference assignment
- An overview of the **Garbage Collector** (conceptual)

---

## 🧱 Key Concepts Covered

### 🔹 Dynamic Nature of Objects
JavaScript objects are dynamic in nature, allowing properties to be added or removed at runtime.

```js
let obj = { age: 12, wt: 54, ht: 140 };
obj.color = "White";        // Added dynamically
console.log(obj);
```

---

### 🧬 Object Cloning Methods

#### ✅ 1. Spread Operator (`...`)
```js
let dest = { ...src };
```
This creates a **shallow copy** of the `src` object.

#### ✅ 2. `Object.assign()` Method
```js
let dest = Object.assign({}, src);
```
Also creates a shallow copy. Multiple objects can be merged:

```js
let dest = Object.assign({}, src1, src2);
```

#### ✅ 3. Iteration with `for...in` Loop
```js
let dest = {};
for (let key in src) {
  dest[key] = src[key];
}
```
Manual approach for cloning without built-in methods.

---

### ⚠️ Reference Assignment vs Cloning

```js
let dest = src;     // Both refer to same object (no clone)
src.age = 50;       // Changes reflected in both
```

Use cloning methods to avoid unintentional updates.

---

### 🗑️ Garbage Collector (Conceptual)

Although not directly implemented in code, JavaScript automatically handles memory management. When objects are no longer referenced, they are cleaned up by the **Garbage Collector**, freeing memory for use.

---

## 💡 Technologies Used

- HTML5 (for structure)
- JavaScript ES6+ (spread, assign, iteration)

---

## 📘 What I Learned

- How to clone JavaScript objects using different approaches
- The risk of reference-based assignment in objects
- Merging multiple objects using `Object.assign()`
- Understanding the basic role of JavaScript's Garbage Collector

---

## 📝 Footer Year Note
  - Built in **2024**
  - Uploaded in **2025**
  - Used footer as: `© 2025 Virat Rai. All rights reserved.`
