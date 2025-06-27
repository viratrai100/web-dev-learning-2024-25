// Variable/Function Hoisting && Function Call In Js


// Function hoisting 


// normal case 
// function sayMyName(finalName){
//     console.log(finalName);
// }

// sayMyName("Virat");


// diffrent case  --- still our code run ------------  
// sayMyName("Virat");

// function sayMyName(finalName){
//     console.log(finalName);
// }
// ------------------------------------------------------------------

// Variable Hoisting

// normal case 
// var age = 25;
// console.log(age);

// diffrent case 
// console.log(age);
// var age = 25;

// using let and const keyword 

// normal case 
// let age = 25;
// console.log(age);

// another case 
// console.log(age);
// let age = 25;

// normal case 
// const age = 25;
// console.log(age);

// another case 
// console.log(age);
// const age = 25;

// Create Function By Diffrent Ways 

// Normal function
// sayHello();
// function sayHello(){
//     console.log("Hello Ji Kaise Ho Sare");
// }


// function expression

// sayHello();
// let sayHello = function (){
//     console.log("Hello Ji Kaise Ho Sare");
// }


// assign variables in function   ----- 01
// let greet = function(){
//     console.log("Greeting fot the day");
// }

// greet();

// function pass  ------------------   02

// function greetMe(gteet, fullName){
//     console.log("Hello",fullName);
//     greet();
// }

// function greet(){
//     console.log("Greeting fot the day");
// }

// greetMe(greet, 'Virat');


// return function ---------------------  03
// function solve(number) {
//     return function(number) {
//         return number*number;
//     }
// }

// now ans make a function 
// let ans = solve(5);  

// let finalAns = ans(10);
// console.log(finalAns);


// use function in Data Structure ------------ 04

// const arr = [
//     function(a,b) {
//         return a+b;
//     },
//     function(a,b) {
//         return a-b;
//     },
//     function(a,b) {
//         return a*b;
//     }
// ];

// let first = arr[0];
// let ans = first(5,10);
// console.log(ans);

// let first = arr[1];
// let ans = first(5,10);
// console.log(ans);

// let first = arr[2];
// let ans = first(5,10);
// console.log(ans);


// use function as property ------------ 05

// let obj = {
//     name: 'Virat',
//     age: 20,
//     wt: 55,
//     ht: 150,
//     greet: ()=>{
//         console.log("Hello Ji Kaise Ho Saare");
//     }
// }

// console.log(obj.age);
// obj.greet();



// Additional Case 
// normal case 
// let greet = function(){
//     console.log("Namaste Duniya");
// }

// greet();

// function expression declertion  -------- ERROR
// greet();
// let greet = function(){
//     console.log("Namaste Duniya");
// }

// function expression declertion  -------- using Var Instead of Let 
// ERROR 
// greet();
// var greet = function(){
//     console.log("Namaste Duniya");
// }

// Another Way ---------------- undefined (save from error)
 
// console.log(greet)
// var greet = function(){
//     console.log("Namaste Duniya");
// }