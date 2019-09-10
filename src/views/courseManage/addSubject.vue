<template>
  <div class="addSubject">
    <div class="management">
      <span>基本信息</span>
    </div>
    <div class="base-info">
      <div class="input-box subject-name">
        <span class="star">*</span>
        <span class="pro-name">专题名称</span>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
      <div class="input-box">
        <span class="star">*</span>
        <span class="pro-name">专题介绍</span>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="management">
      <span>课程设置</span>
    </div>
    <div class="course">
      <div class="add-course">
        <el-button icon="el-icon-circle-plus-outline" @click="addSubjectCourse">添加课程</el-button>
      </div>
      <div class="add-courseList">
        <div class="list">
          <p>升级包健康</p>
          <p>
            <span>视频</span>
            <span><i class="el-icon-close"></i></span>
          </p>
        </div>
      </div>
    </div>
    <div class="common-btns">
      <el-button>保存</el-button>
      <el-button class="cancel">取消</el-button>
    </div>
    <!--    添加课程弹框-->
    <el-dialog
      title="添加专题内容"
      :visible.sync="addSubjectCourseDialog"
      :close-on-click-modal="false"
      width="950px"
    >
      <AddSubjectDialog/>
    </el-dialog>
  </div>
</template>

<script>
  import AddSubjectDialog from './components/addSubjectDialog'

  export default {
    name: 'addSubject',
    data () {
      return {
        addSubjectCourseDialog: false
      }
    },
    components: {
      AddSubjectDialog
    },
    methods: {
      addSubjectCourse () {
        this.addSubjectCourseDialog = true
      }
    }
  }
</script>

<style lang="scss">
  .addSubject {
    /*模态框头部样式*/
    .el-dialog {
      border-radius: 8px;

      .el-dialog__header {
        background: rgba(27, 219, 173, 1);
        border-radius: 8px 8px 0 0;
        box-sizing: border-box;
        height: 50px;

        .el-dialog__title {
          color: #fff;
          font-size: 14px;
        }
      }

      .el-dialog__headerbtn .el-dialog__close {
        color: #fff;
      }

      .el-dialog__header {
        padding: 15px 20px;
      }
    }
  }
</style>
<style scoped lang="scss">
  @import "../../styles/css/common";

  .addSubject {
    font-size: 14px;

    .base-info {
      margin: 30px 0 40px 0;
      padding-left: 70px;
      box-sizing: border-box;

      .input-box {
        margin-bottom: 20px;

        .star {
          width: 8px;
          display: inline-block;
          color: #DB1B1B;
          font-weight: 500;
        }

        .pro-name {
          color: #999999;
          margin-right: 10px;
        }

        .el-input {
          width: 860px;
        }
      }

      .subject-name {
        .el-input {
          width: 206px;
        }
      }
    }

    .course {
      .add-course {
        padding: 30px 0 20px 56px;

        .el-button {
          width: 164px;
          height: 54px;
          border-radius: 27px;
          color: #08CFAE;
          border: 1px dashed rgba(8, 207, 174, 1);

          &:hover {
            background: transparent;
          }
        }
      }

      .add-courseList {
        padding-left: 54px;
        box-sizing: border-box;

        .list {
          width: 648px;
          height: 56px;
          background: rgba(251, 251, 251, 1);
          color: #666666;
          padding: 18px 13px 18px 20px;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;

          p {
            display: inline-block;

            span:nth-child(1) {
              margin-right: 30px;
            }
          }
        }
      }
    }

    .common-btns {
      padding-left: 229px;
      box-sizing: border-box;
    }
  }
</style>
