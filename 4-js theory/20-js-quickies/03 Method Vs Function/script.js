// --------------------------FUCTION-----------------------------------------------------------
// Function = bLOCK Of Code 

function greet(){
    console.log('Mai Function Hu');
}
greet() 
// output ->  Mai Function Hu


// ------------------------METHOD--------------------------------------------------
// Method = also a funtion , but a part of object 

const person = {
    name: 'Virat',
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
}
person.greet()

// output -> Hello, my name is Virat