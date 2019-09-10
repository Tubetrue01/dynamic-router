<template>
  <div class="about">
    <h1 @click="jump">This is an about page</h1>
    <router-link :to="{path: '/'}">qqqqqqqqqqqqqqqqqq</router-link>
  </div>
</template>
<script>
  import { sLogout } from '../service/UserService'

  export default {
    name: 'about',
    data () {
      return {
        userData: {
          username: 'admin',
          password: 'admin'
        }
      }
    },
    mounted () {
      this.log(11111)
      this.login()
      this.logout()
    },
    methods: {
      login () {
        this.$store.dispatch('xLogin', this.userData).then(res => {
          this.log('result => ' + res.dataList)
          this.log('vuex : ' + this.$store.state.user.username)
        })
      },
      logout () {
        sLogout().then(res => {
          this.log(222)
        })
      },
      jump () {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped lang="scss">
  .about {
    h1 {
      font-size: 24px;
      color: rgba(39, 87, 212, 0.68);
    }
  }
</style>
