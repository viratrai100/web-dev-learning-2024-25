// let h1 = document.querySelector("h1")
// let h1Text = h1.textContent
// console.log(h1);
// console.log(h1Text);


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// let h1Text = document.querySelector("h1").textContent

// // console.log(h1Text);

// let splittedText = h1Text.split("");

// // console.log(splittedText);

// let clutter = ""
// // let clutter        /* undefined */

// // splittedText.forEach(function(){
// splittedText.forEach(function(e){
//     // console.log("Sahil")
//     // clutter = clutter + "CocaCola"
//     clutter = clutter + e
// }) 


// console.log(clutter)


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function breakTheText() {
//     let h1 = document.querySelector("h1")
//     let h1Text = h1.textContent 


//     let splittedText = h1Text.split("")


//     // let clutter = ""

//     splittedText.forEach(function(elem,idx) {
//         // console.log(idx)
//         console.log(elem,   idx)
//         // clutter += `<span>${elem}</span>`
//     })


//     // h1.innerHTML = clutter
// }

// breakTheText()


// gsap.from("h1 span",{
//     // y:100,
//     y:50,
//     opacity: 0,
//     duration: 0.8,
//     delay: 0.5,
//     stagger: 0.2
// })



// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  


function breakTheText() {
    let h1 = document.querySelector("h1")
    let h1Text = h1.textContent


    let splittedText = h1Text.split("")
    let halfValue = splittedText.length/2


    let clutter = "";

    splittedText.forEach(function(elem,idx) {
        if(idx<halfValue){
            clutter += `<span class="a">${elem}</span>`;
        }else {
            clutter += `<span class="b" >${elem}</span>`;
        }
    })

    h1.innerHTML = clutter;

}


breakTheText()

gsap.from("h1 .a", {
    y: 80,
    duration: 0.6,
    delay: 0.5,
    stagger: 0.15,
    opacity: 0
})


gsap.from("h1 .b", {
    y: 80,
    duration: 0.6,
    delay: 0.5,
    stagger: -0.15,
    opacity: 0
})