<template>
  <div class="contentManagement productGroup">
    <div class="management">
      <span>内容管理（单次课）</span>
    </div>
    <div class="product-num">
      商品数：3
    </div>
    <!--    搜索区域     -->
    <div class="top-search">
      <div class="search-list">
        <div class="input-search">
          <el-select v-model="contentSearch.status.value" placeholder="全部状态">
            <el-option
              v-for="item in contentSearch.status"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="search-name">
          <el-input v-model="contentSearch.searchName" placeholder="输入商品名称"></el-input>
        </div>
        <div class="search-btn">
          <el-button type="primary" icon="el-icon-search">查询</el-button>
        </div>
      </div>
    </div>
    <!--    新增商品按钮-->
    <div class="addBtn">
      <el-button type="primary" icon="el-icon-plus" @click="addCommodity">添加商品</el-button>
    </div>
    <!--    商品列表-->
    <div class="product-list">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="date"
          label="商品名称"
          width="190">
        </el-table-column>
        <el-table-column
          prop="name"
          label="状态"
          width="190">
        </el-table-column>
        <el-table-column
          label="操作">
          <template>
            <el-button type="text" size="small">上移</el-button>
            <el-button type="text" size="small">下移</el-button>
            <el-button type="text" size="small" @click="addShowcase">移出橱窗</el-button>
            <el-button type="text" size="small" @click="shareShop">分享</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--    添加商品模态框-->
    <div class="create-dialog">
      <el-dialog
        title="添加商品"
        :visible.sync="contentDialog.addCommodityDialog"
        :close-on-click-modal="false"
        width="949px">
        <AddCommodity/>
      </el-dialog>
    </div>
    <!--    分享模态框   -->
    <div class="share-dialog">
      <el-dialog
        :visible.sync="contentDialog.shareShopDialog"
        :close-on-click-modal="false"
        :show-close="false"
        width="534px">
        <ShareShop/>
      </el-dialog>
    </div>
    <!--    移出或加入橱窗 -->
    <div class="delete-dialod">
      <el-dialog
        :visible.sync="contentDialog.deleteButton"
        width="434px"
        height="187px"
        :show-close="false"
        :close-on-click-modal="false"
      >
        <DeleteGroup :deleteInfo="deleteInfo"/>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  // 商品分组-添加商品
  import AddCommodity from './components/addCommodity'
  // 分享
  import ShareShop from './components/shareShop'
  // 移出橱窗或加入橱窗
  import DeleteGroup from './components/deleteGroup'

  export default {
    name: 'contentManagement',
    components: {
      AddCommodity,
      ShareShop,
      DeleteGroup
    },
    data () {
      return {
        // 搜索数据
        contentSearch: {
          status: [
            {
              id: 1,
              value: '分销中',
              label: '分销中'
            },
            {
              id: 1,
              value: '已上架',
              label: '已上架'
            },
            {
              id: 1,
              value: '未分销',
              label: '未分销'
            }
          ],
          searchName: ''
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
        contentDialog: {
          addCommodityDialog: false, // 添加商品
          deleteButton: false, // 移除或加入橱窗
          shareShopDialog: false // 分享
        },
        // 移除或加入橱窗信息
        deleteInfo: {
          hasGroup: true, // 该分组下有没有商品，true为有
          messageText: '是否移出', // 弹框显示的内容
          type: 'showcase' // 标识类型，确定是哪个页面进入
        }
      }
    },
    methods: {
      // 添加商品
      addCommodity () {
        this.contentDialog.addCommodityDialog = true
      },
      // 分享
      shareShop () {
        this.contentDialog.shareShopDialog = true
      },
      // 加入橱窗
      addShowcase () {
        this.contentDialog.deleteButton = true
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/css/commodityManagement/commodityManagementCommon";

  .create-dialog {
    .el-dialog__header {
      /*width:949px;*/
      /*height:50px;*/
    }

    table {
      tr, th, td {
        border: none;
      }
    }
  }

  .share-dialog {
    .el-dialog {
      .el-dialog__body, .el-dialog__header {
        padding: 0;
      }
    }
  }
</style>
<style scoped lang="scss">
  @import "../../styles/css/commodityManagement/productGroup";
  /*内容管理（单次课）样式其它页面有相同样式，提取到common.scss文件*/
  @import "../../styles/css/common";

  .contentManagement {
    .product-num {
      color: #333333;
      font-size: 14px;
      margin: 20px 0 28px 14px;
    }

    .search-name {
      margin-left: 50px;
    }
  }
</style>
