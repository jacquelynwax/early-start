const User = require('./user')
const Child = require('./child')
const Attention = require('./attention')

/* Associations */
Child.belongsTo(User)
User.hasMany(Child)

Attention.belongsTo(User)
User.hasMany(Attention)

Attention.belongsTo(Child)
Child.hasMany(Attention)

/* We export all models here, so that any time a module needs a model, it can be required from 'db/models.' */
module.exports = {
  User,
  Child,
  Attention
}
