# 🧱 JavaScript Theory - DOM Manipulation (Access/Insert/Update/Delete)

This JavaScript project explores how to interact with the **DOM (Document Object Model)** using various techniques — including element selection, insertion, updating, positioning, and deletion.

---

## 📂 About This Code

The project showcases:
- Accessing elements via `id`, `class`, and `querySelector`
- Updating element content using `textContent`, `innerText`, and `innerHTML`
- Inserting new elements using `appendChild()` and `createElement()`
- Advanced positioning with `insertAdjacentElement()`
- Removing elements using `removeChild()`

---

## 🧠 Key Concepts Covered

### 🔍 Access Elements

```js
document.getElementById("fpara");
document.getElementById("fheading");
document.getElementsByClassName("cheading");

document.querySelector("#fpara");
document.querySelector(".textMatter");
document.querySelectorAll(".textMatter");
```

---

### 📝 Update Elements

```js
let element = document.querySelector('#fdiv');

console.log(element.textContent);  // Raw text (includes spacing)
console.log(element.innerText);    // Rendered/visible text
```

---

### ➕ Insert Elements

```js
let fHeading = document.createElement('h1');
fHeading.textContent = "My Name Is Virat Rai";

let bodyTag = document.querySelector('body');
bodyTag.appendChild(fHeading);
```

---

### 🎯 Insert at Specific Position

```js
let mydiv = document.querySelector('#mydiv');
let newElement = document.createElement('span');
newElement.textContent = "This Is Me Virat Rai";

// Insert in different positions
mydiv.insertAdjacentElement('beforebegin', newElement);
mydiv.insertAdjacentElement('afterbegin', newElement);
mydiv.insertAdjacentElement('beforeend', newElement);
mydiv.insertAdjacentElement('afterend', newElement);
```

---

### ❌ Remove Element

```js
let parent = document.querySelector("#mydiv");
let child = document.querySelector("#fpara");
parent.removeChild(child);
```

> `removeChild()` is used to delete a child node from its parent.

---

## 💡 Technologies Used

- HTML5 (element structure)
- JavaScript (DOM APIs)

---

## 📘 What I Learned

- How to access elements using different selectors (`id`, `class`, `querySelector`)
- The difference between `innerText`, `textContent`, and `innerHTML`
- How to insert elements dynamically and control their exact position
- Techniques to remove elements from the DOM

---

## 📝 Footer Year Note
  - Built in **2024**
  - Uploaded in **2025**
  - Used footer as: `© 2025 Virat Rai. All rights reserved.`