<template>
  <div>
    <x-header :left-options="{preventGoBack:true}" @on-click-back="goBack()">登录</x-header>
    <p @click="loginFn" class="blueColor">点我算登录，返回不算</p>
  </div>
</template>

<script>
  import { XHeader } from 'vux'

  export default {
    components: { XHeader },
    data () {
      return {
        msg: 'Hello user!'
      }
    },
    mounted () {
    },
    methods: {
      loginFn: function () {
        this.$store.commit('user_setUserInfo', {name: 'liyq'})
        this.goBack()
      }
    }
  }
</script>

<style>
</style>
