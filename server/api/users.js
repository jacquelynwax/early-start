const router = require('express').Router()
const { User } = require('../db/models')
module.exports = router

/* create new user */
router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(newUser => res.json(newUser))
    .catch(next)
})
