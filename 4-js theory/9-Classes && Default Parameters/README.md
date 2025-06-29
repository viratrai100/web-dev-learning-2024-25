# 🧠 JavaScript Theory - Classes & Default Parameters

This JavaScript theory project covers the foundational and advanced use of **Classes**, **Constructors**, **Private Properties**, **Getters & Setters**, and **Default Parameters** — including how they behave with different data types and functions.

## 📂 About This Code

This project demonstrates:
- How to define classes in JavaScript
- Use of private class fields with `#`
- Accessor methods: `get` and `set`
- Constructor functions
- Default parameter values in functions
- Passing objects, arrays, `null`, `undefined`, and functions as default parameters

---

## 🧱 Key Concepts Covered

### 🔹 Class Basics with Methods and Properties
```js
class Human {
    age = 20;
    #wt = 54; // private field
    ht = 150;

    walking() {
        console.log("I am Walking", this.#wt);
    }

    running() {
        console.log("I am Running");
    }
}

let obj = new Human();
obj.walking(); // Accesses private field via method
```

---

### 🔐 Private Fields and Accessors
Private fields cannot be accessed directly:
```js
console.log(obj.#wt); // ❌ SyntaxError
```

Use `get` and `set`:
```js
class Human {
    #wt = 54;

    get fetchWeight() {
        return this.#wt;
    }

    set modifyWeight(val) {
        this.#wt = val;
    }
}
```

---

### 🏗 Constructor Usage
```js
class Human {
    #wt;
    constructor(age, height, weight) {
        this.age = age;
        this.ht = height;
        this.#wt = weight;
    }
}

let obj = new Human(50, 190, 101);
console.log(obj.fetchWeight);
```

---

## 🧾 Default Parameters in Functions

### ✅ Basic Default Usage
```js
function sayName(name = "Sahil Rai") {
    console.log("My Name Is:", name);
}
sayName(); // My Name Is: Sahil Rai
sayName("Virat Rai"); // My Name Is: Virat Rai
```

### 🔁 Multiple Default Parameters
```js
function sayName(fName = "Sahil", lName = "Rai") {
    console.log("My Name Is:", fName, lName);
}
sayName(); // My Name Is: Sahil Rai
```

### 🔁 Expression in Default Value
```js
function sayName(fName = "Sahil", lName = fName.toUpperCase()) {
    console.log("My Name Is:", fName, lName);
}
sayName();           // My Name Is: Sahil SAHIL
sayName("Virat");    // My Name Is: Virat VIRAT
```

### 🧪 Using Object/Array Defaults
```js
function solve(value = { age: 15, wt: 54, ht: 150 }) {
    console.log("HELLO JI", value);
}

function solveArr(value = ["Virat", "Sahil", "Rai"]) {
    console.log("HELLO JI", value);
}
```

### 🎭 Special Cases
```js
solve();          // Uses default
solve(null);      // Prints null
solve(undefined); // Uses default
```

---

### 🔧 Function as Default Parameter
```js
function getAge() {
    return 190;
}

function utility(name = "Sahil", age = getAge()) {
    console.log(name, age);
}

utility("Virat", 20);  // Virat 20
utility("Virat");      // Virat 190
utility();             // Sahil 190
```

---

## 💡 Technologies Used

- HTML5 (for document structure)
- JavaScript ES6+ features (Classes, Private Fields, Default Parameters)

---

## 📘 What I Learned

- How to define and use **classes**, **private properties**, and **constructor functions**
- The use of `get` and `set` for controlled access to class internals
- Multiple ways to set **default values** in functions
- How **default values** behave with different data types like `undefined`, `null`, arrays, and functions

---

## 📝 Footer Year Note
  - Built in **2024**
  - Uploaded in **2025**
  - Used footer as: `© 2025 Virat Rai. All rights reserved.`