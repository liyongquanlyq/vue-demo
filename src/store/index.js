import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    items: {}
  },

  getters: {
  },

  mutations: {// 同步操作
  },

  actions: {// 异步操作
  },

  modules: {
    userModule: userModule
  }

})

export default store
