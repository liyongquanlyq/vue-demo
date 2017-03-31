<template>
  <div>
    <x-header :left-options="{showBack:false}">账户</x-header>
    <scroller lock-x height="-99px" ref="ScrollerDom">
      <div v-if="IsLogin">
        hello {{UserInfo.name}}
      </div>
      <div v-else @click="jump('/user/login')" class="blueColor">  
        hello {{UserInfo.name}} 点我去登录
      </div>
    </scroller>
  </div>
</template>

<script>
import { Scroller, XHeader } from 'vux'

export default {
  components: { Scroller, XHeader },
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  computed: {
    IsLogin: function () {
      return this.$store.getters.user_IsLogin
    },
    UserInfo: function () {
      return this.$store.getters.user_UserInfo
    }
  }
}
</script>

<style lang="less" scoped>
@mainColor: #963;
.blueColor {
  color: @mainColor;
}
</style>
