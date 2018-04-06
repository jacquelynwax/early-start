const User = require('./user')
const Child = require('./child')

/*
 * Associations
 */
 Child.belongsTo(User)
 User.hasMany(Child)

/*
 * Export all models here, so that any time a module needs a model,
 * it can be required from 'db/models.'
 */
module.exports = {
  User
}
