<template>
  <div>
    <x-header :left-options="{showBack:false}">直播</x-header>
    <scroller lock-x height="-99px" ref="scroller">
      <div>
        <p v-for="item in allItems" :key="item.created" @click="jump('/circle/detail/'+item.entity.id)">
          <img class="img" :src="item.entity.data.img"></img>{{item.entity.data.title}}
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
        method: 'get',
        url: window.ConfigOBJ.TestSite + '/news',
        params: {
          id: 7642,
          type: 'news',
          p: 1,
          n: 100
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

<style scoped>
.img{
  width: 50px;
}
</style>
