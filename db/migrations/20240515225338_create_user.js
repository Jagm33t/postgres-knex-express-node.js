
exports.up = function(knex) {
  return knex.schema.createTable('users',(table)=>{
    table.increments('id'); //primary key
    table.string('email').notNullable();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.timestamps(true,true);

  })
};


exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
