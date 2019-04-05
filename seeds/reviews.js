exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        { id: 551, input_name: 'Bradley', fist_of_five: 1, review_comment: 'dsadsdsadsaasdasdasdasdadsasd', student_id: 881 },
        { id: 552, input_name: 'Raj', fist_of_five: 1, review_comment: 'dfssdffsdadfadfasfdsdfs', student_id: 882 },
        { id: 553, input_name: 'Paul', fist_of_five: 3, review_comment: 'fddfasdaffsdfsddfsasdfadsfafdsadsfafsdafsda', student_id: 883 },
        { id: 554, input_name: 'Brad', fist_of_five: 4, review_comment: 'adfdfsadfsadfsdfsa', student_id: 884 },
        { id: 555, input_name: 'Chad', fist_of_five: 5, review_comment: 'afdafsdafsasdffadfadsfasd', student_id: 885 },
        { id: 556, input_name: 'Raj', fist_of_five: 2, review_comment: '', student_id: 886 },
        { id: 557, input_name: 'Ihaka', fist_of_five: 3, review_comment: '', student_id: 881 },        { id: 558, input_name: 'Ihaka', fist_of_five: 1, review_comment: '', student_id: 881 },
        { id: 559, input_name: 'Philip', fist_of_five: 3, review_comment: '', student_id: 882 },
        { id: 560, input_name: 'Paul', fist_of_five: 4, review_comment: '', student_id: 883 },
        { id: 561, input_name: 'Brad', fist_of_five: 2, review_comment: '', student_id: 884 },
        { id: 562, input_name: 'Philip', fist_of_five: 1, review_comment: '', student_id: 885 },
        { id: 563, input_name: 'Raj', fist_of_five: 5, review_comment: '', student_id: 886 },
        { id: 564, input_name: 'Ihaka', fist_of_five: 3, review_comment: '', student_id: 881 }
      ])
    })
}
