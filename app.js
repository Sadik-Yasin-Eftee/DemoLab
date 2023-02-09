const express = require('express')
const app = express()

require("dotenv").config({path:"./.env"});

app.get('/',(req,res) =>{
    res.send('Welcome to azure');
})

//port 3000
app.listen(process.env.port,()=>{
    console.log('Server is running');
})