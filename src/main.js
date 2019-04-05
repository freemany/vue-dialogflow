import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'

Vue.config.productionTip = false;
Vue.config.dialogFlowManual = false; // false: no api call but from the local config file

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
