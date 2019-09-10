<template>
  <div class="header">
    <i class="el-icon-house"></i>
    <span class="line"></span>
    <span class="user-icon"></span>
    <span class="name">姓名</span>
    <i class="el-icon-milk-tea"></i>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped lang="scss">
  .header {
    .el-icon-house {
      width: 18px;
      height: 18px;
    }

    .line {
      width: 1px;
      height: 14px;
      margin: 0 30px;
      border-left: 1px solid rgba(222, 222, 222, 1);
    }

    .user-icon {
      display: inline-block;
      width: 26px;
      height: 26px;
      background: rgba(253, 253, 253, 1);
      border: 2px solid rgba(229, 229, 229, 1);
      border-radius: 50%;
      position: relative;
      top: 10px;
    }

    .name {
      font-size: 14px;
      color: rgba(102, 102, 102, 1);
      margin: 0 40px 0 12px;
    }
  }
</style>
