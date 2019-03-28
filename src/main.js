// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import base from './base'
import store from './store'

Vue.use(base);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})

/* console.log('11111');

import {counter,add} from './test.js'

console.log(counter);
add();
console.log(counter); */


