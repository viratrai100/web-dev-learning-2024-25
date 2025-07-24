// let initialPath = `M 10 100 Q 250 100 490 100`
let initialPath = `M 10 100 Q 500 100 990 100`

let finalPath = `M 10 100 Q 500 100 990 100`

let string = document.querySelector("#string")


// string.addEventListener("click", function() {
//     console.log("Clicked")
// })

// string.addEventListener("mouseenter", function() {
//     console.log("Entered")
// })

// string.addEventListener("mouseleave", function() {
//     console.log("Leaved")
// })

// string.addEventListener("mousemove", function() {
//     console.log("Moved")
// })

// string.addEventListener("mousemove", function(dets) {
//     console.log(dets)
// })

string.addEventListener("mousemove", function(dets) {
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    // console.log(path)
    gsap.to("svg path", {
        attr: {d:path},
        duration: 0.3,
        ease: "power3.out"
    })
})


string.addEventListener("mouseleave", function() {
    gsap.to("svg path", {
        attr: {d: finalPath},
        duration: 1.5,
        ease: "bounce.out",
        ease: "elastic.out(1,0.2)"
    })
})