
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments('id').primary()
    table.string('input_name')
    table.integer('fist_of_five')
    table.string('review_comment')
    table.integer('student_id').references('students.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews')
};
