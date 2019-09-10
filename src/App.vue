<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>
<script>
  export default {
    // inject: ['reload'],
    name: 'App',
    provide () {
      return {
        reload: this.reload
      }
    },
    data () {
      return {
        isRouterAlive: true
      }
    },
    methods: {
      reload () {
        this.isRouterAlive = false
        this.$nextTick(function () {
          this.isRouterAlive = true
        })
      }
    }
  }
</script>
<style lang="scss">
  html, body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  #app {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: #333;
  }
</style>
