# 🧱 Responsive Grid Layout with Sidebar and Content Blocks

This project is a responsive layout built using **CSS Grid**. It consists of common webpage sections like Header, Sidebar, Content Areas, and Footer. The layout adjusts gracefully between small and medium/large screen sizes using media queries.

## 🚀 Live Demo

- **Vercel:** [Live Link](https://css-grid-project-by-viratrai.vercel.app/)
- **Netlify:** [Live Link](https://css-grid-project-by-viratrai.netlify.app/)

## 🛠️ Technologies Used

- HTML5
- CSS3 (Grid Layout, Media Queries)

## 📚 What I Learned

- ✅ **CSS Grid Fundamentals**: How to use `grid-template-columns`, `grid-template-rows`, and `gap` for layout spacing.
  
- ✅ **Responsive Layouts with Media Queries**:
  - On **small screens (mobile)**: Grid has 1 column and 6 rows to stack items vertically.
    ```css
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
    ```
  - On **larger screens (min-width: 768px)**: Grid is split into 3 columns and 4 rows for a more desktop-like layout.
    ```css
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    ```

- ✅ **Spanning Elements**:
  - `grid-column-start` and `grid-column-end` are used to stretch header/footer across all columns.
  - `grid-row-start` and `grid-row-end` are used to make the sidebar span multiple rows.

- ✅ **Comment Clarifications**:
  - `/* grid-template-rows: 1fr 1fr; */`: You tested equal fractional rows before switching to `repeat`.
  - `/* row-gap / column-gap */` were replaced by shorthand `gap`.
  - `/* grid-template-columns: 100px 100px 100px; */`: Commented while testing fixed-width vs responsive columns using `fr` units.
  - `/* also 5 */`: Noted that `grid-row-end: 4` could also be extended to `5` for more height if needed.

## 📝 Footer Year Note
  - Built in **2024**
  - Hosted in **2025**
  - Used footer as: `© 2024 - 2025 Virat Rai. All rights reserved.`

```

## 📝 Author

```
Name     : Virat Rai
Email    : viratrai255075@gmail.com
LinkedIn : https://www.linkedin.com/in/viratrai100
GitHub   : https://github.com/viratrai100
```