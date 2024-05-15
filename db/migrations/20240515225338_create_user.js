
exports.up = function(knex) {
  return knex.schema.createTable('users',(table)=>{
    table.increments('id'); //primary key
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
  })
};


exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
