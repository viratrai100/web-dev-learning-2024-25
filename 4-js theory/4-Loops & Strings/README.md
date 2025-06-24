# 🔁 JavaScript Theory - Loops & Strings

This project explains **looping structures** and **string handling** in JavaScript. It contains hands-on examples to practice control flow and various string operations—critical for any developer starting out.

## 📂 About This Code

This theory file is divided into **two major sections**:

---

### 🔄 Looping Concepts Covered

- `for` loop
  - Forward counting (`1 → 10`)
  - Reverse counting (`10 → 1`)
  - Using `break` and `continue`
- `while` loop
  - Basic example with incrementing counter
  - Example of avoiding infinite loop
- `do-while` loop
  - Explanation of how it runs **at least once** regardless of condition
- **Infinite loop handling** and how to prevent it

### Sample Snippets:

```javascript
for (let i = 1; i <= 10; i++) {
  console.log("i =", i);
}

let i = 1;
while (i <= 5) {
  console.log("While Loop =", i);
  i++;
}

do {
  console.log("Do While Loop =", i);
  i++;
} while (i <= 5);
```

---

### 🔤 String Handling Concepts Covered

- Declaring strings using:
  - Single and double quotes
  - Template literals (backticks)
  - `String` constructor
- Multi-line strings with backticks
- String concatenation (`+` operator and template literals)
- String methods:
  - `.length`
  - `.toUpperCase()` / `.toLowerCase()`
  - `.substring(start, end)`
  - `.split(separator)`
  - `.join(separator)`
- Escape characters and backslashes (`\\`, `\"`)

### Sample Snippets:

```javascript
let fullName = `Virat 
Rai
Learning JS`;

let sentence = "Hello \\Jee \\Kaise \\Ho \\Saare";

let words = sentence.split('\\');
console.log(words);           // Split into array
console.log(words.join('-')); // Join with "-"
```

---

## 💡 Technologies Used

- HTML5 (for structure)
- JavaScript (Vanilla)

## 📘 What I Learned

- Deep understanding of different types of loops and their ideal use cases
- Practical use of `break` and `continue` for flow control
- Avoiding and debugging infinite loops
- Working with strings: declaration, formatting, transformation, and parsing
- Mastery over `.split()` and `.join()` for string manipulation

## 📝 Footer Year Note
  - Built in **2024**
  - Uploaded in **2025**
  - Used footer as: `© 2025 Virat Rai. All rights reserved.`
