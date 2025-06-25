// CHECK 
// console.log("working");


// FUNCTION 


// function definition 
// function sayMyName() {
    // console.log("Virat Rai");
// }

// function Use --- Function Call 
// sayMyName();


// using function with loop

// function printCounting() {
//     for(let i=1; i<=100; i++) {
//         console.log("i = ",i);
//     }
// }

// printCounting();

// Function By Passing Parameter


// num = parameter
// function printNumber(num){
//     console.log("Printing Number :-",num)
// }

//  80 = argument
// printNumber(80);  



// function getAverage(num1,num2) {
//     let avg = (num1 + num2)/2;
//     console.log("Average :-",avg);
// }

// getAverage(3,70);



                    //   Return function

// function getSum(a,b,c){
//     let sum = a+b+c;
//     return sum;
// }

// let ans = getSum(1,2,3);
// console.log("Printing sum:",ans);


// function getMyName(firstName,lastName){
//     let fullName = firstName +" "+lastName;
//     return fullName;
    //unreachable statement 
//     let a = 10;
//     let b = 15;
//     let sum = a + b;
//     console.log(sum);
// }

// let fullName = getMyName("Virat","Rai");
// console.log("FullName :-",fullName);






// function getMultiplication(a,b) {
//     let ans = a*b;
//     return ans;
// }

// let ans = getMultiplication(3,4);
// console.log(ans);


// function getMultiplication(a,b){
//     return a*b;
// }

// let ans = getMultiplication(4,4);
// console.log(getMultiplication(5,5));

// let getMultipication = function (a,b){
//     return a*b;
// }

// let ans = getMultipication(5,8);
// console.log(ans);
// console.log(getMultipication(5,6));




// SQUARING OF NUMBER --By Two Methods 



// Method :-1
// function squareNumber(num) {
//     let ans = num**2;
//     return ans;
// }


// let ans = squareNumber(10);
// console.log(ans);


// Method :-2
// let squareNumber = function(num){
//     let ans = num**2;
//     return ans;
// }


// let ans = squareNumber(5);
// console.log(ans);

// let sum =  function (a,b)  {
//     sum = a + b;
//     return sum;
// }

// let ans = sum(4,4);
// console.log(ans);



// Arrow function (replace (function) with (=>)) 


// let sum = (a,b) => {
//     sum = a + b;
//     return sum;
// }

// let ans = sum(5,5);
// console.log(ans);



// let getExp = function (x,y)  {
//     let ans = x**y;
//     return ans;
// }

// let answer = getExp(2,8);
// console.log(answer);



let getExp = (x,y) => {
    let ans = x**y;
    return ans;
}

let answer = getExp(2,10);
console.log(answer);
