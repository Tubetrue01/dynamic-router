<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view/>
    </transition>
  </section>
</template>

<script>
  export default {
    name: 'appMain',
    computed: {
      key () {
        return this.$route.path
      }
    }
  }
</script>

<style scoped>
</style>
