<template>
  <div class="addProduct">
    <div class="management">
      <span>基本信息</span>
    </div>
    <div class="addProduct-cont">
      <div class="input-box">
        <span class="star">*</span>
        <span class="pro-name">商品名称</span>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
      <div class="input-box">
        <span class="star">*</span>
        <span class="pro-name">商品介绍</span>
        <el-input v-model="input" placeholder="请输入内容" class="product-introduction"></el-input>
      </div>
      <div class="input-box">
        <span class="star">*</span>
        <span class="pro-name">封面图</span>
        <div class="cover-picture">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
          <div class="cover-imgAndBtn">
            <!--            <div class="cover-img"></div>-->

          </div>
          <!--          <div class="small-list">-->
          <!--            <div class="list-img"></div>-->
          <!--            <p>列表缩略图</p>-->
          <!--          </div>-->
        </div>
      </div>
      <div class="input-box">
        <span class="pro-name">商品详情</span>
        <div class="text-box">
          <EditorBar v-model="editor.info" :isClear="isClear"></EditorBar>
        </div>
      </div>
    </div>
    <div class="management">
      <span>商品信息</span>
    </div>
    <div class="addProduct-cont">
      <div class="input-box">
        <span class="star">*</span>
        <span class="pro-name">价格设置</span>
        <el-radio-group v-model="commodityInfo.price">
          <el-radio :label="7">付费</el-radio>
          <el-radio :label="8">免费</el-radio>
        </el-radio-group>
        <div class="times">
          <p class="price-choose">
            <span>价格线</span>
            <el-input v-model="commodityInfo.priceLine" placeholder="请输入内容"></el-input>
          </p>
          <p class="price-choose">
            <span>售价</span>
            <el-input v-model="commodityInfo.priceSell" placeholder="请输入内容"></el-input>
          </p>
        </div>
      </div>
      <div class="input-box">
        <span class="star">*</span>
        <span class="pro-name">设置商品分组</span>
        <el-select v-model="commodityInfo.groups.value" placeholder="请选择">
          <el-option
            v-for="item in commodityInfo.groups"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="input-box">
        <span class="star">*</span>
        <span class="pro-name">添加商品内容</span>
        <div class="add-cont">
          <el-button icon="el-icon-circle-plus-outline" class="addCont-btn" @click="addProductContent">添加内容</el-button>
          <div class="add-list">
            <div class="list">
              <div class="left">
                <p class="img"></p>
                <div class="text">
                  <p class="list-name">健康包管理</p>
                  <p class="list-price">¥12000</p>
                </div>
              </div>
              <div class="right">
                <span>视频</span>
                <i class="el-icon-close"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="input-box">
        <span class="star"></span>
        <span class="pro-name">开课时间</span>
        <el-radio-group v-model="commodityInfo.classTime">
          <el-radio :label="4">文字</el-radio>
          <el-radio :label="5">时间段</el-radio>
        </el-radio-group>
        <div class="times">
          <el-input class="class-timeText"></el-input>
          <el-date-picker
            v-model="commodityInfo.addedStartTime"
            type="datetime"
            prefix-icon="el-icon-date"
            placeholder="选择日期时间">
          </el-date-picker>
          <span class="line">-</span>
          <el-date-picker
            v-model="commodityInfo.addedEndTime"
            type="datetime"
            prefix-icon="el-icon-date"
            placeholder="选择日期时间">
          </el-date-picker>
        </div>
      </div>
      <div class="input-box">
        <span class="star"></span>
        <span class="pro-name">设置推广佣金</span>
        <el-radio-group v-model="commodityInfo.commission">
          <el-radio :label="1">使用默认比例</el-radio>
          <el-radio :label="2">自定义比例</el-radio>
        </el-radio-group>
        <div class="cont">
          <div class="btn">
            <el-button>新增</el-button>
          </div>
          <el-select v-model="commodityInfo.promoterLevel.value" placeholder="推广员级别">
            <el-option
              v-for="item in commodityInfo.promoterLevel"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-input v-model="input" placeholder="直接推广佣金比例" class="proportion-input"></el-input>
          <el-input v-model="input" placeholder="间接推广佣金比例"></el-input>
        </div>
      </div>
      <div class="input-box">
        <span class="star">*</span>
        <span class="pro-name">上架设置</span>
        <div class="added-time">
          <el-radio-group v-model="commodityInfo.addedStatus">
            <el-radio :label="3">立即上架</el-radio>
            <el-radio :label="6">暂不上架</el-radio>
            <el-radio :label="9">定时上架</el-radio>
          </el-radio-group>
        </div>
        <div class="times">
          <el-date-picker
            v-model="commodityInfo.addedStartTime"
            type="datetime"
            prefix-icon="el-icon-date"
            placeholder="选择日期时间">
          </el-date-picker>
          <span class="line">-</span>
          <el-date-picker
            v-model="commodityInfo.addedEndTime"
            type="datetime"
            prefix-icon="el-icon-date"
            placeholder="选择日期时间">
          </el-date-picker>
        </div>
      </div>
    </div>
    <div class="common-btns">
      <el-button>保存</el-button>
      <el-button class="cancel">取消</el-button>
    </div>
    <el-dialog
      :visible.sync="addProductContentDialog"
      title="添加商品内容"
      :close-on-click-modal="false"
      width="950px">
      <AddProductContentDialog/>
    </el-dialog>
  </div>
