console.log('start');
setTimeout(() => {
    console.log('Timeout Done');
}, 0);
console.log('end');

// output ->   
// start
// end
// Timeout Done


// SINGLE THRED -> perform one task at a time.

// javascript single thred hone ke baad bhi event loop ke help se task asynchronous task ko perform kar leta hai.

// normal synchronous -> run one by one in CALL STACK
// Asynchronous -> time consuming wale function ko WEB API me bhej deti hai -> tab tak rahenge jb tak inka time delay khtm n ho jaye.
// CALLBACK QUEUE -> jb tak CALL STACK ke sare function run nahi ho jate tb tak ye sare function CALLBACK QUEUE  me rehte hain
// finally -> CALL STACK ke sare function run hone ke baad ye asynchronous function one by one run hote hain.