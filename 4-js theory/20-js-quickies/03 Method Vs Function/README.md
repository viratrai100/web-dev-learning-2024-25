# 📘 Method Vs Function

## 📄 Description
In JavaScript, both **functions** and **methods** are blocks of code that can be executed. The key difference is **how they are defined and used** — functions are standalone, while methods are tied to objects.

## 📌 Key Points / Notes

### 🔹 Function
- A **standalone** block of code.
- Can be called independently.
- Defined using the `function` keyword or arrow syntax.

```js
function greet() {
    console.log('Mai Function Hu');
}
greet(); // Output: Mai Function Hu
```

### 🔸 Method
- A **function inside an object**.
- Called using the object name.
- Has access to the object's properties using `this`.

```js
const person = {
    name: 'Virat',
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
}
person.greet(); // Output: Hello, my name is Virat
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