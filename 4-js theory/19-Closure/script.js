// Closure In Js



// let name = "Hritik";
// function outerFunction() {
//     {
//         let name = "Tinku"
//     }
//     // let name = "Virat"; // let -> block scope
//     function innerFunction() {
//         // let name = "Sahil";
//       console.log(name);   //---------nearest name value will be print
//     }
//     innerFunction();
//   }
//   outerFunction();






// clean code 
function outerFunction() {
    let name = "Virat";

    function innerFunction() {
      console.log(name);   
    }
    return innerFunction;
}
let inner =  outerFunction();

inner();