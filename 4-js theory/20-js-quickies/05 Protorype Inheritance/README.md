# 📘 Prototype Inheritance

## 📄 Description
In JavaScript, every object has a hidden property called `[[Prototype]]`, which allows one object to inherit properties and methods from another. This mechanism is called **Prototype Inheritance**.

## 📌 Key Points / Notes

- JavaScript uses **prototypal inheritance** to share properties across objects.
- An object can **access properties/methods** of another object through its prototype chain.
- This avoids data duplication and promotes memory efficiency.

### 🧪 Example

```js
let papa = {
    home: true,
    wallet: "$1000",
};

let beta = {
    moj_masti: true,
};

beta.__proto__ = papa;

console.log(beta.home);   // true
console.log(beta.wallet); // "$1000"
```

- `beta` does not have `home` or `wallet` properties, but still accesses them via its prototype (`papa`).

⚠️ Note: Using `__proto__` is discouraged in production — prefer `Object.create()` or `Object.setPrototypeOf()`.

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