<template>
  <div>
    <x-header :left-options="{showBack:false}">彩友圈</x-header>
    <scroller lock-x height="-99px" ref="ScrollerDom">
      <div @click="callOrigin">
        点我调用原生异步请求稍后返回，浏览器下无效。
      </div>
      <div>{{this.$store.state.userModule.TipStr}}</div>
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
  methods: {
    callOrigin: function () {
      console.log('调用原生')
      // 原生获取数据
      if (window.ConfigOBJ.Platform === 3 && typeof window.jsBridge !== 'undefined') {
        window.jsBridge.postNotification('oc', {'jsbridgetype': 'wanpu'})
      }
      if (window.ConfigOBJ.Platform === 4 && typeof window.androidobj !== 'undefined') {
        window.androidobj.wanpu()
      }
    }
  }
}
</script>

<style>
</style>
