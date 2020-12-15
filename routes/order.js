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

    console.log(JSON.stringify(req.body))  // what data is your server receiving? 
    // if it's an array of objects, you'll need to loop and 
    // save each individual OrderInfo to the database

    // OrderInfo.create expects an argument of one object, same properties as defined in the model 
    // For example { customerName: 'anna', productID: 1, quantity: 2 }

/*{
   "customerName":"anna",
   "productsOrdered":[
      {
         "product":{
            "id":1,
            "productName":"Golden Flower Pearl Earrings",
            "description":"Bright gold earrings, handmade item, flower studs",
            "available":true,
            "quantityAvailable":100,
            "features":[
               "Sunshine yellow",
               "Fresh real pearl",
               "High Quality"
            ],
            "image":"golden_flower_pearl_earrings.jpg",
            "maxQuantity":5,
            "minQuantity":1,
            "price":19.99
         },
         "quantity":2
      },
      {
         "product":{
            "id":2,
            "productName":"Jade Cross Bead Necklace",
            "description":"Beautiful real jade cross necklace",
            "available":true,
            "quantityAvailable":40,
            "features":[
               "Fresh River Pearls",
               "Real Jade Beads",
               "Real Jade Cross"
            ],
            "image":"jade_cross_bead_necklace.jpg",
            "maxQuantity":10,
            "minQuantity":1,
            "price":39.99
         },
         "quantity":1
      }
   ]
}
 */
    OrderInfo.create(req.body).then( (data) => {
        return res.status(201).send('ok')
    }).catch(err => next(err))  // error handling or your server will get stuck if there's a problem
})

module.exports = router 