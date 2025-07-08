//Promise

// normal
// let firstPromise = new Promise((resole, reject) => {
//     console.log("Virat");
// });


// resolve
// let firstPromise = new Promise((resole, reject) => {
//     console.log("Virat");
//     resole(1001); 
// });

// Reject 
// let firstPromise = new Promise((resole, reject) => {
//     console.log("Virat");
//     reject(new Error("Internal Server Error")); 
// });


// Async Code Example 
// function sayMyName() {
//     console.log("My Name Is Virat Rai");
// }

// setTimeout(sayMyName, 10000);



// let firstPromise = new Promise((resolve, reject) => {
// setTimeout(function sayMyName () {
//         console.log("My Name Is Virat Rai");
//     }, 10000);
//     // return 1;
//     resolve(1);
// });


// ------------------Then And Catch-----------------------------------------------------------------------------------


// let Promise1 = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve("Promise Fulfilled");
//     }
//     else {
//         reject("Promise Rejected ");
//     }
// });

// Promise1.then((message) =>{
//     console.log("Then Ka Message is " + message);
// }).catch((error) => {
//     console.log("Error: ", error);
// })


// -------------------------Multipe Then-----------------------------------------------------


// let Promise1 = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve("Promise Fulfilled");
//     }
//     else {
//         reject("Promise Rejected ");
//     }
// });


// Promise1.then((message) =>{
//     console.log("first msg:" + message);
//     return "Promse fullfilled second message ;"
// }).then((message)=>{
//     console.log("second msg: " + message);
//     return "Promise fullfilled third message";
// }).then((message)=>{
//     console.log("Third msg: " + message);
// })

              

//                                //changing value 
  
// let Promise1 = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve(10);
//     }
//     else {
//         reject(-1);
//     }
// });


// Promise1.then((message) =>{
//     console.log("first msg:" + message);
//     return 20;
// }).then((message)=>{
//     console.log("second msg: " + message);
//     return 30;
// }).then((message)=>{
//     console.log("Third msg: " + message);
// })


// ----------------------------Catching Error---------------------------------------------------------------------------------------------


  

// let Promise1 = new Promise((resolve, reject) => {
//     let success = false;
//     if(success){
//         resolve(10);
//     }
//     else {
//         reject("Internal Server Error");
//     }
// });


// Promise1.then((message) =>{
//     console.log("first msg:" + message);
//     return 20;
// }).then((message)=>{
//     console.log("second msg: " + message);
//     return 30;
// }).then((message)=>{
//     console.log("Third msg: " + message);
// }).catch((error) => {
//     console.error(error);
//     // console.log(error);
// })


// -------------------------Finally------------------------------------------------------------------------------------------------------------------------------

// let Promise1 = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve(10);
//     }
//     else {
//         reject("Internal Server Error");
//     }
// });


// Promise1.then((message) =>{
//     console.log("first msg:" + message);
//     return 20;
// }).then((message)=>{
//     console.log("second msg: " + message);
//     return 30;
// }).then((message)=>{
//     console.log("Third msg: " + message);
// }).catch((error) => {
//     console.error(error);
//     //finally ------------------ true or false 
// }).finally((message) =>{
//     console.log("Main To Final hu, chalunga pakka");
// })





// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


let Promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "First");
})
let Promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Second");
})
let Promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, "Third");
})

Promise.all([Promise1,Promise2,Promise3])
.then((values) => {
    console.log(values);
})

.catch((error) =>{
    console.error("error: " + error);
})