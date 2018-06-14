import Vue from 'vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import router from './router'

import App from './App.vue'

Vue.use(Vuetify, {
  theme: {
    primary: '#424B54',
    secondary: '#93A8AC'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')