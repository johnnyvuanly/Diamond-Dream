<template>
  <html>
  <div id="app">
    <head>
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet">
    </head>
    
    <h1>Diamond Dream</h1>

    <order v-bind:orders="orders" v-on:order-added="newOrderAdded"
    v-on:delete-order="deleteOrder"></order>

    <h2>Product Catalog</h2>
    
    <!-- Loop - display all the products -->
    <product
      v-for="productData in products" v-bind:key="productData.id"
      v-bind:product="productData"
      v-bind:productApiUrl="productApiUrl"
      v-on:product-ordered="productOrdered">
    </product>

  </div>
  </html>
</template>

<script>
import Product from './components/Product.vue'
import Order from './components/Order.vue'

export default {
  name: 'App',
  components: {
    Product, Order // List all the component's names
  },
  data() {
    return {
      // copy this from products.html
      productApiUrl: '',
      products: [], // This will be set by the API call in mounted
      orders: [], // New orders array
    }
  },
  mounted() { // copy from products.html
    this.$diamond_dream_api.getProducts().then( productData => { // use getProducts() method for API data
      this.products = productData
    }),
    this.updateOrders() // Nessessary?
  },
  methods: { // New method
    newOrderAdded() { 
      // this.orders is an array of multiple order objects
      this.$order_api.addOrder(this.orders).then( order => {
        this.updateOrders()
      })
    },
    productOrdered(productId, quantity) {

      // look up name and other product info in products array
      let productInfo = this.products.find( product => product.id == productId)

      // New object with info about this order - the product object and quantity
      let orderItem = {product: productInfo, quantity: quantity}

      // avoid duplicate orders for the same product

      // Has a product with this ID already been ordered?
      // search the orders array for an order with this product ID
      let existingOrderIndex = this.orders.findIndex( order => order.product.id == productId)
      if (existingOrderIndex == -1) {
        // add to orders array
        this.orders.push(orderItem)
      } else {
        // Vue has a hard time tracking modifications to objects within arrays
        // so this looks like it would work,
        // this.orders[existingOrderIndex] = orderItem
        // and it would update the orders array but the page wouldn't change.
        // so we have to use the $set method to make the change to the array
        // and make the page update.
        this.$set(this.orders, existingOrderIndex, orderItem)
      }

    },
    deleteOrder(order) {
      // filter orders - keep all orders with a different ID to this product
      this.orders = this.orders.filter( o => o.product.id !=order.product.id)
    },
    updateOrders() { // Necessary?
      this.$order_api.getAllOrders().then( orders => {
        this.orders = orders
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background:papayawhip;
}
h1 {
  font-family: 'Sacramento', cursive;
  font-size: 80px;
  background: salmon;
  text-align: center;
  color: aliceblue;
}
html {
  background: papayawhip;
}
</style>
