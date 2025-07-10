# 📘 Lexical Scope

## 📄 Description
**Lexical Scope** in JavaScript means that a function can access variables defined in its **outer (parent) scope**, but the outer scope cannot access variables defined inside the inner function.

## 📌 Key Points / Notes

- Functions are **lexically scoped**, meaning they remember the environment in which they were created.
- Inner functions can access variables from their parent functions.
- Parent functions **cannot access** variables defined inside their child functions.

### 🧪 Example

```js
function parentFunction() {
    let parentVar = "I am from the Outer Function";

    function childFunction() {
        let childVar = "I am from the Inner Function";
        console.log(parentVar); // Accessible
    }

    childFunction();
    // console.log(childVar); // ❌ Error: childVar is not defined
}

parentFunction();
```

✅ `childFunction()` can access `parentVar`  
❌ `parentFunction()` cannot access `childVar`

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