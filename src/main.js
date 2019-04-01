import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import Bootstrap from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { store } from './store/store'
import router from './router'

Vue.config.productionTip = false

Vue.use(Bootstrap);
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
