# 🎨 JavaScript Theory - DOM Manipulation (Styling Elements)

This project explores how to style HTML elements using **JavaScript DOM APIs**, including `style`, `cssText`, `setAttribute`, `className`, and `classList` methods.

---

## 📂 About This Code

The code demonstrates:
- Direct inline styling with `.style`
- Applying multiple styles via `.cssText`
- Changing attributes using `setAttribute()`
- Modifying classes via `className` and `classList` (`add`, `remove`, `toggle`, `contains`)

---

## 🧠 Key Concepts Covered

### 🎯 Direct Styling

```js
let paraElement = document.getElementById("spara");
paraElement.style.backgroundColor = "blue";
paraElement.style.color = "white";
```

---

### 🧾 CSS Text

```js
let secondElement = document.getElementById('sdiv');
secondElement.style.cssText = "background-color: black; color: white; padding: 0.5rem";
```

---

### ⚙️ Using `setAttribute()`

```js
let firstElement = document.querySelector('#fdiv');
firstElement.setAttribute('class', 'secondDivClass');
firstElement.setAttribute('style', 'padding: 0.1rem');
```

---

### 🏷️ Changing `className`

```js
let fpara = document.querySelector('#fpara');
fpara.className = "Virat Sahil";
```

> Note: This will **overwrite** existing classes.

---

### 🧩 Using `classList`

```js
let fpara = document.querySelector('#fpara');

// Add a class
fpara.classList.add('thirdClass');

// Remove a class
fpara.classList.remove('thirdClass');

// Toggle a class
fpara.classList.toggle('secondClass'); // Adds if not present, removes if present

// Check if class exists
fpara.classList.contains('firstClass'); // returns true or false
```

---

## 💡 Technologies Used

- HTML5
- JavaScript (DOM API for styling and class manipulation)

---

## 📘 What I Learned

- How to dynamically change inline CSS styles via `.style` and `.cssText`
- How to set attributes programmatically using `setAttribute()`
- The difference between `.className` and `.classList`
- Efficient ways to manipulate classes (add, remove, toggle, contains)

---

## 📝 Footer Year Note
  - Built in **2024**
  - Uploaded in **2025**
  - Used footer as: `© 2025 Virat Rai. All rights reserved.`