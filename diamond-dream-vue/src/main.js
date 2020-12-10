import Vue from 'vue'
import App from './App.vue'

import DiamondDreamAPI from '@/services/DiamondDreamAPI'

Vue.config.productionTip = false

Vue.prototype.$diamond_dream_api = DiamondDreamAPI

new Vue({
  render: h => h(App),
}).$mount('#app')
