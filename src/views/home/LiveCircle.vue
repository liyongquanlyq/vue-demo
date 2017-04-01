<template>
  <div>
    <x-header :left-options="{showBack:false}">彩友圈</x-header>
    <scroller lock-x height="-99px" ref="ScrollerDom">
      <div>
        我是彩友圈...
        我再加点字...
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
  }
}
</script>

<style>
</style>
