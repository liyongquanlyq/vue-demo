const userModule = {
  state: {
    IsLogin: false,
    UserInfo: {
      name: 'user'
    }
  },

  getters: {// 计算属性
    user_UserInfo (state, getters) {
      return state.UserInfo
    },
    user_IsLogin (state, getters) {
      return state.IsLogin
    }
  },

  mutations: {// 同步操作
    user_setUserInfo (state, payload) {
      state.IsLogin = true
      state.UserInfo = payload
    }
  },

  actions: {// 异步操作
    user_getUserInfo (context, payload) {
      // todo ajax
      context.commit('user_setUserInfo', payload)
    }
  }
}

export default userModule
