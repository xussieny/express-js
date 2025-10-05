//initialise express app
const express =require('express');
const dotenv = require('dotenv');
const connectDB =require('./config/db');
const app =express();
const port=process.env.PORT;
//loading env variables
dotenv.config();
//middle layer or security layer or parse json
app.use(express.json()) //parse json
// app.get('/', (req, res)=>{
    // res.send('Welcome to Express.js CRUD API');
// })
//connect to database
connectDB();

//routes
app.use("/students", require('./routes/routStudent'));


// default or hoome page
app.get('/', (req, res)=>{
    res.send('Welcome to Express.js CRUD API');
});

app.listen(port,()=>console.log(`server running on port: http://localhost:${port}`));