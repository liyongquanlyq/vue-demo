<template>
  <div>
    <x-header :left-options="{showBack:false}">首页</x-header>
    <scroller lock-x height="-99px" ref="livehomeScrollerDom">
      <div>
        <div class="body" ref="testref">
          <div @click="jump('/news/list/12')" class="item">
            <p>进入资讯列表</p>
          </div>
        </div>
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
