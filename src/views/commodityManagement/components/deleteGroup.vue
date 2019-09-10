<template>
  <div class="delete-group dialog-btn">
    <div v-if="deleteInfo.hasGroup">
      <p class="before">{{deleteInfo.messageText}}</p>
      <div class="btns">
        <el-button @click="cancelOrSure(1)">确定</el-button>
      </div>
    </div>
    <div v-else>
      <p class="before">{{deleteInfo.messageText}}</p>
      <div class="btns">
        <el-button @click="cancelOrSure(1)">确定</el-button>
        <el-button class="cancel" @click="cancelOrSure(2)">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'deleteGroup',
    props: ['deleteInfo'],
    mounted () {
    },
    methods: {
      // 确定或取消按钮
      cancelOrSure (type) {
        // if (type === 1) {
        //   this.$parent.$parent.deleteButton = false
        // }
        if (this.deleteInfo.type === 'productDelete') {
          this.$parent.$parent.dialogs.deleteButton = false
        } else if (this.deleteInfo.type === 'showcase') {
          this.$parent.$parent.contentDialog.deleteButton = false
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../styles/css/commodityManagement/dialogBtn";

  .delete-group {
    .before {
      text-align: center;
    }
  }
</style>
