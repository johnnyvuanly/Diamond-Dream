<template>

<div>

    <p v-if="orders.length==0"></p>

    <div v-else>
        <label>Your Name:</label><input v-model="customerName">

        <br><label>Your Address:</label><input v-model="customerAddress">

        <table>
            <tr>
                <th>Product ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Delete?</th>
            </tr>
            <tr v-for="order in sortedOrdersByName" v-bind:key="order.product.id">
                <td>{{ order.product.id }}</td>
                <td>{{ order.product.productName }} </td>
                <td>{{ order.quantity }}</td>
                <td><button v-on:click="deleteOrder(order)">X</button></td>
            </tr>
        </table>

        <button id="orderButton" v-on:click="submitOrders">Submit Order</button>

        <p>{{ message }}</p>
    </div>


</div>

</template>

<script>
export default {
    name: 'Order',
    data() {
        return {
            message: '',
            customerName: '',
            customerAddress: ''
        }
    },
    props: {
        orders: Array
    },
    computed: {
        sortedOrdersByName() {
            let copyOrders = [...this.orders]
            return copyOrders.sort( (o1, o2) => o1.product.name > o2.product.name ? -1 : 1)
        }
    },
    methods: {
        deleteOrder(order) {
            if (confirm(`Delete your order for ${order.quantity} ${order.product.productName}, are you sure? `)) {
                this.$emit('delete-order', order)
            }
        },
        submitOrders() {
            this.$emit('order-added', this.customerName, this.customerAddress)
            this.message = 'Your order has been submitted!'
        }

    }
}
</script>

<style scoped>
table {
    /* center the table - the text-align style in App.vue won't center it.  */
    margin-left: auto;
    margin-right: auto;
}
td, th {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 5px;
    padding-top: 5px;
}
table, th, td, tr {
    border: 1px lightgrey solid;
    border-collapse: collapse;
}
button {
    background: red;
}
#orderButton {
    background: lightgray;
    margin-top: 20px;
}
</style>