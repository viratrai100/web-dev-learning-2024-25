const express = require('express')
const app = express()
const port = 3000

// //loading middleware into the app
// //inbuilt middleware
app.use(express.json());

// //middleware -> logging, auth, validation 


// //creation of a middleware
// const loggingMiddleware = function (eq, res,next) {
//     console.log('LOGING Krra Hu')
//     next();
// }
// app.use(loggingMiddleware);


// //loading middleware into application
// const authMiddleware = function (eq, res,next) {
//     console.log("Auth Kar Raha Hu")
//     res.send("Chalo Seedha Ghar")
//     // next(); /* */
// }
// app.use(authMiddleware);

// const validationMiddleware = function (eq, res,next) {
//     console.log("Validation Krra Hu");
//     next();
// }
// app.use(validationMiddleware);

// ---------------Middleware ko route handler ke upar hi likhenge-----------------------------------------------------


const route = require('./routes/route')
// mounting the routes 
app.use('/api', route)

// -> /api/student
// -> /api/admin

app.get('/', (req, res) => {
  console.log("Main Router Handler Hu")  
  console.log(req.body);
  res.send('Home Page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
