import Vue from 'vue'
import router from './router'
import App from './App.vue'

import 'shards-ui/dist/css/shards.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router,
}).$mount('#app')
