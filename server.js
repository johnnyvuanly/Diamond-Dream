// Code that starts our web server

let express = require('express')
let bodyParser = require('body-parser')
let path = require('path')
let order_routes = require('./routes/order.js')
let products_api = require('./routes/products.js') // Require the products.js file

// Create a web app
let app = express()

app.use(bodyParser.json())

app.use(express.static('public'))

app.use('/api', products_api)

app.use('/api', order_routes)

// app.use('/', function(req, res, next){
//     return res.sendFile(path.join(__dirname, 'index.html'))
// })

// Error handlers - for not found, and app errors
app.use(function(req, res, next){
    res.status(404).send('Not found') // 404 indicates that the resources is invalid and does not exist on the server
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Server error') // Indicates a server failure while processing the request
})

// Start the server running 
let server = app.listen(process.env.PORT || 3000, function() {
    // Don't need a function but we'll use one to get feedback that our app is running (Seen in the terminal)
    console.log('Express server running on port', server.address().port) // server.address().port will show the port it is running on 
})