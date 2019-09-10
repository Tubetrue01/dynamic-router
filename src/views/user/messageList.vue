<template>
  <div class="messageList commodity">
    <!--    搜索区域-->
    <div class="top-search">
      <!--      搜索框-->
      <div class="search-left">
        <div class="left-top">
          <div class="input-search">
            <span>发送类型：</span>
            <el-select v-model="messageListSearch.sendType.value" placeholder="推广员消息">
              <el-option
                v-for="item in messageListSearch.sendType"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="input-search">
            <span>发送人：</span>
            <el-input v-model="messageListSearch.sender" placeholder=""></el-input>
          </div>
          <div class="input-search">
            <span>接收人：</span>
            <el-input v-model="messageListSearch.receiver" placeholder=""></el-input>
          </div>
        </div>
        <div class="left-top">
          <div class="time">
            <span class="create">发送时间：</span>
            <el-date-picker
              v-model="messageListSearch.startTime"
              type="datetime"
              prefix-icon="el-icon-date"
              placeholder="选择日期时间">
            </el-date-picker>
            <span>-</span>
            <el-date-picker
              v-model="messageListSearch.endTime"
              type="datetime"
              prefix-icon="el-icon-date"
              placeholder="选择日期时间">
            </el-date-picker>
          </div>
          <div class="input-search send-status">
            <span>发送状态：</span>
            <el-select v-model="messageListSearch.sendStatus.value" placeholder="发送成功">
              <el-option
                v-for="item in messageListSearch.sendStatus"
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
    <!--    消息列表-->
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
          label="类型"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="接收人"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          width="440"
          label="消息内容">
        </el-table-column>
        <el-table-column
          prop="address"
          width="200"
          label="发送时间">
        </el-table-column>
        <el-table-column
          prop="address"
          label="状态">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'messageList',
    data () {
      return {
        // 搜索数据
        messageListSearch: {
          // 发送类型
          sendType: [
            {
              id: 1,
              value: '推广员消息',
              label: '推广员消息'
            },
            {
              id: 2,
              value: '购课消息',
              label: '购课消息'
            },
            {
              id: 1,
              value: '上课提醒',
              label: '上课提醒'
            },
            {
              id: 2,
              value: '拼团消息',
              label: '拼团消息'
            },
            {
              id: 2,
              value: '返现提醒',
              label: '返现提醒'
            }
          ],
          sender: '', // 发送人
          receiver: '', // 接收人
          sendStatus: [
            {
              id: 1,
              value: '发送成功',
              label: '发送成功'
            },
            {
              id: 2,
              value: '发送失败',
              label: '发送失败'
            }
          ], // 发送状态
          startTime: '',
          endTime: ''
        },
        // 消息列表数据
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
        }]
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/css/commodityManagement/commodityManagementCommon";
</style>
<style scoped lang="scss">
  @import "../../styles/css/commodityManagement/commodity";

  .messageList {
    .send-status {
      margin-left: 50px;
    }
  }
</style>
