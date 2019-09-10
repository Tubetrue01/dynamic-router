<template>
  <div class="createOrModifyVideo">
    <div class="input-box name">
      <span class="star">*</span>
      <span class="pro-name">视频名称</span>
      <el-input v-model="input" placeholder=""></el-input>
    </div>
    <div class="input-box">
      <span class="star">*</span>
      <span class="pro-name">视频介绍</span>
      <el-input v-model="input" placeholder=""></el-input>
    </div>
    <div class="input-box">
      <span class="star">*</span>
      <span class="pro-name">上传视频</span>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <div class="common-btns">
      <el-button @click="saveOrCancel(0)">保存</el-button>
      <el-button class="cancel" @click="saveOrCancel(1)">取消</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'createOrModifyVideo',
    data () {
      return {}
    },
    methods: {
      saveOrCancel (type) {
        this.$parent.$parent.videoDialog.newVideo = false
      },
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview (file) {
        console.log(file)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../styles/css/common";

  .createOrModifyVideo {
    .input-box {
      margin-top: 20px;

      .star {
        width: 8px;
        display: inline-block;
        color: #DB1B1B;
        font-weight: 500;
      }

      .pro-name {
        color: #999;
        width: 84px;
        margin: 0 10px 0 4px;
        display: inline-block;
      }

      .el-input, .el-input__inner {
        width: 356px;
      }

      .upload-demo {
        display: inline-block;
      }

      .el-button--primary {
        background: transparent;
        color: #08CFAE;
        width: 164px;
        height: 54px;
        border-radius: 27px;
        border: 1px dashed rgba(8, 207, 174, 1);
      }
    }

    .name {
      .el-input {
        width: 206px;
      }
    }

    .common-btns {
      text-align: center;
    }
  }
</style>
