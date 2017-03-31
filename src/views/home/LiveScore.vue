<template>
  <div>
    <x-header :left-options="{showBack:false}">直播</x-header>
    <scroller lock-x height="-99px" ref="scroller">
      <div>
        <p v-for="item in allItems" :key="item.created" @click="jump('/news/detail/'+item.nid)">
          {{item.title}}
        </p>
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
      isToInit: true,
      currentPage: 1,
      allItems: []
    }
  },
  mounted () {
    // console.log('mounted', this)
    // this.getData()
  },
  methods: {
    getData: function () {
      this.$http.request({
        method: 'post',
        url: window.ConfigOBJ.LocalSite + '/I/?method=mc.data.news.list',
        params: {
          direct: 'down',
          num: 50,
          type1: 12,
          p: this.currentPage,
          type2: 22
        }
      })
      .then((response) => {
        console.log('[NewsList getData]接口返回:', response.data)
        this.allItems = response.data.info
        this.$nextTick(() => {
          this.$refs.scroller.reset()
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style>
</style>
