# 🚀 JavaScript Theory - Performance: Reflow & Repaint

This project explores **performance optimization techniques** in DOM manipulation, focusing on:
- **Reflow** and **Repaint**
- Use of `DocumentFragment`
- Comparing DOM manipulation methods using `performance.now()`

---

## 📂 About This Code

The code benchmarks three methods of inserting 100 `<p>` tags into the DOM and compares the time taken by each approach:
1. Appending directly to `document.body` in each iteration
2. Appending to a `div` first, then adding it to `document.body`
3. Appending to a `DocumentFragment`, then appending the fragment

Each approach demonstrates the impact on **reflow** and **repaint**, with the `DocumentFragment` approach offering the most optimized performance.

---

## ⚙️ Code Comparisons

### ⛔ Code 1 - Direct DOM Append (High Reflow/Repaint)

```js
const t1 = performance.now();
for(let i = 0; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = 'This is Para ' + i;
    document.body.appendChild(para);
}
const t2 = performance.now();
console.log("Total time by code 1: ", (t2 - t1));
```

---

### ⚠️ Code 2 - Append to a Div First (Moderate Reflow/Repaint)

```js
const t3 = performance.now();

let mydiv = document.createElement('div');
for(let i = 1; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is Para " + i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);

const t4 = performance.now();
console.log("Total time by code 2: ", (t4 - t3));
```

---

### ✅ Code 3 - Using DocumentFragment (Optimized)

```js
const t5 = performance.now();

let fragment = document.createDocumentFragment();
for(let i = 1; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = "This Is Para " + i;
    fragment.appendChild(para);  // No reflow/repaint here
}
document.body.appendChild(fragment); // One reflow/repaint

const t6 = performance.now();
console.log("Total time by code 3: ", (t6 - t5));
```

---

## 📈 Key Learning Points

- **Reflow**: Layout calculation after DOM changes
- **Repaint**: Pixel update due to styling or visual changes
- Frequent DOM updates inside a loop cause multiple reflows → **slow performance**
- `DocumentFragment` allows batching DOM changes → **highly efficient**

---

## 💡 Technologies Used

- HTML5
- JavaScript (`performance.now()`, `DocumentFragment`, DOM manipulation)

---

## 📘 What I Learned

- How to measure JavaScript performance with `performance.now()`
- The impact of reflow and repaint on page rendering
- How `DocumentFragment` helps reduce performance cost
- Best practices for DOM insertion and rendering efficiency

---

## 📝 Footer Year Note
  - Built in **2024**
  - Uploaded in **2025**
  - Used footer as: `© 2025 Virat Rai. All rights reserved.`