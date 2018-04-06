const Sequelize = require('sequelize')
const db = require('../db')

const Attention = db.define('attention', {
  category: {
    type: Sequelize.ENUM('Toys and Objects', 'Social Play', 'Meals', 'Caregiving', 'Book Activities', 'Household Chores'),
    allowNull: false
  },
  objects: Sequelize.TEXT,
  games: Sequelize.TEXT,
  sensory: Sequelize.TEXT
})

module.exports = Attention
