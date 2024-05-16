const express = require('express');
const knex = require('./db/db');

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
  res.send("hello world")
})

app.post('/users', (req,res)=>{
  knex('users')
  .insert({
    first_name: 'charisma',
    last_name: "s",
  })
  .then(()=>{
    knex.select()
    .from('users')
    .then((users)=>{
      res.send(users);
    });
  });
});


app.listen('8080',()=>{
  console.log('listening at port 8080')
})