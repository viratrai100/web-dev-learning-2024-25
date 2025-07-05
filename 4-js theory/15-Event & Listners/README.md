# ⚡ JavaScript Theory - Events & Event Listeners

This project explores how to handle user interactions using **JavaScript Events** and **Event Listeners**, including how to:
- Add and remove listeners
- Work with the event object
- Prevent default behavior
- Use event delegation

---

## 📂 About This Code

The code demonstrates:
- How to register and remove event listeners
- How to handle click events on individual and multiple elements
- Using `event.target` and `event.preventDefault()`
- Event delegation using a parent wrapper element

---

## 🧠 Key Concepts Covered

### 🎯 Basic Event Listener

```js
function changeText() {
  let fpara = document.getElementById('fpara');
  fpara.textContent = "Hello Virat";
}

let fpara = document.getElementById('fpara');
fpara.addEventListener('click', changeText);
```

### 🔄 Remove Event Listener

```js
fpara.removeEventListener('click', changeText);
```

---

### 🧾 Event Object

```js
function changeText(event) {
  console.log(event); // Logs event details
  fpara.textContent = "Hello Virat";
}
```

---

### 🚫 Prevent Default Action

```js
let anchorElement = document.getElementById('fanchor');

anchorElement.addEventListener('click', function(event) {
  event.preventDefault(); // Stops redirect
  anchorElement.textContent = "Click Done Bhai";
});
```

---

### 📃 Adding Event to All Paragraphs

```js
let paras = document.querySelectorAll('p');

function alertPara(event) {
  alert("You Have Clicked On Para: " + event.target.textContent);
}

for (let i = 0; i < paras.length; i++) {
  paras[i].addEventListener('click', alertPara);
}
```

---

### 🪄 Event Delegation via Wrapper

```js
function alertPara(event) {
  if (event.target.nodeName == 'SPAN') {
    alert("You Have Clicked On Span: " + event.target.textContent);
  }
}

let mydiv = document.getElementById('wrapper');
document.addEventListener('click', alertPara);
```

> ✅ Event delegation helps in handling events efficiently using a single listener on a parent.

---

## 💡 Technologies Used

- HTML5
- JavaScript (DOM Events)

---

## 📘 What I Learned

- How to create interactive UIs with event listeners
- Importance of the `event` object
- How to stop default browser behavior with `preventDefault()`
- Event delegation pattern for cleaner and efficient event handling

---

## 📝 Footer Year Note
  - Built in **2024**
  - Uploaded in **2025**
  - Used footer as: `© 2025 Virat Rai. All rights reserved.`