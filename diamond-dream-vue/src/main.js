import Vue from 'vue'
import App from './App.vue'

import DiamondDreamAPI from '@/services/DiamondDreamAPI'
import OrderAPIService from '@/services/OrderAPI'

Vue.config.productionTip = false

Vue.prototype.$diamond_dream_api = DiamondDreamAPI
Vue.prototype.$order_api = OrderAPIService

new Vue({
  render: h => h(App),
}).$mount('#app')
