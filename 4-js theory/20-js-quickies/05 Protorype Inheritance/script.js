let papa = {
    home: true,
    wallet: "$1000",
};

let beta = {
    moj_masti: true,
};

beta.__proto__ = papa;
console.log(beta.home);
console.log(beta.wallet);

// output ->
// true
// $1000



// prototype allow karta hai ek object ko dusre object ki property uske karne ke liye, wo bhi bina data duplicate kiye. 