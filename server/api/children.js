const router = require('express').Router()
const { Child } = require('../db/models')
module.exports = router

/* get one child by id */
router.get('/:childId', (req, res, next) => {
  Child.findById(req.params.childId)
    .then(child => {
      if (!child) {
        res.status(401).send('Child not found')
      } else if (req.user.id !== child.userId) {
        res.status(403).send('Access denied')
      } else {
        res.json(child)
      }
    })
    .catch(next)
})

/* create a new child and associate it with the logged in user */
router.post('/', (req, res, next) => {
  Child.create(req.body)
    .then(newChild => {
      res.json(newChild)
    })
    .catch(next)
})
