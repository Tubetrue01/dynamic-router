<template>
  <div class="addSubjectDialog">
    <div class="tabs">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="视频" name="first">
          <div class="management">
            <span>视频</span>
          </div>
          <div class="search-box">
            <el-input v-model="addSearch" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
          </div>
          <!--    主体内容    -->
          <el-table
            :data="tableData"
            stripe
            style="width: 100%"
          >
            <el-table-column
              type="selection"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="视频名称"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="状态"
            >
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="直播" name="second">
          <div class="management">
            <span>直播</span>
          </div>
          <div class="search-box">
            <el-input v-model="addSearch" placeholder="请输入名称" prefix-icon="el-icon-search"></el-input>
          </div>
          <!--    主体内容    -->
          <el-table
            :data="tableData"
            stripe
            style="width: 100%"
          >
            <el-table-column
              type="selection"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="视频名称"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="状态"
            >
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!--    按钮     -->
    <div class="common-btns">
      <el-button @click="cancelOrSure(1)">确定</el-button>
      <el-button class="cancel" @click="cancelOrSure(1)">取消</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'addSubjectDialog',
    data () {
      return {
        activeName: 'first',
        addSearch: '',
        tableData: [{
          name: '王小虎'
        }, {
          name: '王小虎'
        }, {
          name: '王小虎'
        }, {
          name: '王小虎'
        }, {
          name: '王小虎'
        }, {
          name: '王小虎'
        }, {
          name: '王小虎'
        }]
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      },
      // 确定或取消按钮
      cancelOrSure (type) {
        // if (type === 1) {
        //   this.$parent.$parent.deleteButton = false
        // }
        this.$parent.$parent.addSubjectCourseDialog = false
      }
    }
  }
</script>

<style lang="scss">
  .addSubjectDialog {
    .tabs {
      .el-tabs__item.is-active {
        color: #1BDBAD;
      }

      .el-tabs__item {
        color: #666;
      }

      .el-tabs__active-bar {
        background: #1BDBAD;
        height: 4px;
      }
    }

    .search-box {
      .el-input__icon {
        color: #1bdbad;
        position: relative;
        left: 173px;
      }
    }

    .el-table__header {
      .has-gutter {
        color: #666666;
      }

      .el-checkbox__inner {
        border: none !important;
      }

      .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        background: #fff;
      }
    }
  }
</style>
<style scoped lang="scss">
  @import "../../../styles/css/common";

  .addSubjectDialog {
    padding-bottom: 86px;

    .search-box {
      margin: 20px 0 10px 0;
      text-align: right;

      .el-input {
        width: 206px;
      }

      .el-input__icon {
        color: #1bdbad;
      }
    }

    .el-input__icon {
      padding-left: 200px;
      color: #1BDBAD;
    }

    .common-btns {
      text-align: center;
    }
  }
</style>
