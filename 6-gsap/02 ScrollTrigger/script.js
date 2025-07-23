// gsap.from("#page1 #box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360
// })

// gsap.from("#page2 #box", {
//     scale: 0,
//     // delay: 1,
//     duration: 2,
//     rotate: 360,
//     // scrollTrigger: "#page2 #box"  /* shortcut method */ 
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,   /* helps us to determine easily start and end point */ 
//         start: "top 60%"
//     }
// })


// gsap.from("#page3 h1", {
//     opacity: 0,
//     duration: 2,
//     x: 500,
//     scrollTrigger: {
//         trigger: "#page3 h1",
//         scroller: "body",
//         markers: true,   /* helps us to determine easily start and end point */ 
//         start: "top 80%"
//     }
// })

// gsap.from("#page3 h2", {
//     opacity: 0,
//     duration: 2,
//     x: -500,
//     scrollTrigger: {
//         trigger: "#page3 h2",
//         scroller: "body",
//         markers: true,   /* helps us to determine easily start and end point */ 
//         start: "top 80%"
//     }
// })


// ---------------------------------Again----------------------------------------------------------------------------------------


// gsap.from("#page2 #box", {
//     scale: 0,
//     opacity: 0,
//     rotate: 720,
//     duration: 1,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,   /* helps us to determine easily start and end point */ 
//         start: "top 60%",
//         end: "top 30%",
//         // scrub: true,
//         scrub: 2,  /* to make smooth */ 
//         pin: true  /* to show animation small div everytime */ 
//     }
// })


// --------------------------------------------------- Again-------------------------------------------------------------

gsap.to("#page2 h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        // trigger: "#page2 h1",
        trigger: "#page2 ", /* to use pin property we have to selec the */
        scroller: "body",
        markers: true,
        // start: "top 50%",
        start: "top 0%",  /* SCROLL and reach at top-most page, then aniation start */ 
        // end: "top -100%",
        end: "top -150%",  /* to make animtion slow */ 
        scrub: 2,  /* for smooth or better animation */ 
        pin: true
    }
})