exports.up = function (knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id').primary()
    table.string('comment_name')
    table.integer('review_id').references('reviews.id')
    table.string('slack_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('comments')
}
