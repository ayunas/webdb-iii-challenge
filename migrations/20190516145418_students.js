
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', tbl => {
      tbl.increments();  //create the primary key id

      tbl.string('name', 128).notNullable();

      tbl
        .integer('cohort_id')
        .unsigned() //what is this for again?
        .references('id')
        .inTable('cohorts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      tbl.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('students');
};
