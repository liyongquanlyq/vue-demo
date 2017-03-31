export default {
  methods: {
    jump (to) {
      if (this.$router) {
        this.$router.push(to)
      }
    },
    replace (to) {
      if (this.$router) {
        this.$router.replace(to)
      }
    },
    goBack () {
      if (this.$router) {
        if (this.$store.state.route.from.fullPath === '/') {
          this.$router.replace('/')
        } else {
          this.$router.back()
        }
      }
    }
  }
}
