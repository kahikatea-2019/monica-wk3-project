
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', (table) => {
    table.increments('id').primary()
    table.string('student_name')
    table.string('img_url')
    table.string('slack_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('students')
};
