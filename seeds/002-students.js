
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Daniel Mendez', cohort_id: 1},
        {name: 'Jonathan Heinz', cohort_id: 1},
        {name: 'Sean Pheneger', cohort_id: 1}
      ]);
    });
};
