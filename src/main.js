import Vue from 'vue'
import App from './App.vue'
import OrdersView from './components/OrdersView.vue'
import Home from './components/Home.vue'
import VueRouter from 'vue-router';
import Uploads from './components/Uploads';
import 'bootstrap/dist/css/bootstrap.css';

// change URL to connect GO App
Vue.prototype.$baseUrl = 'http://localhost:90';




Vue.use(VueRouter);
const routes = [
    { path: '/orders', component: OrdersView },
    { path: '/', component: Home },
    { path: '/uploads', component: Uploads}
];

const router = new VueRouter({
    routes,
    mode: 'history'
});
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')