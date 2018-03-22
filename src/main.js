
import Vue from 'vue';
import VueRouter from 'vue-router';
import Router from './router/router'
import './css/common';
import App from './App'

Vue.use(VueRouter)
const router = new VueRouter(Router);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')