const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.redirect('students')
})

router.get('/students', (req, res) => {
  db.getStudents()
    .then(students => {
      res.render('index', { students })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR:' + err.message)
    })
})

router.get('/profile/:id', (req, res) => {
  db.getStudent(req.params.id)
    .then(students => res.render('profile', { students }))
    .catch(err => res.status(500).send(err.message))
})

router.post('/profile/:id', (req, res) => {
  const input_name = req.body.input_name
  const review_comment = req.body.review_comment
  const fist_of_five = req.body.fist_of_five
  const id = req.params.id
  console.log(req.body)
  console.log(req.params)
  db.addReview(input_name, fist_of_five, review_comment)
    .then(() => res.redirect(`/profile/${id}`))
    .catch(err => res.status(500).send('DATABASE ERROR: ' + err.message))
})

module.exports = router
//helpg