</template>

<script>
  // 商品信息-添加商品内容
  import AddProductContentDialog from './components/addProductContentDialog'
  // 富文本编辑器
  import EditorBar from './components/editorBar'

  export default {
    name: 'addProduct',
    data () {
      return {
        // 基本信息
        baseInfo: {},
        // 商品信息
        commodityInfo: {
          price: '', // 价格设置
          priceLine: '', // 价格线
          priceSell: '', // 售价
          groups: [
            {
              value: '单次课',
              label: '单次课'
            },
            {
              value: '系列课',
              label: '系列课'
            },
            {
              value: '训练营',
              label: '训练营'
            }
          ], // 商品分组
          promoterLevel: [
            {
              value: '推广员级别',
              label: '推广员级别'
            },
            {
              value: 'A',
              label: 'A'
            },
            {
              value: 'B',
              label: 'B'
            },
            {
              value: 'C',
              label: 'C'
            },
            {
              value: 'D',
              label: 'D'
            }
          ], // 推广员级别
          commission: '', // 佣金
          addedStatus: '9', // 上架设置（立即上架，暂不上架，定时上架）
          addedStartTime: '', // 上架设置-时间
          addedEndTime: '' // 上架设置-时间
        },
        // 添加商品内容弹框
        addProductContentDialog: false,
        editor: {
          info: ''
        },
        isClear: false,
        fileList: []
      }
    },
    components: {
      AddProductContentDialog,
      EditorBar
    },
    methods: {
      addProductContent () {
        this.addProductContentDialog = true
      },
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview (file) {
        console.log(file)
      }
    }
  }
</script>

<style lang="scss">
  .addProduct {
    .el-icon-date {
      position: relative;
      left: 172px;
    }

    /*单选按钮颜色*/
    .el-radio__input.is-checked .el-radio__inner {
      border-color: #1BDBAD;
      background: #1BDBAD;
    }

    .el-radio__inner:hover {
      border-color: #1BDBAD;
    }

    .el-radio__input.is-checked + .el-radio__label {
      color: #1BDBAD;
    }

    .el-dialog {
      .el-dialog__body, .el-dialog__header {
        padding: 0;
      }
    }

    /*模态框头部样式*/
    .el-dialog {
      border-radius: 8px;

      .el-dialog__header {
        background: rgba(27, 219, 173, 1);
        border-radius: 8px 8px 0 0;
        box-sizing: border-box;
        height: 50px;

        .el-dialog__title {
          color: #fff;
          font-size: 14px;
        }
      }

      .el-dialog__headerbtn .el-dialog__close {
        color: #fff;
      }

      .el-dialog__header {
        padding: 15px 20px;
      }
    }
  }
</style>
<style scoped lang="scss">
  @import "../../styles/css/common";
  @import "../../styles/css/commodityManagement/addProduct";

  .editor {
    width: 100%;
  }

  .common-btns {
    text-align: center;
  }
</style>
