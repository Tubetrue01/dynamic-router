<template>
  <div class="createGroup dialog-btn">
    <div>
      <div>
        <span class="user-type">用户类型</span>
        <el-input v-model="userType" placeholder="" maxlength="10"></el-input>
        <span class="tips">不能超过10个汉字</span>
      </div>
      <div class="btns">
        <el-button @click="cancelOrSure(1)">导出</el-button>
        <el-button class="cancel" @click="cancelOrSure(2)">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'createGroup',
    data () {
      return {
        userType: ''
      }
    },
    methods: {
      // 导出或取消按钮
      cancelOrSure (type) {
        // if (type === 1) {
        //   this.$parent.$parent.deleteButton = false
        // }
        this.$parent.$parent.dialogs.createButton = false
      }
    }
  }
</script>
<style lang="scss">
</style>
<style scoped lang="scss">
  @import "../../../styles/css/commodityManagement/dialogBtn";

  .createGroup {
    .el-input {
      width: 206px;
      height: 36px;
    }

    .user-type {
      font-size: 14px;
      color: #999999;
      margin: 0 8px 0 78px;
    }

    .tips {
      font-size: 12px;
      color: #F5A623;
      margin-left: 10px;
    }
  }
</style>
