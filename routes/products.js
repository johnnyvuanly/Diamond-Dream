// On a webserver routing is matching up different requests
// to a server with code that runs in response to that request
// and create some kind of response 

let express = require('express') // We are going to require the express library, similar to a Python import
let products = require('./data.js')

let router = express.Router() // Create a router which will be an object that understands how match different requests, the different paths, with functions that can respond to each individual request

// router.get means configure a route that is a get request, that fetches data
router.get('/products', function(req, res, next){
    // Function used to provide a response 
    return res.json(products)
})

module.exports = router // Export router which is the variable above. This will allow another file to be able to include or require this file

// Nodemon will get api server started in terminal
