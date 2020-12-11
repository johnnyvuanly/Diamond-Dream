let {Sequelize, DataTypes } = require('sequelize')

let env = process.env.NODE_ENV || 'development'
let config = require(_dirname + '/../config.json')[env]

let db = {}

let sequelize

if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
    sequelize = new Sequelize(config)
}

let diamondModel = require('./diamond')(sequelize, DataTypes)
db[diamondModel.name] = diamondModel

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db 