// ARRAY 

// let obj = {
//     name: "Virat",
    // "name": "Virat",
//     "full name": "Virat Rai",
//     age: 25,
//     weight: 54,
//     height: "5ft 6inch",
//     greet: function(){
//         console.log("Hello Ji Kaise Ho Saare")
//     }
// }
// console.log(obj);
// obj.greet();
// console.log(typeof obj);


// shallow copy
//  let obj2 = obj;
//  console.log(obj2);

 // creation of an array 

//  let arr = [1,2,3,4,5];

 // array costructor
//  let brr= new Array ('Virat',100,true);

//  console.log(arr);
//  console.log(brr);

//  console.log(typeof(arr));
//  console.log(typeof(brr));


// acess the array by their indices position 

// let brr= new Array ('Virat',100,true);

// console.log(brr[0]);
// console.log(brr[1]);
// console.log(brr[2]);


// PUSH AND POP 

// let brr= new Array ('Virat',100,true);

// brr.push('Rai'); 
// brr.pop();


// SHIFT AND UNSHIFT 

// let brr= new Array ('Virat',100,true);

// brr.shift();
// brr.unshift('Virat Rai');
// console.log(brr);


// Slice method 

// let brr= new Array ('Virat',100,true);

// brr.push(20);
// brr.push(40);
// brr.push(70);


// console.log(brr.slice(2,4));
// console.log(brr);



        //  Splice Method = add,replace and also remove 

// let brr= new Array ('Virat',100,true,20,40,70);

// add  - (replace)
// brr.splice(1,1,'Sahil');
// console.log(brr);

// add without delete
// brr.splice(1,0,'Sahil');
// console.log(brr);

// delete without add 
// brr.splice(1,1);
// console.log(brr);



                    //   MAP Function 

// Print Number
// let arr = [10,20,30];
// arr.map((number)=>{
//     console.log(number+1);
// })

// print number + index 
// let arr = [10,20,30];
// arr.map((number,index)=>{
//     console.log(number);
//     console.log(index);
// });

// Squaring array elements 
// let arr = [10,20,30];

// let ansArray = arr.map((number) =>{
//     return number*number;
// })
// console.log(ansArray);




                // FILTER Method 


// let arr = [10,20,30,11,21,44,51];

// arr.filter((number) =>{
// let evenArray = arr.filter((number) =>{
//     if(number%2 == 0){
//         return true;
//     }
//     else {
//         return false 
//     }
// })

// console.log(evenArray);


// same code in shortcut method 

// let evenArray = arr.filter((number) =>{
//     return number%2 == 0;
// });

// console.log(evenArray);





// let arr = [1,2,'Virat','Sahil',null];

// let ans = arr.filter((value) => {
//     if(typeof(value) == 'string'){
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(ans);

// --------------------------------------------------------------------
                        //    DEBUG 
// --------------------------------------------------------------------
// let arr = [1,2,'Virat','Sahil',null];

// let arrAns = arr.filter((value) => {
//     if(typeof(value) == 'String'){
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(arrAns);
// console.log(arr);
// ---------------------------------------------------------------------------------------



// REDUCE METHOD
// Accumulator and Current
// let arr = [10,20,30,40];

// let ans = arr.reduce((acc,curr)=>{
//     return acc+curr;
// },0);

// console.log(ans);



// Sort Method 
// let arr = [9,1,7,4,2,8];
// for accending order 
// arr.sort(); 

// for decending order 
// arr.sort(); 
// arr.reverse();

// console.log(arr);

// Array Of Index 

// let arr = [9,1,7,4,2,8];
// console.log(arr.indexOf(4));

// second example
// let arr = [9,1,7,4,2,8];
// arr.sort();


// array length 
// let arr = [10,20,30];






// let length = arr.length;
// console.log("lenght",length);




// traditional loop

// let arr = [10,20,30];

// let length = arr.length;
// console.log("lenght",length);

// for(let index=0; index<length; index++){
//     console.log(arr[index]);
// }




// For Each Loop
// let arr = [10,20,30];

// arr.forEach((value,index)=>{
//     console.log("Number",value, "Index",index);
// });



// for-in loop

// let obj = {
//     name: "Virat",
//     "name": "Virat",
//     "full name": "Virat Rai",
//     age: 25,
//     weight: 54,
//     height: "5ft 6inch",
//     greet: function(){
//         console.log("Hello Ji Kaise Ho Saare")
//     }
// }

// for(let key in obj){
//     console.log(key);
    // console.log(key, " ",obj[key]);
// }


// for of loop

// let arr = [10,20,30,40];

// for(let value of arr) {
//     console.log(value);
// }


// let fullName = 'Virat Rai'
// for(let val of fullName){
//     console.log(val);
// }


// Arrays with Function 

// let arr = [10,20,30,40,50];

// function getSum(arr){
//     let len = arr.length;
//     let sum = 0;
//     for(let index=0; index<len; index++){
//         sum = sum + arr[index];
//     }
//     return sum;
// }

// let totalSum = getSum(arr);
// console.log(totalSum);


// Another Way 
// let arr = [10,20,30,40,50];

// function getSum(arr){
//     let sum = 0;
//     arr.forEach((value)=>{
//         sum= sum + value;
//     })
//     return sum;
// }

// let totalSum = getSum(arr);
// console.log(totalSum);



                                // minor change 
// variable functon 
// let arr = [10,20,30,40,50];

// let getSum = function(arr){
//     let sum = 0;
//     arr.forEach((value)=>{
//         sum= sum + value;
//     })
//     return sum;
// }

// let totalSum = getSum(arr);
// console.log(totalSum);

// arrow function 
let arr = [10,20,30,40,50];

let getSum = (arr) =>{
    let sum = 0;
    arr.forEach((value)=>{
        sum= sum + value;
    })
    return sum;
}

let totalSum = getSum(arr);
console.log(totalSum);
