<template>
  <div class="login">
    <input type="text" placeholder="用户名" v-model="username">
    <input type="text" placeholder="密码" v-model="pwd">
    <button @click="loginBtn">登录</button>
  </div>
</template>

<script>
  import { sLogin } from '../../service/user-service'

  export default {
    name: 'login',
    data () {
      return {
        username: '',
        pwd: ''
      }
    },
    mounted () {
    },
    methods: {
      loginBtn () {
        let data = {
          username: this.username,
          password: this.pwd
        }
        sLogin(data).then(res => {
          this.log(res)
          this.$router.push('/')
        })
      }
    }
  }
</script>

<style scoped>

</style>
