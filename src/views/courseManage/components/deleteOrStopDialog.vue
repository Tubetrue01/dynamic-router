<template>
  <div class="deleteOrStopDialog dialog-btn">
    <div v-if="deleteInfo.type === 'stop'">
      <p class="before">{{deleteInfo.title}}</p>
      <div class="btns">
        <el-button @click="cancelOrSure(1)">确定</el-button>
      </div>
    </div>
    <div v-if="deleteInfo.type === 'delete'">
      <p class="before">{{deleteInfo.title}}</p>
      <div class="btns">
        <el-button @click="cancelOrSure(1)">确定</el-button>
        <el-button class="cancel" @click="cancelOrSure(2)">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'deleteOrStopDialog',
    props: ['deleteInfo'],
    mounted () {
      this.log(this.deleteInfo)
    },
    methods: {
      // 确定或取消按钮
      cancelOrSure (type) {
        this.$parent.$parent.videoDialog.deleteOrStopVideo = false
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../styles/css/commodityManagement/dialogBtn";

  .deleteOrStopDialog {
    .before {
      text-align: center;
    }
  }
</style>
