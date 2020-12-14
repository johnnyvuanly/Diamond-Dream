// Connecting the Vue client to the Express API Server
// axios must be installed and a dependency in package.json
import axios from 'axios'

const base_url = '/api/orders'
export default {
    // axios will make request from the Vue client to the Express server API server
    getAllOrders() {
        return axios.get(base_url).then(response => {
            return response.data
        })
    },
    addOrder(order) {
        return axios.post(base_url, order).then(response => {
            return response.data
        })
    }
}