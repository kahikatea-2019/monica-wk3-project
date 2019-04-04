const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getStudents: getStudents,
  getStudent: getStudent,
  displayReview: displayReview,
  addReview: addReview
}

function getStudents (db = connection) {
  return db('students').select()
}

function getStudent (id, db = connection) {
  return db('students').where('id', id).first()
}

function displayReview (id, db = connection) {
  return db('reviews')
    .join('students', 'students.id', 'reviews_student.id')
    .where('students.id', id)
    .select()
}

function addReview (id, db = connection) {
  return db('reviews')
    .insert({ input_name: input_name, fist_of_five: fist_of_five, review_comment: review_comment })
    .select()
}
