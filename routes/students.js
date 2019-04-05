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
  const name = req.body.name
  const email = req.body.email
  db.addReview(name, email)
    .then(() => res.redirect('/users'))
    .catch(err => res.status(500).send('DATABASE ERROR: ' + err.message))
})

module.exports = router
