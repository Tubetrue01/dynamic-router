<template lang="html">
  <div class="commodity">
    <el-container style="height:100vh">
      <el-aside width="193px" style="background: #1BDBAD;border-radius: 0 40px 40px 0;">
        <Lefter/>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <Header/>
        </el-header>
        <el-main>
          <!--          面包屑     -->
          <BreadCrumb/>
          <!--          主体内容             -->
          <AppMain/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Lefter from '../../components/layout/Lefter'
  import Header from '../../components/layout/Header'
  import AppMain from '../../components/layout/appMain'
  import BreadCrumb from '../../components/layout/breadCrumb'

  export default {
    name: 'index',
    components: {
      Lefter,
      Header,
      AppMain,
      BreadCrumb
    },
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/css/reset.css";

  .el-header {
    background-color: #FFFFFF;
    color: #333;
    line-height: 60px;
    border-bottom: 1px solid #EBEBEB;
  }

  .el-aside {
    color: #333;
  }
</style>
