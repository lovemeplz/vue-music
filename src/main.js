import Vue from 'vue'
import App from './App.vue'
import fastclick from 'fastclick'


import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import '@/styles/index.scss' // global css

import router from './router'

fastclick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
