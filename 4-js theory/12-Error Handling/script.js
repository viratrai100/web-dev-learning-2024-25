// ERROR HANDLING 



// -----------------------COMPILE TIME ERROR -------------------------------------------------------------


// SyntaxError
// console.log(50;



// --------------------------RUN TIME ERROR -----------------------------------------------------------------------


// ReferenceError
// console.log(x);



// --------------------------------TRY - Catch Block ------------------------------------------------------------

// format 
// try{

// }
// catch{

// }


// example

// try{
//     console.log("try block starts here ");
//     console.log(x);
//     console.log("try block ends here ");
//     // a

//     // b

//     // c

// }
// catch (err){
//     // define krte hain, error k sath aap kya karna chhhate hian 
//     // retry logic
//     // logging
//     // custom error
//     console.log("I AM INSIDE CATCH BLOCK");
//     console.log("Your Error Is Here",err);
// }




// ------------------------ Finaly Block ------------------------------------------------------------------

// try{
//     console.log("try block starts here ");
//     console.log(x);
//     console.log("try block ends here ");
//     // a

//     // b

//     // c

// }
// catch (err){
//     // define krte hain, error k sath aap kya karna chhhate hian 
//     // retry logic
//     // logging
//     // custom error
//     console.log("I AM INSIDE CATCH BLOCK");
//     console.log("Your Error Is Here",err);
// }
// finally{
//     console.log("I will run everytime");
// }



// --------------------let's create custom error ----------------------------------------------------------------


try{
    // Reference error
    console.log(x);
}
catch{
    throw new Error ("Bhai Pahle Declare Kar Do Phir Print Karna");
}


// Another Example

// let errorCode = 100;
// if(errorCode == 100);{
//     throw new Error("Invalid Json");
// }