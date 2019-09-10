<template>
  <div class="dialogReply">
    <div class="dialogReply-title">
      <span>反馈内容</span>
      <p>我推荐了课程，为什么没有返现</p>
    </div>
    <div class="img-list">
      <p></p>
      <p></p>
    </div>
    <div class="dialogReply-title">
      <span>联系方式</span>
      <p>15910201993</p>
    </div>
    <div class="dialogReply-title">
      <span>微信号</span>
      <p>15910201993</p>
    </div>
    <div class="dialogReply-title">
      <span>反馈时间</span>
      <p>15910201993</p>
    </div>
    <div class="name-input">
      <el-input placeholder="发送人昵称"></el-input>
    </div>
    <div class="reply-cont">
      <el-input
        type="textarea"
        :rows="2"
        resize="none"
        placeholder="请输入内容"
      >
      </el-input>
    </div>
    <el-button>回复</el-button>
    <div class="history-list">
      <div class="history-title">历史回复 （2）</div>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="date"
          label="回复人"
          width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          label="回复内容"
          width="230">
        </el-table-column>
        <el-table-column
          prop="address"
          label="回复时间">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dialogReply',
    data () {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '2016-05-02'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '2016-05-02'
        }]
      }
    }
  }
</script>

<style lang="scss">
  .dialogReply {
    .reply-cont {
      .el-textarea__inner {
        border-radius: 18px;
        height: 116px;
      }
    }

    .history-list {
      .has-gutter {
        background: #ECECEC !important;
      }
    }
  }
</style>
<style scoped lang="scss">
  .dialogReply {
    font-size: 14px;

    .dialogReply-title {
      margin-bottom: 20px;

      span {
        color: #999;
        margin-right: 10px;
        display: inline-block;
        width: 56px;
      }

      p {
        display: inline-block;
        color: #666;
      }
    }

    .img-list {
      margin: 20px 0;

      p {
        width: 100px;
        height: 100px;
        border-radius: 4px;
        border: 1px solid rgba(231, 238, 236, 1);
        margin-right: 20px;
        display: inline-block;
      }
    }

    .name-input {
      .el-input {
        width: 206px;
      }
    }

    .reply-cont {
      margin-top: 20px;
    }

    .el-button {
      width: 134px;
      height: 38px;
      background: linear-gradient(90deg, rgba(6, 205, 174, 1) 0%, rgba(32, 222, 173, 1) 100%);
      border-radius: 21px;
      border: none;
      color: #fff;
      margin-top: 20px;
    }

    .history-list {
      margin-top: 25px;

      .history-title {
        color: #999;
        margin-bottom: 20px;
      }
    }
  }
</style>
