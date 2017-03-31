// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import * as filters from './filters'
import mixins from './mixins'
import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)

FastClick.attach(document.body)

sync(store, router)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.mixin(mixins)

Vue.config.productionTip = false

router.afterEach(function (to) {
  if (window.ga) {
    window.ga('set', 'page', to.fullPath)
    window.ga('send', 'pageview')
  }
})

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
