// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLadda from 'vue-ladda'
Vue.config.productionTip = false
// ============== Use Module Part
Vue.component('vue-ladda', VueLadda)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
