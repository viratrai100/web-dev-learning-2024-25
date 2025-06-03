# 🌀 CSS Transform Practice – Rotate, Scale, Skew, Translate

This project is a visual demo to explore and practice various CSS `transform` and `transition` properties. The main element is a centered orange box that transforms on hover.

---

## 🔗 Live Demo

- **Vercel**: [Click Here](https://css-2d-transform-by-viratrai.vercel.app/)  
- **Netlify**: [Click Here](https://css-2d-transform-by-viratrai.netlify.app/)

---

## 💡 Technologies Used

- HTML5  
- CSS3 (Transform & Transition)

---

## 🎯 What I Learned

### ✅ Core Concepts Practiced:

- `transform: rotate()` – Rotates an element by the specified angle.
- `transform: scale()` – Scales the element larger or smaller.
- `transform: skew()` – Tilts the element horizontally or vertically.
- `transform: translate()` – Moves the element from its original position.
- `transition` – Smooth animation between state changes.

### 📝 Details of Commented Properties:

```css
/* transform: rotate(360deg);  */
```
- Rotates the box in a full circle on hover.

```css
/* transform: scale(2); */
/* transform: scale(0.5); */
```
- `scale(2)` doubles the size of the box.  
- `scale(0.5)` reduces it to half.

```css
/* transform: rotate(-45deg); */
```
- Rotates the box 45 degrees counter-clockwise.

```css
/* transform: skew(45deg); */
/* transform: skew(-45deg); */
```
- Skews the box along the X-axis by 45 degrees and -45 degrees.

```css
/* transform: translate(500px); */
/* transform: translate(-500px); */
/* transform: translate(0px, 500px); */
/* transform: translate(0px, -500px); */
/* transform: translate(500px, 500px); */
```
- Moves the box along X and/or Y axis.
- Positive values = right/down; negative values = left/up.

### 🧠 Bonus Notes

- `transition: all 10s linear 1s;`  
  - Applies the transition to all properties over 10 seconds.
  - Starts after a 1-second delay.
  - The `linear` timing makes the animation speed constant throughout.

- `.container` used `flex` layout to center the box both vertically and horizontally using:
  ```css
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  ```

---

## 📝 Footer Year Note

- Built in **2024**
- Hosted in **2025**
- Used footer as: `© 2024 - 2025 Virat Rai. All rights reserved.`

---

```

## 📝 Author

```
Name     : Virat Rai
Email    : viratrai255075@gmail.com
LinkedIn : https://www.linkedin.com/in/viratrai100
GitHub   : https://github.com/viratrai100
```