// todo order routes

// look at routes/api.js slide
let express = require('express')
let db = require('../models')
let OrderInfo = db.Order

let router = express.Router()

// Get all students at /orders, return as JSON
router.get('/orders', function(req, res, next){
    OrderInfo.findAll().then( orders => {
        return res.json(orders)
    })
})

// Create a new student with a post to /orders, return 201 status and ok message
router.post('/orders', function(req, res, next){
    OrderInfo.create(req.body).then( (data) => {
        return res.status(201).send('ok')
    })
})

module.exports = router 