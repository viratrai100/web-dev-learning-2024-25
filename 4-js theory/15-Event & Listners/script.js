// Events And Listners


// 
// monitorEvents(document);
// thenafter hover and click 

// unmonitorEvents(document);


// let fpara = document.getElementById('fpara');
// fpara.textContent = 'Hello Virat';





// ------------- functon to add or remove EventListner-------------------------------


// function changeText (){
//     let fpara = document.getElementById('fpara');
// fpara.textContent = "Hello Virat" ;
// }



// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click', changeText);



// console-window
// monitorEvents(document);  // then hover on website 
// removeEventListener
// fpara.removeEventListener('click',changeText);


// ---------------------------Event Object-------------------------------------


// function changeText (event){
//     console.log(event);
//     let fpara = document.getElementById('fpara');
// fpara.textContent = "Hello Virat" ;
// }



// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click', changeText);




// ------------------------Default Tag---------------------------------------------


// ---------------Changing Anchor Tag Default Value---------------------------------------------


// let anchorElement = document.getElementById('fanchor');

// anchorElement.addEventListener('click', function(event) {
//     event.preventDefault();
//     anchorElement.textContent = "Click Done Bhai"
// });



// let paras = document.querySelectorAll('p');




// for(let i=0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click', function(){
//         alert("You Have Click On Para:",+i);
//     });


// Another Way 
// function alertPara(event){
//       alert("You Have Click On Para:" + event.target.textContent);
// }

// for(let i=0; i<paras.length; i++){
//         let para = paras[i];
//         console.log("eventListner added");
//         para.addEventListener('click',alertPara);
// }

// Div Method

function alertPara(event){
    if(event.target.nodeName == 'SPAN'){
        alert("You Have Click On Para:" + event.target.textContent);
    }
    // alert("You Have Click On Para:" + event.target.textContent);
}

let mydiv = document.getElementById('wrapper');

document.addEventListener('click',alertPara);