<template>
  <div>

    <LiveHome v-show="currentType=='index'" ref="liveHomeComp"></LiveHome>
    <LiveCircle v-show="currentType=='circle'" ref="LiveCircleComp"></LiveCircle>
    <LiveScore v-show="currentType=='score'" ref="LiveScoreComp"></LiveScore>
    <LiveAccount v-show="currentType=='account'" ref="LiveAccountComp"></LiveAccount>

    <tabbar v-model="currentTypeIndex">
      <tabbar-item @on-item-click="replace('/home/index')">
        <img slot="icon" src="../../assets/icon/okooo_home.png">
        <img slot="icon-active" src="../../assets/icon/okooo_homed.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item @on-item-click="replace('/home/circle')">
        <img slot="icon" src="../../assets/icon/okooo_communicate.png">
        <img slot="icon-active" src="../../assets/icon/okooo_communicated.png">
        <span slot="label">彩友圈</span>
      </tabbar-item>
      <tabbar-item @on-item-click="replace('/home/score')">
        <img slot="icon" src="../../assets/icon/okooo_live.png">
        <img slot="icon-active" src="../../assets/icon/okooo_lived.png">
        <span slot="label">直播</span>
      </tabbar-item>
      <tabbar-item @on-item-click="replace('/home/account')">
        <img slot="icon" src="../../assets/icon/okooo_user.png">
        <img slot="icon-active" src="../../assets/icon/okooo_usered.png">
        <span slot="label">账户</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Tab, TabItem, Scroller, XHeader, Group, Cell } from 'vux'
import LiveHome from '@/views/home/LiveHome'
import LiveCircle from '@/views/home/LiveCircle'
import LiveScore from '@/views/home/LiveScore'
import LiveAccount from '@/views/home/LiveAccount'
export default {
  components: {Tabbar, TabbarItem, Tab, TabItem, Scroller, XHeader, Group, Cell, LiveHome, LiveCircle, LiveScore, LiveAccount},
  data () {
    return {
      msg: 'Hello World!',
      currentType: 'index',
      currentTypeIndex: 5
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.switchType(this.$route.params.type)
    })
  },
  watch: {
    '$route' (to, from) {
      this.switchType(to.params.type)
    }
  },
  methods: {
    switchType: function (str) {
      switch (str) {
        case 'index':
          this.currentType = 'index'
          this.currentTypeIndex = 0
          break
        case 'circle':
          this.currentType = 'circle'
          this.currentTypeIndex = 1
          break
        case 'score':
          this.currentType = 'score'
          this.currentTypeIndex = 2
          break
        case 'account':
          this.currentType = 'account'
          this.currentTypeIndex = 3
          break
        default:
          this.currentType = 'index'
          this.currentTypeIndex = 0
          break
      }
      if (str === 'score') {
        if (this.$refs.LiveScoreComp.isToInit === true) {
          this.$refs.LiveScoreComp.isToInit = false
          this.$refs.LiveScoreComp.getData()
        }
      }
    }
  }
}
</script>

<style>
</style>
