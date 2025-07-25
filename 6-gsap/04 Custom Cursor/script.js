let main = document.querySelector("#main")

let cursor = document.querySelector("#cursor")

let imageDiv = document.querySelector("#image")


// main.addEventListener("click", function() {
//     console.log("Event Performed")
// })

// main.addEventListener("mousemove", function() {
//   console.log("Event Performed")
// });

// main.addEventListener("mousemove", function (virat) {
//   console.log(virat);
// });

// window.addEventListener("keypress", function(virat) {
//   console.log("Event Performed",virat)
// });

// main.addEventListener("mousemove", function (virat) {
//   console.log(virat.x,virat.y);
// });

main.addEventListener("mousemove", function (virat) {
    gsap.to(cursor, {
      x: virat.x,
      y: virat.y,
      duration: 1,
    //   duration: 2.5,
    //   ease: "back.out",
    //   ease: "power4.out"
    });
});


imageDiv.addEventListener("mouseenter", function() {
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale:4,
        backgroundColor: "#ffffff8a"
    })
})

imageDiv.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff"
  });
});