
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', tbl => {
    tbl.increments();  //generates primary key as id automatically

    tbl
      .string('cohort')
      .notNullable()
      .unique()

      tbl.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cohorts');  //opposite of up method
};


