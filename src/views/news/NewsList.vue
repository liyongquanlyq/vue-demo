<template>
  <div>
    <x-header :left-options="{preventGoBack:true}" @on-click-back="goBack()">双色球新闻资讯</x-header>
    <scroller lock-x use-pulldown @on-pulldown-loading="loadItems" :pulldown-config="pulldownConfig" height="-53px" ref="ScrollerDom">
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
      allItems: [],

      pulldownConfig: {
        downContent: '下拉刷新',
        upContent: '释放刷新',
        loadingContent: '加载中...'
      }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    loadItems: function () {
      this.getData()
    },
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
        this.$refs.ScrollerDom.donePulldown()
        this.allItems = response.data.info
        this.$nextTick(() => {
          this.$refs.ScrollerDom.reset()
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
