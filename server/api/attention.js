const router = require('express').Router()
const { Attention } = require('../db/models')
module.exports = router

/* get all attention entries for a single child */
router.get('/:childId', (req, res, next) => {
  Attention.findAll({
    where: {
      childId: req.params.childId
    }
  })
  .then(attentionEntries => {
    res.json(attentionEntries)
  })
  .catch(next)
})

/* create a new attention entry for a child */
// *** when I hook this up to front end, I need to send decide how to make association -- send it with req.body or isolate all elements back here and drop them into create
router.post('/:childId', (req, res, next) => {
  Attention.create(req.body)
    .then(newAttentionEntry => {
      res.json(newAttentionEntry)
    })
    .catch(next)
})

/* update an existing attention entry */
router.put('/:attentionId', (req, res, next) => {
  Attention.update(req.body, {
    where: {
      id: req.params.attentionId
    }, returning: true
  })
  .then(updatedAttentionEntry => {
    res.json(updatedAttentionEntry[1][0])
  })
  .catch(next)
})

/* destroy an existing attention entry */
router.delete('/:attentionId', (req, res, next) => {
  Attention.destroy({
    where: {
      id: req.params.attentionId
    }
  })
  .then(() => res.status(204).send('Entry successfully deleted'))
  .catch(next)
})
