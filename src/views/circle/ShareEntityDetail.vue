<template>
  <div>
    <x-header :left-options="{preventGoBack:true}" @on-click-back="goBack()">详情</x-header>
    <scroller lock-x height="-53px" ref="ScrollerDom">
      <div class="body">
        <p>{{title}}</p>
        <p>{{id}}</p>
        <p v-if="date!==''">{{ date | timeAgo }} ago</p>
        <p v-html="body"></p>
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
          method: 'get',
          url: window.ConfigOBJ.TestSite + '/detail',
          params: {
            type: 'news',
            id: this.$route.params.type
          }
        })
        .then((response) => {
          console.log('[NewsDetail getData]接口返回:', response.data)
          this.title = response.data.info.entity.data.title
          this.date = response.data.info.entity.create_time
          this.id = response.data.info.entity.id
          this.body = response.data.info.entity.data.content
          this.$nextTick(() => {
            setTimeout(() => {
              this.$refs.ScrollerDom.reset()
            }, 500)
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
