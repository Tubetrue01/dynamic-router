<template>
  <div class="addCommodity dialog-btn">
    <div class="search-box">
      <el-input v-model="addSearch" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
    </div>
    <!--    主体内容    -->
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="团长名称"
      >
      </el-table-column>
    </el-table>
    <!--    按钮     -->
    <div class="common-btns">
      <el-button @click="cancelOrSure(1)">确定</el-button>
      <el-button class="cancel" @click="cancelOrSure(1)">取消</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'addCommodity',
    data () {
      return {
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
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      // 确定或取消按钮
      cancelOrSure (type) {
        // if (type === 1) {
        //   this.$parent.$parent.deleteButton = false
        // }
        this.$parent.$parent.contentDialog.addCommodityDialog = false
      }
    }
  }
</script>

<style lang="scss">
  .addCommodity {
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

    .el-table__body-wrapper {
      .el-checkbox__inner {
        /*background-color: #fff;*/
        /*border-color: #DEDEDE;*/
      }
    }
  }

  // 修改多选框颜色
  .el-checkbox__input.is-checked .el-checkbox__inner {
    color: #1bdbad;
    background: #1bdbad;
    border-color: #1bdbad;
  }

  .el-checkbox__inner:hover {
    border-color: #1bdbad;
  }
</style>
<style scoped lang="scss">
  @import "../../../styles/css/common";

  .addCommodity {
    padding: 0 62px;

    .search-box {
      margin-bottom: 10px;

      .el-input__icon {
        color: #1bdbad;
      }
    }

    .el-input__icon {
      padding-left: 200px;
      color: #1BDBAD;
    }
  }
</style>
