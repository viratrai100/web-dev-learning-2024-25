// -------------------------------------------Selection--------------------------------------------------------------------------------------------------

// let a = document.querySelector("h1")

// ---------------------------HTML--------------------------------------------------------------------------------------
// let a = document.querySelector("h1")
// console.log(a)
// a.innerHTML = "Changed HTML"
// console.log(a)

// let a = document.querySelector("h1").innerHTML = "H1 ki value change ho chuki hai sir"
// console.log(a)


// -----------------------------------------css---------------------------------------------------------------------------------

// let a = document.querySelector("h1");
// a.style.color = "red";
// a.style
// console.log(a)


// -----------------------------------Event Listner----------------------------------------------------------------------------------------

// let a = document.querySelector("h1");


// a.addEventListener("click", function() {
//     console.log("Click kiye ho bhai")
// })

// a.addEventListener("mouseover", function () {
//   console.log("Hover kiye ho bhai");
// });

// a.addEventListener("click", function() {
//     a.innerHTML = "HTML KI VALUE CHANGE HO CHUKI HAI"
//     a.style.color = "red"
//     a.style.backgroundColor = "black"
//     console.log("Event Listner kam kar raha hai")
// })



// ------------------------------------------Bulb   Logic By Virat-----------------------------------------------------------------------------

let bulb5 = document.querySelector("#bulb")

let on = document.querySelector("#btn1")
let off = document.querySelector("#btn2")

on.addEventListener("click", function(){
    bulb.style.backgroundColor = "Yellow"
})

off.addEventListener("click", function () {
  bulb.style.backgroundColor = "white";
});

// -------------------------------------------Again But With Single Button----------------------------------------------------------------------------------------

let bulb = document.querySelector("#bulb")
let btn = document.querySelector("#btn")


flag = 0;

btn.addEventListener("click", function() {
    if(flag ==0) {
        bulb.style.backgroundColor = "yellow"
        console.log("Bulb ON ho gaya Hai")
        flag = 1
    } else {
        bulb.style.backgroundColor = "transparent"
        console.log("Bulb OFF ho gaya Hai");
        flag = 0
    }
})


// --------------------------------------- For Multiple Secection ---------------------------------------------------------------------------------


// let h = document.querySelector("h1")
// console.log(h);
// let h = document.querySelectorAll("h1")  /* Nodelist -> Show all 3 h1 in nodelist -> NODELIST = Kind of array  */
// console.log(h);

// h.forEach(function(e) {
//     console.log(e)
// })

// ---------------------------------------ID AND CLASS SELECTON ---------------------------------------------------------------------------------------------------

// let divid = document.getElementById("id-div");
// divid.innerHTML = "ID WALA DIV KO JS ME ACCESS KAR LIYA HAI";

// console.log(divid);


// let divclass = document.getElementsByClassName("class-div");
// divclass[0].innerHTML = "CLASS WALA DIV KO JS ME ACCESS KAR LIYA HAI";

// console.log(divclass);


// ------------------------------innerHTML VS Textcontexxt ----------------------------------------------------------------------------------------------------------------------------------------

let fh = document.querySelector("#f-h")
let  sh = document.querySelector("#s-h")


// fh.innerHTML ="Virat"   // normal case 
// sh.textContent = "Rai" // normal case 


fh.innerHTML = "<h1>InnerHTML</h1>";  // remove <h1></h1> 

sh.textContent = "<h1>TextContent</h1>";  // print as it is in text form 