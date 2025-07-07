alert("Hello ");


// Example 1: Basic Event Loop Behavior

console.log("Start");

setTimeout(() => {
  console.log("setTimeout Callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Resolved");
});

console.log("End");


// Example 2: Blocking the Event Loop

console.log("Start");

setTimeout(() => {
  console.log("setTimeout Callback");
}, 1000);

for (let i = 0; i < 1e9; i++) {
  // Simulating heavy computation
}

console.log("End");


// Example 3: Microtask vs Macrotask

setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

// Example 4: Callback Hell

setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);
