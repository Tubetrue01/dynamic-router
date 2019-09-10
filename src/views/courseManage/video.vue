<template>
  <div class="video productGroup">
    <!--    搜索区域   -->
    <div class="top-search">
      <div class="search-list">
        <div class="input-search">
          <span>视频名称：</span>
          <el-input v-model="videoSearch.videoName" placeholder="请输入专题名称"></el-input>
        </div>
        <div class="time">
          <span class="create">视频状态：</span>
          <el-select v-model="videoSearch.videoStatus.value" placeholder="请选择">
            <el-option
              v-for="item in videoSearch.videoStatus"
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
    <!--    新建视频按钮-->
    <div class="addBtn">
      <fragment v-for="(item, index) in allButton" :key="index">
        <el-button type="primary" icon="el-icon-plus" @click="addVideoBtn(0)" v-if="item.isTop">{{ item.meta.title }}
        </el-button>
      </fragment>

    </div>

    <!--    视频列表-->
    <div class="product-list">
      <el-table
        :data="videoList"
        stripe
        style="width: 100%">
        <el-table-column
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          prop="date"
          label="视频名称"
          width="190">
        </el-table-column>
        <el-table-column
          prop="name"
          label="创建时间"
          width="190">
        </el-table-column>
        <el-table-column
          prop="address"
          width="390"
          label="视频状态">
        </el-table-column>

        <el-table-column label="操作">
          <template>
            <a v-for="(item, index) in allButton" :title="item.meta.title" :key="index" href="javascript:undefined">
              <i :class="`iconfont icon-${item.icon} mr12`" v-if="!item.isTop" @click="buttonClick(item.path)"></i>
            </a>

            <!--            <el-button type="text" size="small" @click="addVideoBtn(1)">编辑</el-button>-->
            <!--            <el-button type="text" size="small" @click="stopOrdeleteBtn(0)">停用</el-button>-->
            <!--            <el-button type="text" size="small" @click="stopOrdeleteBtn(1)">删除</el-button>-->
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--    新建视频弹框-->
    <div class="create-video">
      <el-dialog
        :title="videoDialog.createOrMOdifyTitle"
        :visible.sync="videoDialog.newVideo"
        :close-on-click-modal="false"
        width="534px"
      >
        <CreateOrModifyVideo/>
      </el-dialog>
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

    <!-- 分配权限对话框 -->
    <el-dialog title="权限设置" width="27%" ref="currentRole" :visible.sync="dialogVisible" class="update-permission" @close="closePermission">
      <div class="diaTitle">
        <div class="roleName">
          角色名称：
          <b> 管理员 </b>
        </div>
      </div>
      <div class="clearfix" v-loading="roleLoading">
        <div class="formPermission">
          <h3>表单权限</h3>
          <el-tree
            class="formContent border"
            :data="treeData"
            show-checkbox
            :default-expand-all="false"
            node-key="menuId"
            ref="tree"
            highlight-current
            :default-checked-keys="checkedList"
            :props="defaultProps"
          ></el-tree>
        </div>
      </div>
      <div slot="footer" class="dialog-footer" style="text-align: center">
        <el-button class="save" @click="addRoleSubmit" size="small">确 定</el-button>
        <el-button class="cancel" @click="closePermission" size="small">取 消</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  // 新建或修改视频弹框
  import CreateOrModifyVideo from './components/createOrModifyVideo'
  // 删除或停用弹框
  import DeleteOrStopDialog from './components/deleteOrStopDialog'
  import { clearStorage, convert, getButtonsOfPage } from '../../utils/utils'
  import { getAllPermission, getRolePermission, updatePermission } from '../../api/user-api'
  import { role, user } from '../../api/test-api'
  import { StatusCode } from '../../utils/constant'

  export default {
    name: 'video',
    data () {
      return {
        // 搜索区域数据
        videoSearch: {
          videoName: '',
          videoStatus: [
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
        videoList: [
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
          newVideo: false, // 新建或编辑弹框
          createOrMOdifyTitle: '', // 新建或编辑弹框的title
          deleteOrStopVideo: false, // 删除或停用弹框
          deleteInfo: {
            title: '',
            type: '' // 删除delete，停用stop
          }
        },

        // 分配角色
        dialogVisible: false,
        defaultProps: {
          children: 'children',
          label: 'name'
        },
        checkedList: [],
        treeData: [],
        checkList: [],
        selectMachine: true,
        currentButton: [],
        roleLoading: false,
        searchChange: false,
        currentRoleId: null, // 当前的角色id
        allButton: [], // 所有按钮权限
        currentRoleName: '', // 当前用户
        getButtonsOfPage
      }
    },
    components: {
      CreateOrModifyVideo,
      DeleteOrStopDialog
    },
    mounted () {
      // 获取按钮权限
      this.getButtonsOfPage()
      // this.test()
    },

    methods: {
      async test () {
        let a = await user()
        this.log('a : ', a)
        let b = await role
        this.log('b : ', b)
      },

      userTest () {
        return convert(user, {})
      },

      roleTest () {
        return convert(role)
      },
      // 新建视频或编辑视频
      addVideoBtn (type) {
        this.videoDialog.newVideo = true
        if (type === 0) {
          // 新建视频
          this.videoDialog.createOrMOdifyTitle = '新建视频'
        } else {
          // 编辑视频
          this.videoDialog.createOrMOdifyTitle = '编辑视频'
        }
      },
      // 停用或删除按钮
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
      },

      buttonClick (val) {
        switch (val) {
          case 'updatePermission':
            this.handleShowRightsDialog()
            break
        }
      },
      // 获取权限弹框
      handleShowRightsDialog () {
        // 获取已有权限的参数
        const data = {
          id: 1
        }
        // 获取全部权限以及已有的权限
        this.getAllPermission(data)
      },
      // 获取全部权限
      getAllPermission (data) {
        getAllPermission({}).then(res => {
          this.treeData = res.dataList
          this.roleLoading = true
          getRolePermission({ ...data }).then(res => {
            // 处理当前已有权限
            if (res.dataList) {
              this.getSelected(res.dataList, this.checkedList)
              this.roleLoading = false
              this.dialogVisible = true
            }
          }).catch(() => {
            this.roleLoading = false
          })
        })
      },
      getSelected (roles, arr) {
        roles.forEach(role => {
          if (role.children) {
            this.getSelected(role.children, arr)
          } else {
            arr.push(role.menuId)
          }
        })
        return arr
      },
      // 关闭编辑权限
      closePermission () {
        this.dialogVisible = false
        this.currentRoleId = null
        // this.checkedList = []
      },
      // 修改权限提交
      addRoleSubmit () {
        const childPer = this.$refs.tree.getCheckedKeys()
        const parentPer = this.$refs.tree.getHalfCheckedKeys()
        const selectPermission = [...childPer, ...parentPer]
        // 将数组中的id转为String
        const newSelectPer = []
        for (const i in selectPermission) {
          newSelectPer.push(selectPermission[i].toString())
        }
        const data = {
          id: 1,
          permissionList: newSelectPer,
          enableMerchant: this.selectMachine.toString()
        }
        // 修改权限提交
        updatePermission({ ...data }).then(res => {
          if (res.code === StatusCode.Success) {
            this.closePermission()
            // 判断是否修改当前角色的权限
            const saveRoleId = 1
            if (String(data.id) === String(saveRoleId)) {
              clearStorage()
              this.$router.go(0)
            } else {
              this.reload()
            }
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .video {
    /*新建视频弹框样式*/
    .create-video {
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
  }
</style>
<style scoped lang="scss">
  @import "../../styles/css/commodityManagement/productGroup";

  .video {
    .el-input {
      width: auto;
    }

    .addBtn .el-button.el-button--primary {
      width: 112px;
      height: 32px;
    }
  }

  .roleDialog {
    .el-dialog__header {
      font-weight: bold;
    }
  }

  .update-permission {
    .el-dialog__body {
      padding: 0;

      .diaTitle {
        height: 45px;
        line-height: 45px;
        width: 100%;
        display: flex;
        justify-content: space-around;

        .roleName {
          display: inline-block;
        }
      }
    }
  }

  .formPermission,
  .btnPermission {
    width: 75%;
    text-align: center;
    height: 500px;
    box-sizing: border-box;
    margin: 0 auto;
  }

  .formContent {
    padding: 20px 70px;
    height: 90%;
    box-sizing: border-box;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: rgba(0, 0, 0, 0.2);
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      border-radius: 0;
      background: rgba(0, 0, 0, 0.1);
    }
  }

  .btnPermission {
    margin-left: 20px;

    .btn-box {
      width: 100%;
      height: 90%;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
      text-align: left !important;
    }
  }

  .btnContent {
    height: 260px;
    padding: 25px;

    .el-checkbox {
      margin-bottom: 5px;
    }
  }

  .clearfix {
    overflow: hidden;
  }
</style>
