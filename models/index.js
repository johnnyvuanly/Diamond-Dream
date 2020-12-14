// This will connect to the database, and keep track of models in the app

let {Sequelize, DataTypes } = require('sequelize')

let env = process.env.NODE_ENV || 'development'
let config = require(__dirname + '/../config.json')[env]

let db = {}

let sequelize

if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
    sequelize = new Sequelize(config)
}

let orderModel = require('./orderTable')(sequelize, DataTypes)
db[orderModel.name] = orderModel

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db 