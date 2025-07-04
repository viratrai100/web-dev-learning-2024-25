# ⚡ JavaScript Theory - DOM Manipulation (innerHTML vs textContent)

This project demonstrates how to manipulate the **Document Object Model (DOM)** in JavaScript, focusing specifically on how `innerHTML` and `textContent` work differently — and why it’s important to understand their behavior when updating or rendering HTML content.

---

## 📂 About This Code

This file includes:
- How to select elements by `id`, `class`, and `querySelector`
- How to update HTML content with `innerHTML`
- How to safely handle text-only content with `textContent`
- Practical examples showing the output difference when inserting tags

---

## 🧠 Key Concepts Covered

### 🎯 Selecting Elements

```js
// Select single elements by ID
let fh = document.querySelector("#f-h");
let sh = document.querySelector("#s-h");
```

---

### 📝 Using `innerHTML`

```js
fh.innerHTML = "<h1>InnerHTML</h1>";
```
✅ Renders the `<h1>` tags as actual HTML, so nested elements are created.

---

### 📝 Using `textContent`

```js
sh.textContent = "<h1>TextContent</h1>";
```
✅ Outputs the entire string as plain text, including `<h1>` tags.  
No HTML parsing happens.

---

### 📌 Output Difference

- `innerHTML` parses the string and inserts valid HTML elements.
- `textContent` escapes HTML, treating it as plain text.

---

## 💡 Technologies Used

- HTML5 (for the document structure)
- CSS3 (basic styling)
- JavaScript (DOM selection and content update)

---

## 📘 What I Learned

- How to select and manipulate DOM elements using JavaScript.
- Difference between `.innerHTML` vs `.textContent` and when to use each.
- How `innerHTML` can pose security risks if not handled properly.
- How `textContent` is safer for inserting text without rendering HTML tags.

---

## 📝 Footer Year Note
  - Built in **2024**
  - Uploaded in **2025**
  - Used footer as: `© 2025 Virat Rai. All rights reserved.`