<template>
  <div class="breadCrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'breadCrumb'
  }
</script>

<style lang="scss">
  .breadCrumb {
    margin-bottom: 30px;

    .el-breadcrumb__item .el-breadcrumb__inner {
      color: #999;
      font-size: 14px;
    }

    .el-breadcrumb__item:last-child .el-breadcrumb__inner {
      color: #999;
    }
  }
</style>
