<template>
  <div class="subject productGroup">
    <!--    搜索区域   -->
    <div class="top-search">
      <div class="search-list">
        <div class="input-search">
          <span>专题名称：</span>
          <el-input v-model="subjectSearch.subjectName" placeholder="请输入专题名称"></el-input>
        </div>
        <div class="time">
          <span class="create">专题状态：</span>
          <el-select v-model="subjectSearch.subjectStatus.value" placeholder="请选择">
            <el-option
              v-for="item in subjectSearch.subjectStatus"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="search-btn">
          <el-button type="primary" icon="el-icon-search">查询</el-button>
        </div>
      </div>
    </div>
    <!--    新建专题按钮-->
    <div class="addBtn">
      <router-link :to="{path: '/courseManage/subject/addSubject'}">
        <el-button type="primary" icon="el-icon-plus">新建专题</el-button>
      </router-link>
    </div>
    <!--    专题列表-->
    <div class="product-list">
      <el-table
        :data="subjectList"
        stripe
        style="width: 100%">
        <el-table-column
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          prop="date"
          label="专题名称"
          width="190">
        </el-table-column>
        <el-table-column
          prop="name"
          label="创建时间"
          width="190">
        </el-table-column>
        <el-table-column
          prop="address"
          width="270"
          label="关联内容">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="bottom">
              <p>
                <span>{{ scope.row.name }}：</span>
                <span>{{ scope.row.address }}</span>
                <span style="margin-left: 67px">{{ scope.row.address }}</span>
              </p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          width="390"
          label="专题状态">
        </el-table-column>
        <el-table-column
          label="操作">
          <template>
            <router-link :to="{path: '/courseManage/subject/addSubject'}">
              <el-button type="text" size="small">编辑</el-button>
            </router-link>
            <el-button type="text" size="small" @click="stopOrdeleteBtn(0)">停用</el-button>
            <el-button type="text" size="small" @click="stopOrdeleteBtn(1)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--    停用或删除-->
    <el-dialog
      :visible.sync="videoDialog.deleteOrStopVideo"
      :close-on-click-modal="false"
      :show-close="false"
      width="434px"
    >
      <DeleteOrStopDialog :deleteInfo="videoDialog.deleteInfo"/>
    </el-dialog>
  </div>
</template>

<script>
  // 删除或停用弹框
  import DeleteOrStopDialog from './components/deleteOrStopDialog'

  export default {
    name: 'subject',
    components: {
      DeleteOrStopDialog
    },
    data () {
      return {
        // 搜索区域数据
        subjectSearch: {
          subjectName: '',
          subjectStatus: [
            {
              id: 1,
              value: '全部',
              label: '全部'
            },
            {
              id: 2,
              value: '启用',
              label: '启用'
            },
            {
              id: 3,
              value: '停用',
              label: '停用'
            }
          ]
        },
        // 专题列表
        subjectList: [
          {
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
          }
        ],
        videoDialog: {
          deleteOrStopVideo: false, // 删除或停用弹框
          deleteInfo: {
            title: '',
            type: '' // 删除delete，停用stop
          }
        }
      }
    },
    mounted () {
      console.log('vedio : ', this.$route)

    },
    methods: {
      stopOrdeleteBtn (type) {
        if (type === 0) {
          // 停用
          this.videoDialog.deleteInfo.title = '请先下架关联商品，才可以进行停用'
          this.videoDialog.deleteInfo.type = 'stop'
        } else {
          // 删除 (要判断是否有关联商品)
          // TODO
          this.videoDialog.deleteInfo.title = '课程删除之后无法进行恢复，确认删除？'
          this.videoDialog.deleteInfo.type = 'delete'
        }
        this.videoDialog.deleteOrStopVideo = true
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../styles/css/commodityManagement/productGroup";

  .subject {
    .el-input {
      width: auto;
    }

    .addBtn .el-button.el-button--primary {
      width: 112px;
      height: 32px;
    }

    .el-tag {
      background: transparent;
      color: #666;
      border-width: 0;
      font-size: 14px;
    }
  }
</style>
