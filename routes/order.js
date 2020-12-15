// todo order routes

// look at routes/api.js slide
let express = require('express')
let db = require('../models')
let OrderInfo = db.Order

let router = express.Router()

// Get all orders at /orders, return as JSON
router.get('/orders', function(req, res, next){
    OrderInfo.findAll().then( orders => {
        return res.json(orders)
    })
})

router.post('/orders', function(req, res, next){
    let ObjectsOfOrders = req.body 
    let allOrderInfo = []
    let productsOrderedArray = ObjectsOfOrders.productsOrdered
    let objectCustomerName = ObjectsOfOrders.customerName
    let objectCustomerAddress = ObjectsOfOrders.customerAddress
    productsOrderedArray.forEach(element => {
        let objectProductId = element.product.id
        let objectQuantity = element.quantity

        let orderInfo = {customerName: objectCustomerName, productID: objectProductId, quantity: objectQuantity, customerAddress: objectCustomerAddress}

        console.log(orderInfo)

        allOrderInfo.push(orderInfo) // add all info objects
    }); 
        
    console.log(allOrderInfo)
    // console.log(productsOrderedArray)

    // if it's an array of objects, you'll need to loop and 
    // save each individual OrderInfo to the database
    OrderInfo.bulkCreate(allOrderInfo).then( (data) => {
        return res.status(201).send('ok')
    }).catch(err => next(err)) // error handling or the server will get stuck if there's a problem
})

module.exports = router 