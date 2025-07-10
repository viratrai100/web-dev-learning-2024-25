function parentFunction() {
    let parentVar = "I am from the Outer Function";

    function childFunction() {
        let childVar = "I am from the Inner Function";
        console.log(parentVar);
    }
    childFunction();
    // console.log(childVar);  // Error
}

parentFunction();

// output -> I am from the Outer Function




// function apne parent function ke variable ko access kar sakta hai , par parent function apne child function ke variable ko access nahi kar sakta hai.