exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        { id: 551, input_name: 'rowValue1', fist_of_five: 1, review_comment: '', student_id: 881 },
        { id: 552, input_name: 'rowValue2', fist_of_five: 1, review_comment: '', student_id: 882 },
        { id: 553, input_name: 'rowValue3', fist_of_five: 1, review_comment: '', student_id: 883 }
      ])
    })
}
