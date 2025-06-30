# 🧠 JavaScript Theory - Common In-Built Objects

This JavaScript theory project focuses on essential **in-built JavaScript objects** such as `Math` and `Date`. These objects provide built-in methods that simplify many common mathematical and time-related tasks.

## 📂 About This Code

This project demonstrates:
- Use of the `Math` object for calculations
- Using `Date` to fetch and manipulate current or custom dates
- Practical examples of commonly used functions like `round()`, `abs()`, `random()`, `getDay()`, and `setFullYear()`

---

## 🧱 Key Concepts Covered

### 🔹 Math Object
The `Math` object is used for mathematical operations and constants.

```js
console.log(Math.PI);                 // 3.141592653589793

console.log(Math.max(60,30,600));     // 600
console.log(Math.min(60,30,600));     // 30

console.log(Math.round(1.6));         // 2
console.log(Math.round(1.4));         // 1

console.log(Math.floor(1.9));         // 1
console.log(Math.ceil(1.1));          // 2

console.log(Math.abs(-5));            // 5

console.log(Math.random());           // Random value between 0 and 1

console.log(Math.sqrt(5));            // 2.236...
console.log(Math.pow(2, 10));         // 1024
```

---

### 📅 Date Object

#### ✅ Creating Dates
```js
let curr = new Date();                            // Current date/time
let date = new Date("March 25 2004 10:20");       // Custom date
let paramDate = new Date(2006, 5, 20, 2);         // Month is zero-based (5 = June)
```

#### 🕒 Extracting and Setting Data
```js
console.log(date.getDay());         // Day of the week (0 = Sunday)
console.log(date.getFullYear());    // 2004

date.setFullYear(2001);             // Changes year to 2001
console.log(date);                  // Updated date
```

---

## 💡 Technologies Used

- HTML5 (for document structure)
- JavaScript ES6+ features (Math & Date objects)

---

## 📘 What I Learned

- How to perform **mathematical operations** using the `Math` object
- Importance of rounding, ceiling, floor, and random generation
- Creation and formatting of **JavaScript dates**
- Accessing and modifying date properties like day, year, and full date

---

## 📝 Footer Year Note
  - Built in **2024**
  - Uploaded in **2025**
  - Used footer as: `© 2025 Virat Rai. All rights reserved.`