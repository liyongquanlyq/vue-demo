<template>
  <div>
    <x-header :left-options="{preventGoBack:true}" @on-click-back="goBack()">详情</x-header>
    <scroller lock-x height="-53px" ref="ScrollerDom">
      <div class="body">
        <p>{{title}}</p>
        <p>{{id}}</p>
        <p>{{ date | timeAgo }}</p>
        <p>{{body | unescape }}</p>
      </div>
    </scroller>
  </div>
</template>

<script>
  import { Scroller, XHeader } from 'vux'

  export default {
    components: { Scroller, XHeader },
    props: {
      // type: {
      //   type: String,
      //   required: true,
      //   default: 'top'
      // }
    },
    data () {
      return {
        title: '',
        date: '',
        id: '',
        body: '',
        selected: '2'
      }
    },
    methods: {
      getData: function () {
        this.$http.request({
          method: 'post',
          url: window.ConfigOBJ.LocalSite + '/I/?method=mc.data.news.detail',
          params: {
            nid: this.$route.params.type
          }
        })
        .then((response) => {
          console.log('[NewsDetail getData]接口返回:', response.data)
          this.title = response.data.info.title
          this.date = response.data.info.date
          this.id = response.data.info.id
          this.body = response.data.info.body
          this.$nextTick(() => {
            this.$refs.ScrollerDom.reset()
          })
        })
        .catch(function (error) {
          console.log(error)
        })
      }
    },
    created () {
      this.getData()
    }
  }
</script>

<style scoped>
  .header {
    position: fixed;
    height: 120px;
    width: 100%;
    top:0px;
    left:0px;
    margin-bottom: 3px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #DDDDDD;
    background-color: #FF6600;
    z-index: 100;
  }
  .logo {
    position: relative;
    width: 50px;
    height: 50px;
    top: 35px;
    left: 35px;
    border-width: 3px;
    border-style: solid;
    border-color: #FFFFFF;
  }
  .image {
    width: 44px;
    height: 44px;
  }
  .title {    
    position: absolute;
    left: 120px;
    top: 35px
  }
</style>
