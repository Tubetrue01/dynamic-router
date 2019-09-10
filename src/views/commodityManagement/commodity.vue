<template lang="html">
  <div class="commodity">
    <!--    搜索区域    -->
    <div class="top-search">
      <!--      搜索框-->
      <div class="search-left">
        <div class="left-top">
          <div class="input-search">
            <span>商品名称：</span>
            <el-input v-model="commoditySearch.productName" placeholder="请输入商品名称"></el-input>
          </div>
          <div class="input-search">
            <span>商品分组：</span>
            <el-select v-model="commoditySearch.productGroup.value" placeholder="系列课">
              <el-option
                v-for="item in commoditySearch.productGroup"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="input-search">
            <span>商品状态：</span>
            <el-select v-model="commoditySearch.productStatus.value" placeholder="已上架">
              <el-option
                v-for="item in commoditySearch.productStatus"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="left-top">
          <div class="input-search">
            <span>推广状态：</span>
            <el-select v-model="commoditySearch.promotionStatus.value" placeholder="推广中">
              <el-option
                v-for="item in commoditySearch.promotionStatus"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="time">
            <span class="create">创建时间：</span>
            <el-date-picker
              v-model="commoditySearch.startTime"
              type="datetime"
              prefix-icon="el-icon-date"
              placeholder="选择日期时间">
            </el-date-picker>
            <span>-</span>
            <el-date-picker
              v-model="commoditySearch.endTime"
              type="datetime"
              prefix-icon="el-icon-date"
              placeholder="选择日期时间">
            </el-date-picker>
          </div>
        </div>
      </div>
      <!--      搜索按钮-->
      <div class="search-right">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
    </div>
    <!--    新增商品按钮-->
    <div class="addBtn">
      <router-link :to="{path: '/commodityManagement/commodity/addProduct'}">
        <el-button type="primary" icon="el-icon-plus">新增商品</el-button>
      </router-link>
    </div>
    <!--    商品列表-->
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
          label="商品图片"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="商品名称"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="创建时间">
        </el-table-column>
        <el-table-column
          prop="address"
          label="开课时间">
        </el-table-column>
        <el-table-column
          prop="address"
          label="商品分组">
        </el-table-column>
        <el-table-column
          prop="address"
          label="添加内容">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="bottom">
              <p> {{ scope.row.name }}</p>
              <p> {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="价格（元）">
        </el-table-column>
        <el-table-column
          prop="address"
          label="商品状态">
        </el-table-column>
        <el-table-column
          prop="address"
          label="推广状态">
        </el-table-column>
        <el-table-column
          label="操作">
          <template>
            <el-button type="text" size="small">下架</el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pages">
      <el-pagination
        small
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'commodity',
    data () {
      return {
        // 头部搜索部分数据
        commoditySearch: {
          productName: '', // 商品名称
          productGroup: [
            {
              value: '1',
              label: '单次课'
            },
            {
              value: '2',
              label: '系列课'
            },
            {
              value: '3',
              label: '训练营'
            }
          ], // 商品分组
          productStatus: [
            {
              value: '1',
              label: '已上架'
            },
            {
              value: '2',
              label: '已下架'
            }
          ], // 商品状态
          promotionStatus: [
            {
              value: '1',
              label: '推广中'
            },
            {
              value: '2',
              label: '未推广'
            }
          ], // 推广状态
          startTime: '', // 创建时间
          endTime: '' // 创建时间
        },
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
<style lang="scss" scoped>
  @import "../../styles/css/commodityManagement/commodity";

  .el-tag {
    color: #666;
    border: none;
    background: transparent;
  }

  .product-list {
    .add-float {
      display: flex;

      .img {
        width: 80px;
        height: 60px;
        background: #D8D8D8;
      }
    }
  }
</style>
