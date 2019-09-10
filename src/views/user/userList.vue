<template>
  <div class="userList commodity">
    <!--    搜索区域-->
    <div class="top-search">
      <!--      搜索框-->
      <div class="search-left">
        <div class="left-top">
          <div class="input-search">
            <span>用户类型：</span>
            <el-select v-model="userListSearch.userType.value" placeholder="已上架">
              <el-option
                v-for="item in userListSearch.userType"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="input-search">
            <span>用户昵称：</span>
            <el-input v-model="userListSearch.username" placeholder="请输入关键字"></el-input>
          </div>
          <div class="input-search">
            <span>手机号：</span>
            <el-input v-model="userListSearch.userPhone" placeholder="请输入手机号"></el-input>
          </div>
        </div>
        <div class="left-top">
          <div class="input-search">
            <span>用户来源：</span>
            <el-select v-model="userListSearch.userSource.value" placeholder="已上架">
              <el-option
                v-for="item in userListSearch.userSource"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="time">
            <span class="create">创建时间：</span>
            <el-date-picker
              v-model="userListSearch.startTime"
              type="datetime"
              prefix-icon="el-icon-date"
              placeholder="选择日期时间">
            </el-date-picker>
            <span>-</span>
            <el-date-picker
              v-model="userListSearch.endTime"
              type="datetime"
              prefix-icon="el-icon-date"
              placeholder="选择日期时间">
            </el-date-picker>
          </div>
        </div>
      </div>
      <!--      搜索按钮-->
      <div class="search-right">
        <el-button type="primary" icon="el-icon-search">查询</el-button>
        <el-button type="primary" icon="el-icon-search" class="exportBtn">导出</el-button>
      </div>
    </div>
    <!--    用户列表-->
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
          width="240"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="昵称"
          width="240"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          width="240"
          label="手机号">
        </el-table-column>
        <el-table-column
          prop="address"
          width="240"
          label="创建时间">
        </el-table-column>
        <el-table-column
          prop="address"
          width="240"
          label="用户来源">
        </el-table-column>
        <el-table-column
          label="操作">
          <template>
            <router-link :to="{path: '/user/messageDetails'}">
              <el-button type="text" size="small">详情</el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'userList',
    data () {
      return {
        // 搜索数据
        userListSearch: {
          // 用户类型
          userType: [
            {
              id: 1,
              value: '已消费',
              label: '已消费'
            },
            {
              id: 2,
              value: '未消费',
              label: '未消费'
            }
          ],
          username: '', // 用户昵称
          userPhone: '', // 用户手机号
          userSource: [
            {
              id: 1,
              value: '邀请',
              label: '邀请'
            },
            {
              id: 2,
              value: '拼团',
              label: '拼团'
            },
            {
              id: 3,
              value: '直接购买',
              label: '直接购买'
            }
          ], // 用户来源
          startTime: '',
          endTime: ''
        },
        // 用户列表数据
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

  .userList {
    .search-right {
      .exportBtn {
        background: #fff !important;
        color: #08CFAE;
        border: 1px solid #08CFAE !important;
      }
    }
  }
</style>
