import Vue from 'vue'
import VueRouter from 'vue-router'

import Trivia from './components/AppTrivia'
import Chuck from './components/AppChuck'

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: 'trivia' },
    { path: '/trivia', component: Trivia, name: 'trivia' }, 
    { path: '/chuck', component: Chuck, name: 'chuck' }
  ];
  
  const router = new VueRouter({
    routes: routes,
    mode: "history"
  });

export default router;