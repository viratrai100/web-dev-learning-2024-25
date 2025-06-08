# 📐 Responsive Grid Layout 1

This project demonstrates a **responsive CSS Grid layout** where multiple blocks (A to K) auto-adjust based on screen size. It uses `auto-fit` and `minmax()` to ensure the grid is responsive and fluid across devices.

## 🔗 Live Demo

- **Vercel:** [Live Demo Link](https://css-responsive-grid1-by-virtrai.vercel.app/)
- **Netlify:** [Live Demo Link](https://css-responsive-grid1-by-virtrai.netlify.app/)

## 🚀 Technologies Used

- HTML5
- CSS3 (Grid Layout)

## 📚 What I Learned

- Used `display: grid` and `gap` to create spacing between grid items.
- Implemented `grid-template-columns: repeat(auto-fit, minmax(200px, 500px))` to make the layout responsive:
  - `auto-fit`: Automatically fills the row with as many columns as will fit.
  - `minmax(200px, 500px)`: Ensures each item is **at least 200px** and can grow up to **500px**.
- Responsive design is maintained without media queries, thanks to smart use of `auto-fit`.

### 💡 Comment Explanation

```css
/* grid-template-columns: repeat(auto-fit, minmax(200px, 500px)); */
// Automatically fits columns between 200px and 500px, wrapping items as screen size changes
```

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