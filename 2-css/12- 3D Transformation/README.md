# 🎯 CSS 3D Transform Effects

This project demonstrates the usage of **CSS 3D transforms** including rotation, translation, and scaling on different axes (X, Y, Z). On hover, each box performs a unique transformation to visually understand how 3D effects work in CSS.

## 🔗 Live Demo

- **Vercel:** [Live Demo Link](https://css-3d-transformation-by-viratrai.vercel.app/)
- **Netlify:** [Live Demo Link](https://css-3d-transformation-by-viratrai.netlify.app/)

## 🚀 Technologies Used

- HTML5
- CSS3 (Transforms, Grid)

## 📚 What I Learned

- **Grid Layout**: Created a 3x3 layout using `display: grid` and `grid-template-columns: repeat(3, 1fr)`.
- **3D Transforms**: Applied different `transform` properties on hover to each box:

### ✨ Transformations Used

| Element         | CSS Transform Used                              |
|-----------------|--------------------------------------------------|
| `#rotateX`      | `rotateX(45deg)`                                 |
| `#rotateY`      | `rotateY(-45deg)`                                |
| `#rotateZ`      | `rotateZ(45deg)`                                 |
| `#translateX`   | `translateX(-100px)`                             |
| `#translateY`   | `translateY(-100px)`                             |
| `#translateZ`   | `perspective(300px) translateZ(-100px)`          |
| `#scaleX`       | `scaleX(1.5)`                                    |
| `#scaleY`       | `skewY(30deg)` *(skew used instead of scaleY)*   |
| `#scaleZ`       | `perspective(300px) scaleZ(5) rotateY(30deg)`    |

### 💡 Comment Explanation

```css
#scaleY:hover {
    transform: skewY(30deg); 
    /* originally scaleY(1.5), changed for experimentation */
}

#scaleZ:hover {
    transform: perspective(300px) scaleZ(5) rotateY(30deg); 
    // scaleZ works with 3D perspective
}
```

- `perspective()` is required for 3D transforms like `scaleZ` and `translateZ` to have visible depth.
- Using `hover` allows real-time interaction and understanding of each effect.

## 📝 Footer Year Note
- Built in **2024**
- Hosted in **2025**
- Used footer as: `© 2024 - 2025 Virat Rai` to reflect creation and update year

```

## 📝 Author

```
Name     : Virat Rai
Email    : viratrai255075@gmail.com
LinkedIn : https://www.linkedin.com/in/viratrai100
GitHub   : https://github.com/viratrai100
```