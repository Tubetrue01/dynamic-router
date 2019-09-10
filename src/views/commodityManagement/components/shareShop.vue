<template>
  <div class="shareShop">
    <div class="title-top">
      <span>H5店铺</span>
    </div>
    <div class="shareShop-cont">
      <p class="code-img"></p>
      <p class="code-text">下载二维码</p>
      <div class="copyBtn">
        <el-input :placeholder="shopLink" :disabled="true"></el-input>
        <el-button v-clipboard:error="onError" v-clipboard:copy="shopLink" v-clipboard:success="onCopy">复制</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'shareShop',
    data () {
      return {
        shopLink: 'http://www.google.com'
      }
    },
    methods: {
      onCopy (e) {
        this.log('复制成功')
        this.$parent.$parent.contentDialog.shareShopDialog = false
      },
      // 复制失败
      onError (e) {
        this.log('复制失败')
      }
    }
  }
</script>

<style lang="scss">
  .copyBtn {
    .el-input {
      display: inline-block;
      width: 286px;
      height: 36px;

      .el-input__inner {
        width: 286px;
        height: 36px;
        background: rgba(251, 251, 251, 1);
        border: 1px solid rgba(231, 238, 236, 1);
      }
    }
  }
</style>
<style scoped lang="scss">
  .shareShop {
    font-size: 14px;

    .title-top {
      width: 534px;
      height: 50px;
      border-radius: 8px 8px 0 0;
      background: rgba(27, 219, 173, .2);
      color: #333333;
      text-align: center;
      line-height: 50px;
      font-weight: 400;

      span {
        display: inline-block;
        height: 48px;
        border-bottom: 2px solid #1BDBAD;
      }
    }

    .shareShop-cont {
      height: 304px;
      border-radius: 0 0 8px 8px;
      box-sizing: border-box;

      .code-img {
        width: 110px;
        height: 110px;
        border: 1px solid #EFEFEF;
        margin: 40px auto 20px;
      }

      .code-text {
        color: #1BDBAD;
        text-align: center;
      }

      .copyBtn {
        margin-top: 30px;
        text-align: center;

        .el-button {
          width: 66px;
          height: 36px;
          background: linear-gradient(90deg, rgba(6, 205, 174, 1) 0%, rgba(32, 222, 173, 1) 100%);
          border-radius: 21px;
          padding: 0;
          color: #fff;
          margin-left: 10px;
          border: none;
        }
      }
    }
  }
</style>
