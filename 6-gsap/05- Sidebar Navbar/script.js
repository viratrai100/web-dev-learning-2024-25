let menu = document.querySelector("#nav i");
let cross = document.querySelector("#full i");


let tl = gsap.timeline();
// let tl = gsap.timeline({paused:true});

tl.to("#full", {
    right: 0,
    duration: 0.6
})


tl.from("#full h4", {
    x: 150,
    duration: 0.5,
    stagger: 0.3,
    opacity: 0
})

tl.from("#full i", {
    opacity: 0
})

tl.paused()

menu.addEventListener("click", function() {
    tl.play()
})

cross.addEventListener("click", function () {
  tl.reverse()
});