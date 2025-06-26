# 🧠 JavaScript Theory - Arrays

This theory project covers **JavaScript Arrays** in depth — from creation to various built-in methods like `push`, `pop`, `splice`, `map`, `filter`, and more. It also demonstrates how arrays interact with loops, functions, and arrow functions.

## 📂 About This Code

This project demonstrates how to:
- Create and access arrays
- Use array methods for adding/removing elements
- Apply loop and functional programming techniques
- Combine arrays with functions and arrow functions

---

### 🧩 Key Concepts Covered

#### 🧱 Array Creation
- Literal syntax (`let arr = [1,2,3]`)
- Using `Array` constructor (`new Array(...)`)
- Shallow copying of objects

#### 🔄 Array Modification Methods
- `push()` and `pop()` for end-based add/remove
- `shift()` and `unshift()` for start-based add/remove
- `slice()` for non-mutating extraction
- `splice()` for mutating add/replace/delete

#### 🔧 Functional Array Methods
- `map()` for transformations (e.g., squaring elements)
- `filter()` for conditional selection (even numbers, strings)
- `reduce()` for accumulation (e.g., summing numbers)

#### 🔢 Sorting and Searching
- `sort()` and `reverse()` for order manipulation
- `indexOf()` for finding elements
- `length` for measuring array size

#### 🔁 Loops With Arrays
- `for`, `forEach()`, `for...of`
- `for...in` with objects
- Working with strings using `for...of`

#### 🧮 Arrays With Functions
- Passing arrays to functions
- Calculating sum using both traditional loops and `forEach`
- Using function expressions and arrow functions with arrays

---

## 🔤 Sample Snippets

```javascript
// Array declaration
let arr = [10, 20, 30];

// Push and Pop
arr.push(40);   // Add
arr.pop();      // Remove

// Map - Squaring elements
let squares = arr.map((num) => num * num);

// Filter - Even numbers
let evens = arr.filter((num) => num % 2 === 0);

// Reduce - Sum of array
let total = arr.reduce((acc, curr) => acc + curr, 0);

// Splice - Add, replace, delete
arr.splice(1, 1, 'NewValue');

// Arrow Function with Array
let getSum = (arr) => {
  let sum = 0;
  arr.forEach((val) => sum += val);
  return sum;
};
```

---

## 💡 Technologies Used

- HTML5 (for structure)
- JavaScript (ES6+ with Array methods and arrow functions)

---

## 📘 What I Learned

- Mastery over various ways to **manipulate arrays**
- Practical usage of array methods like `map`, `filter`, `reduce`, `splice`
- How to loop through arrays using `for`, `forEach`, `for...of`
- Using functions (traditional, anonymous, arrow) to process arrays
- Clean and readable array handling with modern JavaScript syntax

---

## 📝 Footer Year Note
  - Built in **2024**
  - Uploaded in **2025**
  - Used footer as: `© 2025 Virat Rai. All rights reserved.`