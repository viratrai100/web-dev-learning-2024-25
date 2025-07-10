// ------------------------Call by Value----------------------------------------
// basically used for primitive data types

let x = 5;
let y = x;  /* value copy hua aur alag alah memory mila dono ko */


console.log("x value :",x); // x value : 5
console.log("y value :",y); // y value : 5


x = 10

console.log("x value after update :",x); // x value after update : 10
console.log("y value after update :",y); // y value after update : 5


// ------------------------Call by Reference----------------------------------------
// basically used for noon-primitive data types

let obj1 = {
    name: "Virat",
    rollno: "69"
}

let obj2 = obj1  /* only */

console.log("obj1 :",obj1); //obj1 : { name: 'Virat', rollno: '69' }
console.log("obj2 :",obj2); //obj2 : { name: 'Virat', rollno: '69' }

obj1.rollno = "96"

console.log("obj1 after update  :",obj1); // obj1 after update  : { name: 'Virat', rollno: '96' }
console.log("obj2 after update  :",obj2); // obj2 after update  : { name: 'Virat', rollno: '96' }

