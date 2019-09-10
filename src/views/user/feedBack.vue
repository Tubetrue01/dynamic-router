<template>
  <div class="feedback">
    <!--    搜索区域-->
    <div class="top-search">
      <!--      搜索框-->
      <div class="search-left">
        <div class="left-top">
          <div class="input-search">
            <span>昵称：</span>
            <el-input v-model="feedbackListSearch.name" placeholder=""></el-input>
          </div>
          <div class="input-search">
            <span>内容：</span>
            <el-input v-model="feedbackListSearch.content" placeholder=""></el-input>
          </div>
          <div class="input-search">
            <span>来源：</span>
            <el-select v-model="feedbackListSearch.source.value" placeholder="全部">
              <el-option
                v-for="item in feedbackListSearch.source"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <!--      搜索按钮-->
      <div class="search-right">
        <el-button type="primary" icon="el-icon-search">查询</el-button>
      </div>
    </div>
    <!--    反馈列表-->
    <div class="product-list">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          prop="date"
          label="头像"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="昵称"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          width="440"
          label="反馈内容">
        </el-table-column>
        <el-table-column
          prop="address"
          width="200"
          label="创建时间">
        </el-table-column>
        <el-table-column
          prop="address"
          width="200"
          label="用户来源">
        </el-table-column>
        <el-table-column
          prop="address"
          label="最新回复">
        </el-table-column>
        <el-table-column
          label="操作">
          <template>
            <el-button type="text" size="small" @click="replyBtn">回复</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--    回复弹框-->
    <div class="reply-dialog">
      <el-dialog
        title="消息回复"
        :visible.sync="replyDialog"
        width="534px"
        :close-on-click-modal="false"
      >
        <DialogReply/>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import DialogReply from './dialogReply'

  export default {
    name: 'feedBack',
    components: {
      DialogReply
    },
    data () {
      return {
        // 搜索区域数据
        feedbackListSearch: {
          name: '',
          content: '',
          source: [
            {
              id: 1,
              value: '全部',
              label: '全部'
            },
            {
              id: 1,
              value: '公众号',
              label: '公众号'
            },
            {
              id: 1,
              value: '微信投诉',
              label: '微信投诉'
            }
          ]
        },
        // 反馈列表
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市'
        }],
        replyDialog: false
      }
    },
    methods: {
      // 回复按钮
      replyBtn () {
        this.replyDialog = true
      }
    }
  }
</script>

<style lang="scss">
  .reply-dialog {
    .el-dialog__header {
      background: #1BDBAD;

      .el-dialog__title {
        color: #fff;
        font-size: 14px;
      }

      .el-dialog__headerbtn .el-dialog__close {
        color: #fff;
      }
    }
  }
</style>
<style scoped lang="scss">
  @import "../../styles/css/commodityManagement/commodity";

  .feedback {
    .top-search .search-right {
      padding: 0;
    }

    .el-input {
      width: auto
    }
  }
</style>
