
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts')
        .insert([
          {cohort: 'web15'},
          {cohort: 'web16'},
          {cohort: 'web17'},
          {cohort: 'web18'}
        ]);
    });
  };


