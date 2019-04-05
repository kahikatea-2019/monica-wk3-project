const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getStudents: getStudents,
  getStudent: getStudent,
  displayReview: displayReview,
  addReview: addReview,
  addComment: addComment
}

function getStudents (db = connection) {
  return db('students')
    .select()
}

function getStudent (id, db = connection) {
  return db('students')
    .where('id', id)
    .select()
}

function displayReview (id, db = connection) {
  return db('reviews')
    .join('students', 'students.id', 'reviews_student.id')
    .where('students.id', id)
    .select()
}

function addReview (input_name, fist_of_five, review_comment, db = connection) {
  return db('reviews')
    .insert({ input_name: input_name, fist_of_five: fist_of_five, review_comment: review_comment })
    .select()
}

function addComment (id, db = connection) {
  return db('comments')
    .join('reviews', 'reviews.id', 'comments.review_id')
    .where('reviews.id', id)
    .select()
}

