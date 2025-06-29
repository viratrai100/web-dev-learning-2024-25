// Classes && Default Properties 


// class Human {
//     //properties
//     age = 20;
//     #wt = 54;  // private 
//     ht = 150;


//     // behaviour

//     walking () {
//         console.log("I am Walking",this.#wt); // to access private == we use this.
//     }

//     running() {
//         console.log("I am Runnig");
//     }
// }

// let obj = new Human (); 
// console.log(obj.age);
// obj.walking();
// // console.log(obj.#wt);  /Uncaught SyntaxError: Private field '#wt' must be declared in an enclosing class/ ERROR = 




// ------------------------------- Get And Set ----------------------------------------------------------------------------
// class Human {
//     //properties
//     age = 20;
//     #wt = 54;  // private 
//     ht = 150;


//     // behaviour

//     walking () {
//         console.log("I am Walking",this.#wt); // to access private == we use this.
//     }

//     running() {
//         console.log("I am Runnig");
//     }

//     get fetchWeight(){
//         return this.#wt;
//     }

//     set modifyWeight(val){
//         this.#wt = val;
//     }
// }




// obj.walking();



// --------------------- Constructor------------------------------------


// class Human {
//     //properties
//     age;
//     #wt = 54;  // private 
//     ht = 150;



//     // constructor---------------------------------------------------------
//     constructor(newAge,newHeight,newWeight){
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = newWeight;
//     }

//     // behaviour

//     walking () {
//         console.log("I am Walking",this.#wt); // to access private == we use this.
//     }

//     running() {
//         console.log("I am Runnig");
//     }

//     get fetchWeight(){
//         return this.#wt;
//     }

//     set modifyWeight(val){
//         this.#wt = val;
//     }
// }



// let obj = new Human (50,190,101);
// console.log(obj.age);
// console.log(obj.ht);
// // console.log(obj.#wt);  // Error ---   wt is a private field property
// console.log(obj.fetchWeight);  // we use get - set property to access weight


// obj.walking();



// -----------------------Default Value---------------------------------------


// normal case 
// function sayName(myName) {
//     console.log("My Name Is:",myName);
// }

// sayName("Virat");


// Defaut Name
// function sayName(myName = "Sahil Rai") {
//     console.log("My Name Is:",myName);
// }

// sayName();
// sayName("Virat Rai");


// multipe parameters
// function sayName(fName = "Sahil",lName = "Rai") {
//     console.log("My Name Is:",fName," ",lName);
// }

// sayName();
// sayName("Virat","Rai");



// ---------------------------------------------------------------------


// function sayName(fName = "Sahil",lName = fName.toUpperCase()) {
//     console.log("My Name Is:",fName," ",lName);
// }

// sayName();
// sayName("Virat","Rai");
// sayName("Virat");
// sayName();


// normal case 
// function solve(value) {
//     console.log("HELLO JI",value);
// }

// solve("Virat");
// solve(20);

// default value 
// function solve(value = 14) {
//     console.log("HELLO JI",value);
// }

// solve();


// object 
// function solve(value = {age:15,wt:54,ht:150}) {
//     console.log("HELLO JI",value);
// }

// solve();
// solve(100);

// also insert array 

// function solve(value = ["Virat","Sahil","Rai"]) {
//     console.log("HELLO JI",value);
// }

// solve();
// solve(100);

// for null case 
// function solve(value = "Virat") {
//     console.log("HELLO JI",value);
// }

// solve();         //   print default value
// solve(null);  // print null

// for undefined case 
// function solve(value = "Virat") {
//     console.log("HELLO JI",value);
// }

// solve();
// solve(undefined);  // print default value

// we can send Function in default parameters

// function getAge(){
//     return 190;
// }

// function utility(name, age){
//     console.log(name," ",age);
// }

// utility("Virat",20);
// utility("Virat");
// utility();

// ------------------------------------------------------------------------------------


function getAge(){
    return 190;
}


function utility(name = "Sahil", age = getAge()){
    console.log(name," ",age);
}

utility("Virat",20);
utility("Virat");
utility();