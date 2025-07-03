
// document.getElementById("fpara");


// document.getElementById("fheading");


// document.getElementsByClassName("cheading");




// -----------------------querySelector------------------------------------


// document.querySelector("#fpara");
// document.querySelector(".textMatter");
// document.querySelectorAll(".textMatter");





// ------------------------------Insert----------------------------------------------------------------

// document

// $0

// let button = $0

// button

// button.innerHTML

// button.innerHTML = '<p>Hello Jee <p>';

// button





// -------------------------- outer html ? ---------------------------------







// ---------------------------update ---------------------------------------


// let element = document.querySelector('#fdiv');
// undefined


// element

// element.textContent

// '\n        \n            This is my First\n
//             \n                Text \n            \n        \n
// This is my second para\n    '



// element.innerText

// 'This is my First Text\n\nThis is my second para'




// --------------------------- Add element ---------------------------------------------------------



// let fHeading = document.createElement('h1');


// fHeading

// fHeading.textContent = " My Name Is Virat Rai"
// fHeading

// let bodyTag = document.querySelector('body');

// bodyTag

// bodyTag.appendChild(fHeading);
// bodyTag



// ------------------------------CUSTOM POSITION---------------------------------------------







// ---------------------------------BeforeBegin---------------------------------



// let mydiv = document.querySelector('#mydiv');


// mydiv

// let newElement = document.createElement('span');

// newElement

// newElement.textContent = "This Is Me Virat Rai";

// newElement

// // mydiv.insertAdjacentHTML('beforebegin',newElement);

// mydiv.insertAdjacentElement('beforebegin',newElement);





// --------------------------AfterBegin-------------------------------------



// let mydiv = document.querySelector('#mydiv');

// let newElement = document.createElement('span');

// newElement.textContent = "Virat Rai";

// mydiv.insertAdjacentElement('afterbegin',newElement);






// --------------------------BeforeEnd----------------------------------------------


// let mydiv = document.querySelector('#mydiv');

// let newElement = document.createElement('span');

// newElement.textContent = "Virat Rai";

// mydiv.insertAdjacentElement('beforeend',newElement);






// --------------------------AfterEnd----------------------------------------------



// let mydiv = document.querySelector('#mydiv');

// let newElement = document.createElement('span');

// newElement.textContent = "Virat Rai";

// mydiv.insertAdjacentElement('afterend',newElement);





// --------------------------------Remove------------------------------------------------

// let parent = document.querySelector("#mydiv");

// let child = document.querySelector("#fpara");

// parent.removeChild(child);


// ---------------------------------------------------------------------------------------------------------------------


// let parent = child.parent
// let child = document.querySelector("#fpara");
// parent.removeChild(child);