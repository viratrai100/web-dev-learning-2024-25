// Heading element ko select kar rahe hain jiska id "heading" hai
let heading = document.querySelector("#heading");

// Jab user dusre tab me chala jata hai ya tab band karta hai, tab ye event fire hota hai
document.addEventListener("visibilitychange", () => {
  // Agar tab change hota hai, toh message change karke "You Are Disqualified" dikhate hain
  heading.innerHTML = "You Are Disqualified";
});

// Initial screen width aur height ko store kar rahe hain
let initialWidth = window.innerWidth;
let initialHeight = window.innerHeight;

// Jab bhi window resize hoti hai, ye event trigger hota hai
window.addEventListener("resize", () => {
  // Naya width aur height ko check karte hain
  let newWidth = window.innerWidth;
  let newHeight = window.innerHeight;

  // Agar width ya height me 1px ya usse zyada ka change aata hai toh disqualify kar dete hain
  if (newWidth !== initialWidth || newHeight !== initialHeight) {
    heading.innerHTML = "You Are Disqualified";
  }
});