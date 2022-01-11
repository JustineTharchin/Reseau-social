import Vue from 'vue'
import router from './router/index'
import App from './App.vue'
import './axios'

Vue.config.productionTip = false

if (localStorage.user != undefined) {
    Vue.prototype.$token = JSON.parse(localStorage.user).token;
    Vue.prototype.$user = JSON.parse(localStorage.user);
  }

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')