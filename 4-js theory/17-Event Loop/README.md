# 📚 JavaScript: Event Loop

This project demonstrates how JavaScript manages synchronous and asynchronous tasks using the **Event Loop** mechanism. It includes examples of blocking operations, microtasks vs macrotasks, and callback hell—modeled after concepts explained in web development courses like Love Babbar's.

---

## 🚀 Technologies Used

- HTML5
- JavaScript (Vanilla)

---

## 📖 What I Learned

- 💡 **Synchronous vs Asynchronous Execution**:
  - Synchronous code runs in order, blocking further execution until complete.
  - Asynchronous code (like `setTimeout`, Promises) allows JavaScript to handle other tasks without waiting.

- 🔁 **Event Loop Mechanics**:
  - Call Stack
  - Web APIs (provided by the browser)
  - Callback Queue (macrotasks)
  - Microtask Queue (Promises, MutationObservers)
  - Event Loop continuously checks for stack clearance and pulls tasks accordingly.

- 🔬 **Examples Implemented**:
  - `setTimeout` delay and callback handling
  - Promises and microtask priority
  - Blocking synchronous loops
  - Callback nesting (Callback Hell)

- 🔍 **Execution Order Demonstrated**:
  - Promises (microtasks) run before `setTimeout` (macrotasks)
  - Heavy computation blocks the call stack and delays async callbacks

---

## 🧪 Sample Output (Console)

### Example 1: Microtask vs Macrotask
```js
console.log("Start");
setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
```

**Output:**
```
Start
End
Promise
setTimeout
```

---

## 📝 Footer Year Note
  - Built in **2025**
  - Hosted in **2025**
  - Used footer as: `© 2025 Virat Rai. All rights reserved.`