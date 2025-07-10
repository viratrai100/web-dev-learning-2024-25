# 📘 Closure

## 📄 Description
**Closure** in JavaScript is a feature where an **inner function** has access to variables from its **outer (parent) function's scope** even after the outer function has finished executing. This allows the inner function to "remember" the environment in which it was created.

## 📌 Key Points / Notes

- A closure gives you access to an outer function’s scope from an inner function.
- The inner function **retains access** to variables defined in the outer function, even after the outer function has returned.
- Closures enable powerful patterns like function factories, data privacy, and callbacks.

### 🧪 Example

```js
function x() {
    let a = 3;

    function y() {
        console.log(a); // Accesses variable 'a' from outer function 'x'
    }

    return y;
}

const z = x(); // 'x' returns function 'y' which remembers 'a'
z(); // Logs: 3

- y() retains access to a even after x() finishes.

- z is now a function with closure over the variable a.


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