

// Dynamic Nature Of Object 
// let obj = {
//     age: 12,
//     wt: 54,
//     ht: 140
// };

// console.log(obj);

// obj.color = "White";

// console.log(obj);






// Cloning By Spread Method 

// let src = {
//     age: 12,
//     wt: 54,
//     ht: 140
// };

// let dest = {...src};

// console.log(src);
// console.log(dest);

// conformation by changing src value 

// src.age = 50;
// console.log("After Change :",src);
// console.log("After Change :",dest);

// -----------------------Single Object----------------------------

// let src = {
//     age: 12,
//     wt: 54,
//     ht: 140
// };


// let dest = src;

// src.age = 50;

// console.log("After Change :",src);
// console.log("After Change :",dest);

// ---------------------------------------------------------------------




// Cloning by Assign Method 

// let src = {
//     age: 12,
//     wt: 54,
//     ht: 140
// };

// let dest = Object.assign({},src);

// console.log(src);
// console.log(dest);

// conformation by changing src value 
// src.age = 50;

// console.log("After Change :",src);
// console.log("After Change :",dest);

// ----------------------------------------------------------------------------------------------


//cloning 2 item at once 
// let src = {
//     age: 12,
//     wt: 54,
//     ht: 140
// };
// let src2 = {
//     value: 100,
//     name: "Virat Rai"
// }

// let dest = Object.assign({},src,src2);

// console.log("Src:",src);
// console.log("Dest:",dest);

// -----------------------------------------------------------------------------------------





// Cloning By Iteration Method 

let src = {
    age: 12,
    wt: 54,
    ht: 140
};

let dest = {};

for(let key in src) {
    // console.log(key); // we have to insert these key iin Dest 
    let newKey = key;
    let newValue = src[key];
    // insert newKey and Value in dest and create a clone 
    dest[newKey] = newValue;
}

console.log("Src:",src);
console.log("Dest:",dest);



// conformation by changing src value 
src.age = 50;

console.log("After Change :",src);
console.log("After Change :",dest);