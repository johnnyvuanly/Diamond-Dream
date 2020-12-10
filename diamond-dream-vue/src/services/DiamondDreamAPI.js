import axios from 'axios'



export default {
    // get all products
    getProducts() {
        return axios.get('api/products').then(response => {
            return response.data
        })
    }
}