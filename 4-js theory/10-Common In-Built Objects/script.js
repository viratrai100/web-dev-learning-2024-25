// Common In-Built Objects

// --------------------MATH Object -------------------------------------- 

console.log(Math.PI);

// max 
console.log(Math.max(60,30,24,600,712,89));

// min 
console.log(Math.min(60,30,24,600,712,89)); 

// round nearest integer 
console.log(Math.round(1.6));
console.log(Math.round(1.4));

// Floor = just smallest number 
console.log(Math.floor(1.4));
console.log(Math.floor(1.9));

// Ceil = just bigger number 
console.log(Math.ceil(1.1));
console.log(Math.ceil(1.9));

// absolute value = print positive value 
console.log(Math.abs(5));
console.log(Math.abs(-5));

// Random = provide numbeer between 0-1;
console.log(Math.random());

// Square Root 
console.log(Math.sqrt(5));

// Power 
console.log(Math.pow(2,10));



// --------------------------DATE----------------------------------------

// let curr = new Date()


// let date = new Date('March 25 2004 10:20');

// console.log(curr);
// console.log(date);

// write date in the forms of parameters 

// let newDate = new Date(2006, 6, 20, 2); 
// let newDate = new Date(2006, 5, 20, 2);  // zero based month 

// console.log(newDate);



// ------------------some more functionality -----------------------------------


let curr = new Date()


let date = new Date('March 25 2004 10:20');

console.log(curr);
console.log(date);

// 0 = sunday , 1 = monday ............--------------- 6  = saturday --------------------
console.log(date.getDay());
console.log(date.getFullYear());



console.log(date.setFullYear(2001));

console.log(date);
