import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import Bootstrap from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Trivia from './components/AppTrivia'

Vue.config.productionTip = false

Vue.use(Bootstrap);
Vue.use(BootstrapVue);
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: 'trivia' },
  { path: '/trivia', component: Trivia, name: 'trivia' }
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
