const Sequelize = require('sequelize')
const db = require('../db')

const Child = db.define('child', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gender: {
    type: Sequelize.ENUM('male', 'female')
  }
})

module.exports = Child
