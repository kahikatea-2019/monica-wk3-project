exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { id: 881, student_name: 'bambam', img_url: 'xxxxx', slack_id: 'bambam-slack' },
        { id: 882, student_name: 'ihaka', img_url: 'xxxxx', slack_id: 'ihaka-slack' },
        { id: 883, student_name: 'brad', img_url: 'xxxxx', slack_id: 'brad-slack' },
        { id: 884, student_name: 'raj', img_url: 'xxxxx', slack_id: 'raj-slack' },
        { id: 885, student_name: 'philipj', img_url: 'xxxxx', slack_id: 'philipj-slack' },
        { id: 886, student_name: 'paul', img_url: 'xxxxx', slack_id: 'paul-slack' }
      ])
    })
}
