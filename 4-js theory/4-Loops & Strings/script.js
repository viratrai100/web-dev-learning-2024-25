

// for loop 


for(let i=1; i<=10; i++){
    console.log("Virat Rai",i);
}


// countin 1 - 5

for(let i=1; i<=10; i++){
    console.log("i =",i);
}

// reverse counting

for(let i=10; i>=1; i--){
    console.log("i =",i);
}

// using Break Statement

for(let i=1; i<=10; i++){
    if(i==6){
        break;
    }
    else{
        console.log(i);
    }

}


for(let i=1; i<=10; i++){
    if(i==6){
        continue;
    }
    else{
        console.log(i);
    }

}


// Infinite Loop


// let i = 1;
// while(i<5) {
//     console.log("Inside The Loop");
//     if(i==3){
//         continue;
//     }
//     else{
//         console.log("Hi");
//         i++
//     }
// }


// save from Infinite Loop

// let i = 1;
// while(i<5) {
//     console.log("Inside The Loop");
//     if(i==3){
//         i++;
//         continue;
//     }
//     else{
//         console.log("Hi");
//         i++
//     }
// }


// while loop 

// let i=1;
// while(i<=10){
//     console.log("While Loop =",i);
//     i++
// }   



// do while loop

// let i =1;
// do{
//     console.log("Do While Loop =",i);

//     i++;

// }while(i<=5);


// run atleast 1 time  
// let i =10;
// do{
//     console.log("Do While Loop =",i);

//     i++;

// }while(i<=5);


                    // STRING //
                    
                    
// let firstName = "Virat";
// let lastName = "Rai";

// console.log(firstName);
// console.log(lastName);

// let name = `VIRAT 
// RAI
// in
// multiple
// lines `;

// console.log(name);

// another way to create a string 

// let firstName = new  String("Virat Rai");
// console.log(firstName);


// CONCATENING STRING (+)

// let op1 = 'English';
// let op2 = 'Hindi';

// let ans = op1 + op2;

// console.log(ans);

// by backtis method 

// let op1 = 'English';
// let op2 = 'Hindi';

// let finalAns = `op1 + op2`  wrong way  
// let finalAns = `${op1} + ${op2}` 

// console.log(finalAns);  

// let op1 = 'english';
// let op2 = 'HINDI';

// console.log(op1.length);
// console.log(op1.toUpperCase());
// console.log(op2.toLowerCase());


// let str = "Virat"

// console.log(str.substring(2));
// console.log(str.substring(2,4));

// let sentence = "Hello Jee Kaise Ho Saare";
// console.log(sentence);

// let sentence = "Hello Jee Kaise Ho Saare";

// let words = sentence.split('   ');
// console.log(words);


// use of single \ ( / )
// let sentence = "Hello Jee \"Kaise\" Ho Saare";

// let words = sentence.split('   ');
// console.log(words);


let sentence = "Hello \\Jee \\Kaise \\Ho \\Saare";

let words = sentence.split('\\');
console.log(words);

console.log(words.join(','));
console.log(words.join('-'));
console.log(words.join('+'));
console.log(words.join('='));