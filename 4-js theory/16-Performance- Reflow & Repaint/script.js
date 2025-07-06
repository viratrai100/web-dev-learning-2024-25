// // Performance Improvement 


// // code 1 



// // for time
// const t1 = performance.now();
//  for(let i=0; i<=100; i++) {
//     let para = document.createElement('p');
//     para.textContent = 'This is Para ' + i;
//     document.body.appendChild(para);
//  }

//  const t2 = performance.now();

// console.log("tota time by code 1: ", (t2-t1));





// // code 2


// const t3 = performance.now();

// let mydiv = document.createElement('div');

// for(let i=1; i<=100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "This is Para " + i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);


// const t4 = performance.now();

// console.log("tota time by code 1: ", (t4-t3));






// Document Fragment 


// best code 

const t5 = performance.now();

let fragment = document.createDocumentFragment();

for(let i=1; i<=100; i++) {
    let para = document.createElement('p')
    para.textContent = "This Is Para " + i;
    //No reflow and No repaint for the below line
    fragment.appendChild(para);
}

// the below line takes 1 reflow and 1 repaint
document.body.appendChild(fragment);


const t6 = performance.now();

console.log("tota time by code 3: ", (t6-t5));