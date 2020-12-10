import axios from 'axios'

let base = 'api'

export default {
    getDiamondMessage() {
        return axios.get(base).then(response => {
            return response.data
        })
    }
}