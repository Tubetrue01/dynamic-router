<template>
  <div class="messageDetails">
    <div class="management">
      <span>基本信息</span>
    </div>
    <div class="base-info">
      <p v-for="(val,key) in baseInfo" :key="key">
        <span>{{val.title}}：</span>
        <span>{{val.content}}</span>
      </p>
    </div>
    <div class="management">
      <span>订单记录</span>
    </div>
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
        label="消费内容"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="支付时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="应付金额（元）">
      </el-table-column>
      <el-table-column
        prop="address"
        label="优惠金额（元）">
      </el-table-column>
      <el-table-column
        prop="address"
        label="支付金额（元）">
      </el-table-column>
      <el-table-column
        prop="address"
        label="支付方式">
      </el-table-column>
      <el-table-column
        prop="address"
        label="获得额外奖励">
      </el-table-column>
    </el-table>
    <div class="management">
      <span>储值券消费记录</span>
    </div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="储值券名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="来源"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="金额（元）">
      </el-table-column>
      <el-table-column
        prop="address"
        label="获取时间">
      </el-table-column>
      <el-table-column
        prop="address"
        label="使用方式">
      </el-table-column>
      <el-table-column
        prop="address"
        label="使用范围">
      </el-table-column>
      <el-table-column
        prop="address"
        label="金额（元）">
      </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button type="text" size="small">花费详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="management">
      <span>活动记录</span>
    </div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="活动名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="活动内容"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="活动形式">
      </el-table-column>
      <el-table-column
        prop="address"
        label="开始时间">
      </el-table-column>
      <el-table-column
        prop="address"
        label="结束时间">
      </el-table-column>
    </el-table>
    <div class="management">
      <span>课程记录</span>
    </div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="课程名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="课程时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="累计出勤时长">
      </el-table-column>
      <el-table-column
        prop="address"
        label="累计出勤时长">
      </el-table-column>
      <el-table-column
        prop="address"
        label="出勤率（出勤节数/总节数）">
      </el-table-column>
      <el-table-column
        prop="address"
        label="状态">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'messageDetails',
    data () {
      return {
        baseInfo: [
          {
            title: '用户昵称',
            content: '黑豆'
          },
          {
            title: '性别',
            content: '女'
          },
          {
            title: '年龄',
            content: '23'
          },
          {
            title: '职业',
            content: '宝妈'
          },
          {
            title: '省份',
            content: '山西'
          },
          {
            title: '城市',
            content: '运城'
          },
          {
            title: '手机号',
            content: '12345678'
          },
          {
            title: '微信号',
            content: '12345678'
          }
        ],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>

<style lang="scss">
  .messageDetails {
    .el-table th, .el-table td {
      text-align: center;
    }

    .el-table .has-gutter th, .el-table .has-gutter tr {
      background: #ECECEC;
    }
  }
</style>
<style scoped lang="scss">
  @import "../../styles/css/common";

  .messageDetails {
    .base-info {
      margin: 20px 0 40px;
      padding-left: 10px;

      p {
        display: inline-block;
        color: #333;
        margin-right: 30px;

        &:first-child {
          margin-right: 49px;
        }

        span {
          display: inline-block;

          &:nth-child(1) {
            color: #999;
          }
        }
      }
    }

    .el-table {
      margin: 20px 0 60px;
    }
  }
</style>
