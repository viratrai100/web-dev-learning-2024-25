# 📘 Event Loop

## 📄 Description
JavaScript is a **single-threaded** language, meaning it can do one task at a time. However, with the help of the **Event Loop**, it can handle asynchronous tasks efficiently without blocking the main thread.

## 📌 Key Points / Notes

### 🧠 Synchronous vs Asynchronous
- **Synchronous code** runs line-by-line in the **Call Stack**.
- **Asynchronous code** (like `setTimeout`) is sent to the **Web APIs** and waits for completion.

### 🔁 How Event Loop Works
1. JavaScript executes synchronous code in the **Call Stack**.
2. Asynchronous functions (e.g. `setTimeout`) are handled by the **Web APIs**.
3. Once their delay/time completes, they are moved to the **Callback Queue**.
4. The **Event Loop** checks if the Call Stack is empty, and then moves the callbacks into it one-by-one.

### 🧪 Example

```js
console.log('start');

setTimeout(() => {
    console.log('Timeout Done');
}, 0);

console.log('end');
```

**Output:**
```
start
end
Timeout Done
```

🧾 Even with 0ms delay, `setTimeout` runs last because it waits in the Callback Queue until the Call Stack is clear.

## 📁 Files
- `index.html`
- `script.js`

## 📝 Author

```
Name     : Virat Rai
Email    : viratrai255075@gmail.com
LinkedIn : https://www.linkedin.com/in/viratrai100
GitHub   : https://github.com/viratrai100
```

---