# ✨ GSAP Project 2 — Scroll-Triggered Text Slide with Pinning

This GSAP project demonstrates an immersive scroll-triggered animation using `ScrollTrigger`. As the user scrolls, a huge heading inside the second section smoothly slides out of view while the section is pinned — creating a clean, interactive transition effect.

## 🌐 Live Demo

- 🔗 [View on Vercel](https://gsap-scrolltrigger-by-viratrai.vercel.app/)
- 🔗 [View on Netlify](https://gsap-scrolltrigger-by-viratrai.netlify.app/)

## 💡 Features

- Full-page vertical scroll layout (`#page1`, `#page2`, `#page3`)
- Scroll-based animation using `gsap.to()` with:
  - Horizontal slide of text (`translateX(-150%)`)
  - Smooth scrubbing effect (`scrub: 2`)
  - Pinning the section during animation (`pin: true`)
- Visual scroll markers enabled for debugging and learning (`markers: true`)

## 🛠️ Technologies Used

- **HTML5** – Semantic structure
- **CSS3** – Fullscreen layouts with `vw`, `vh`, and `flexbox`
- **JavaScript (ES6)** – Animation logic
- **GSAP 3.12.7**
  - `gsap.to()` for animations
  - `ScrollTrigger` plugin for scroll interactions

## 📚 What I Learned

- How to use `ScrollTrigger` with `gsap.to()` to animate text based on scroll
- How to apply `scrub` and `pin` properties for smooth and interactive animations
- How to debug animations with `markers`
- How to control start and end points of scroll triggers using offsets like `"top -150%"`

## 📸 Visual Preview

> 🖼️ A giant "EXPERIENCES" heading scrolls horizontally while its section stays pinned until animation completes, creating a cinematic effect.

## 📝 Footer Year Note
- Built in **2025**
- Hosted in **2025**
- Used footer as: `© 2025 Virat Rai. All rights reserved.`

## 📝 Author

```
Name     : Virat Rai
Email    : viratrai255075@gmail.com
LinkedIn : https://www.linkedin.com/in/viratrai100
GitHub   : https://github.com/viratrai100
```