// Global Scope 

// var age = 20;

// console.log(age);

// {
//     console.log(age);
// }

// if(true){
//     console.log(age);
// }

// for(let i=0; i<6; i++){
//     console.log(age);
// }

// function sayHello(){
//     console.log("Hello",age);
// }

// sayHello();




// Function Scope ------------------------

// console.log(fullName); 
// function sayHello(){
//     let fullName = "Earth";
//     console.log("Hello Duniya",fullName);
// }

// console.log(fullName);  // not access outside the block {fullName}
// sayHello();


// block scope --------------------------------------------

// var is not block scope --- acess out of the block
// {
//     var age = 20;
// }
// console.log(age);



// let is  block scope --- can't acess out of the block 
// {
//     let age = 20;
// }
// console.log(age);


// let is  block scope --- can't acess out of the block 
// {
//     const age = 20;
// }
// console.log(age);


// Temporal Dead Zone 


// in var case 
// console.log(marks);
// console.log("Virat");
// console.log("Rai");
// var marks = 100;
// console.log(marks);

// in let case ---- temporal dead zone from line 75 - 77 to access marks value 
// console.log(marks);
// console.log("Virat");
// console.log("Rai");
// let marks = 100;
// console.log(marks);