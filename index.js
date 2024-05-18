const express = require('express');
const knex = require('./db/db');

const app = express();

app.use(express.json());



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
app.put('/users', (req, res) => {
  knex('users')  // Change 'user' to 'users'
    .where('id', 2)
    .update({ last_name: "s" })
    .then(() => {
      return knex.select().from('users');  // Ensure consistent table name usage
    })
    .then((users) => {
      res.send(users);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});



app.get('/users',(req,res)=>{
  knex.select()
  .from('users').then((users)=>{
    res.send(users);
  });

})

app.listen('8080',()=>{
  console.log('listening at port 8080')
})