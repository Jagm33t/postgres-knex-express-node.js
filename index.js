const express = require('express');


const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
  res.send("hello world")
})

app.listen('8080',()=>{
  console.log('listening at port 8080')
})