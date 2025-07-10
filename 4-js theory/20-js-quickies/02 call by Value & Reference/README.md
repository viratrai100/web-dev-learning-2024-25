# 📘 Call by Value & Reference

## 📄 Description
In JavaScript, the way data is passed and copied depends on its type. Primitive types are passed **by value**, while non-primitive types like objects and arrays are passed **by reference**.

## 📌 Key Points / Notes

### ✅ Call by Value (Primitive Types)
- Used for: `Number`, `String`, `Boolean`, etc.
- A **copy** of the value is made.
- Changing one variable **does not affect** the other.

```js
let x = 5;
let y = x; // Copy of value
x = 10;
console.log(x); // 10
console.log(y); // 5
```

### 🔁 Call by Reference (Non-Primitive Types)
- Used for: `Object`, `Array`, etc.
- **Reference** (memory address) is copied.
- Changes in one affect the other.

```js
let obj1 = { name: "Virat", rollno: "69" };
let obj2 = obj1; // Both point to same memory
obj1.rollno = "96";
console.log(obj2.rollno); // "96"
```

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