exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        { id: 771, comment_name: 'rowValue1', review: 1, slack_id: '' },
        { id: 772, comment_name: 'rowValue2', review: 1, slack_id: '' },
        { id: 773, comment_name: 'rowValue3', review: 1, slack_id: '' }
      ])
    })
};
