const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("Default Home Page")
})

//import item ki router file
const item = require('./routes/item');
const birds = require('./routes/birds');
const blogs = require('./routes/blogs');
//load into application
// app.use('/item', item);
app.use('/api', item);
app.use('/filler', birds);
app.use('/extra', blogs);




// ->/api/ -> item home page
// ->/api/items -> item post request
// ->/api/items/id -> put/delete request





// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//Request Ki Kahani 

//get request
// app.get('/',(req,res) => {
//     // res.send("Got a GET Request")
//     res.sendFile('./dummy.html', {root:__dirname})
// });

// app.post('/items',(req,res) => {
//     // res.send("Got a POST Request");
//     res.json({x:1, y:2, z:3});
// });

// app.put('/items/:id',(req,res) => {
//     res.send("Got a PUT Request");
// });

// app.delete('/items/:id',(req,res) => {
//     res.send("Got a DELETE Request");
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------CHAINING-------------------------------------------

// app.get('/',(req,res) => {
//     // res.send("Got a GET Request")
//     res.sendFile('./dummy.html', {root:__dirname})
// }).post('/items',(req,res) => {
//     // res.send("Got a POST Request");
//     res.json({x:1, y:2, z:3});
// }).put('/items/:id',(req,res) => {
//     res.send("Got a PUT Request");
// }).delete('/items/:id',(req,res) => {
//     res.send("Got a DELETE Request");
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

app.listen(port, () => {
  console.log(`Virat app listening on port ${port}`)
})