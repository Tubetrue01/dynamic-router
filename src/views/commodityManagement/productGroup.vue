<template>
  <div class="productGroup commodity">
    <!--    搜索区域   -->
    <div class="top-search">
      <div class="search-list">
        <div class="input-search">
          <span>分组名称：</span>
          <el-select v-model="groupSearch.groupName.value" placeholder="进行中">
            <el-option
              v-for="item in groupSearch.groupName"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="time">
          <span class="create">创建时间：</span>
          <el-date-picker
            v-model="groupSearch.createTime"
            type="datetime"
            prefix-icon="el-icon-date"
            placeholder="选择日期时间">
          </el-date-picker>
        </div>
        <div class="search-btn">
          <el-button type="primary" icon="el-icon-search">查询</el-button>
        </div>
      </div>
    </div>
    <!--    新增商品按钮-->
    <div class="addBtn">
      <el-button type="primary" icon="el-icon-plus" @click="createBtn(1)">新建商品分组</el-button>
    </div>
    <!--    商品列表-->
    <div class="product-list">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="date"
          label="分组名称"
          width="190">
        </el-table-column>
        <el-table-column
          prop="name"
          label="商品数"
          width="190">
        </el-table-column>
        <el-table-column
          prop="address"
          width="390"
          label="创建时间">
        </el-table-column>
        <el-table-column
          label="操作">
          <template>
            <router-link :to="{path: '/commodityManagement/productGroup/contentManagement'}">
              <el-button type="text" size="small">内容管理</el-button>
            </router-link>
            <el-button type="text" size="small" @click="createBtn(2)">编辑</el-button>
            <el-button type="text" size="small" @click="deleteBtn">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--    删除按钮弹框   -->
    <div class="delete-dialod">
      <el-dialog
        :visible.sync="dialogs.deleteButton"
        width="434px"
        height="187px"
        :show-close="false"
        :close-on-click-modal="false"
      >
        <DeleteGroup :deleteInfo="deleteInfo"/>
      </el-dialog>
    </div>
    <!--    新建   -->
    <div class="create-dialog">
      <el-dialog
        width="534px"
        :title="dialogs.createOrChange"
        :visible.sync="dialogs.createButton"
        :close-on-click-modal="false"
      >
        <CreateGroup/>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  // 删除分组
  import DeleteGroup from './components/deleteGroup'
  // 新建分组，编辑
  import CreateGroup from './components/createGroup'

  export default {
    name: 'productGroup',
    components: {
      DeleteGroup,
      CreateGroup
    },
    data () {
      return {
        // 搜索数据
        groupSearch: {
          groupName: [
            {
              id: 1,
              value: '进行中',
              label: '进行中'
            }
          ],
          createTime: ''
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区'
        }],
        dialogs: {
          deleteButton: false, // 删除按钮
          createButton: false, // 删除按钮
          createOrChange: '' // 删除按钮
        },
        // 点击删除按钮，向子组件传值，以此判断弹框显示内容
        deleteInfo: {
          hasGroup: false, // 该分组下有没有商品，true为有
          messageText: '请先清理该分组下的商品再进行删除', // 弹框显示的内容
          type: 'productDelete' // 标识类型，确定是哪个页面进入
        }
      }
    },
    methods: {
      deleteBtn () {
        this.dialogs.deleteButton = true
      },
      createBtn (type) {
        this.dialogs.createButton = true
        if (type === 1) {
          this.dialogs.createOrChange = '新建'
        } else {
          this.dialogs.createOrChange = '编辑'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/css/commodityManagement/commodityManagementCommon";
</style>
<style scoped lang="scss">
  @import "../../styles/css/commodityManagement/productGroup";
</style>
