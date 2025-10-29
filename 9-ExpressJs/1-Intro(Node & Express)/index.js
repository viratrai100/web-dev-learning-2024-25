//including express module and initialising an app
const express = require('express');  // require function -> to include object or module ----->>> kindof - installing express  ----->>>>>> EXPRESS -> a Tool 
const app = express();  // express ke dwara ek app ko create kar rahe hain 


//variable that stores the port number
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log("Get Request Receive Hui Hai")
  })


// request -> get / put / post / delete
//path  -/, /about, /articles, /blog  

//start your app or server
app.listen(port, () => {
    console.log("Application start ho chuki hai")
})

//---------------------------------------------------------------------------------------------------------------------------------------

// Clear code 

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })