// ----------------------------- BASIC----------------------------------------
// gsap.to("#box1", {
//     x:1000,
//     duration:2,
//     delay:1
// })

// gsap.to("#box2", {
//     x:500,
//     y:500,
//     duration:2,
//     delay: 1
// })


// --------------------------- From Vs To------------------------------------------------------------

// gsap.to("#box1", {
//     x: 1200,
//     duration: 2,
//     delay: 1
// })

// gsap.from("#box2", {
//     x: 1200,
//     duration: 2,
//     delay: 1
// })

// ---------------------------- CSS Property----------------------------------------------------------------------

// gsap.to("#box1" , {
//     x: 1200,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "Aqua",
//     borderRadius: "50%",
//     scale: 0.5
// })

// gsap.from("#box2" , {
//     x: 1200,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "Aquamarine",
//     borderRadius: "50%",
//     scale: 0.5
// })

// gsap.to("h1", {
//     color: "red",
//     duration: 1,
//     delay: 1
// })

// gsap.from("h1", {
//     // color: "red",
//     opacity: 0,
//     y: 30,
//     duration: 1,
//     delay: 1,
//     stagger: 1,
//     // stagger: 0.5,
//     // stagger: -1  /* opposite 3rd first display */
// })


// --------------------------------- BOX---------------------------------------------------------------------

// gsap.to("#box", {
//     x: 1200,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     // repeat: 1,
//     repeat: -1, /* to make infinite */
//     yoyo: true
// })


// ---------------------------------3-BOX---------------------------------------------------------------------


// gsap.to("#box1", {
//     x:1500,
//     rotate: 360,
//     duration: 1.5,
//     delay:1
//     // repeat: -1
// })

// gsap.to("#box2", {
//     x:1500,
//     backgroundColor: "yellow",
//     duration: 1.5,
//     delay:2.5
//     // repeat: -1
// })

// gsap.to("#box3", {
//     x:1500,
//     scale: 0.5,
//     borderRadius: "50%",
//     duration: 1.5,
//     delay:4
//     // repeat: -1
// })


// ------------------------------------Applying Timeline------------------------------------------------------------------

// let tl = gsap.timeline()

// tl.to("#box1", {
//     x:1500,
//     rotate: 360,
//     duration: 1.5,
//     delay:1
// })

// tl.to("#box2", {
//     x:1500,
//     backgroundColor: "yellow",
//     duration: 1.5,
// })

// tl.to("#box3", {
//     x:1500,
//     scale: 0.5,
//     borderRadius: "50%",
//     duration: 1.5,
// })

// ------------------------------------Applying Timeline------------------------------------------------------------------

let tl = gsap.timeline()

tl.from("h2", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.5
})

tl.from("h4", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.3
})

tl.from("h1", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    scale: 0.2
})