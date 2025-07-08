# 📦 JavaScript: Promises

This project covers the fundamentals of **Promises** in JavaScript. It explores how Promises help handle asynchronous operations, and includes key concepts such as resolving, rejecting, chaining, error handling, finalization, and combining multiple promises.

---

## 📘 Topics Covered

- ✅ Creating Promises
- 🔗 Chaining with `.then()`
- ❌ Handling Rejection with `.catch()`
- 🧹 Final Cleanup with `.finally()`
- 📦 Aggregation using `Promise.all()`
- 🧠 Understanding Async Flow and Error Handling

---

## 📂 Code Highlights

### ✅ Creating and Resolving a Promise
```js
let firstPromise = new Promise((resolve, reject) => {
    resolve(1001); 
});
```

### ❌ Rejecting a Promise
```js
let firstPromise = new Promise((resolve, reject) => {
    reject(new Error("Internal Server Error")); 
});
```

### 🔗 Chaining `.then()`
```js
Promise1.then((message) => {
    console.log("Step 1:", message);
    return "Step 2";
}).then((message) => {
    console.log("Step 2:", message);
});
```

### ❌ Error Handling with `.catch()`
```js
Promise1
  .then(msg => console.log(msg))
  .catch(err => console.error("Error:", err));
```

### 🧹 Using `.finally()`
```js
Promise1
  .then(msg => console.log(msg))
  .catch(err => console.error(err))
  .finally(() => {
    console.log("Cleanup complete.");
  });
```

### 📦 Handling Multiple Promises with `Promise.all()`
```js
let Promise1 = new Promise(resolve => setTimeout(resolve, 1000, "First"));
let Promise2 = new Promise(resolve => setTimeout(resolve, 1000, "Second"));
let Promise3 = new Promise((_, reject) => setTimeout(reject, 1000, "Third"));

Promise.all([Promise1, Promise2, Promise3])
  .then(values => console.log(values))
  .catch(error => console.error("error:", error));
```

---

## 📝 Footer Year Note
  - Built in **2024**
  - Hosted in **2025**
  - Used footer as: `© 2024 - 2025 Virat Rai. All rights reserved.`