<template>
  <div class="lefter">
    <div class="logo">

    </div>
    <div class="tree-menu">

      <el-menu
        class="el-menu-vertical-demo"
        background-color="#1BDBAD"
        :default-openeds="opens"
        router
      >

        <!-- 一级菜单 -->
        <template v-for="(item,key) in menuList">
          <el-submenu v-if="item.children && item.children.length" :index="key" :key="key">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.meta.title}}</span>
            </template>

            <!-- 二级菜单 -->
            <template v-for="itemChild in item.children">
              <el-submenu v-if="itemChild.children && itemChild.children.length && !itemChild.children[0].isButton" :index="itemChild.path" :key="itemChild.path">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{itemChild.meta.title}}</span>
                </template>

                <!-- 三级菜单 -->
                <template v-for="itemChild_Child in itemChild.children">
                  <el-menu-item :index="itemChild_Child.path" :key="itemChild_Child.path">
                    <i class="el-icon-location"></i>
                    <span slot="title">{{itemChild_Child.meta.title}}</span>
                  </el-menu-item>
                </template>
              </el-submenu>

              <el-menu-item v-else :index="itemChild.path" :key="itemChild.path">
                <i class="el-icon-location"></i>
                <span slot="title">{{itemChild.meta.title}}</span>
              </el-menu-item>
            </template>
          </el-submenu>

          <el-menu-item v-else :index="item.path" :key="item.path">
            <i class="el-icon-location"></i>
            <span slot="title">{{item.meta.title}}</span>
          </el-menu-item>
        </template>
      </el-menu>

    </div>
  </div>
</template>

<script>
  import { getRouterInfoFromStorage } from '../../utils/utils'

  export default {
    el: 'Lefter',
    props: {
      isCollapse: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        opens: [],
        menuList: [
          /* {
                      name: '课程管理',
                      id: 1,
                      childList: [
                        {
                          name: '专题',
                          id: 11,
                          path: '/'
                        },
                        {
                          name: '音频',
                          id: 12,
                          path: '/'
                        },
                        {
                          name: '视频',
                          id: 13,
                          path: '/'
                        },
                        {
                          name: '直播',
                          id: 14,
                          path: '/'
                        }
                      ]
                    },
                    {
                      name: '商品管理',
                      id: 2,
                      childList: [
                        {
                          name: '商品',
                          id: 21,
                          path: '/commodityManagement/commodity'
                        },
                        {
                          name: '商品分组管理',
                          id: 22,
                          path: '/commodityManagement/productGroup'
                        }
                      ]
                    },
                    {
                      name: '用户管理',
                      id: 3,
                      childList: [
                        {
                          name: '用户列表',
                          id: 31,
                          path: '/'
                        },
                        {
                          name: '消息列表',
                          id: 32,
                          path: '/'
                        },
                        {
                          name: '用户反馈',
                          id: 33,
                          path: '/'
                        }
                      ]
                    },
                    {
                      name: '订单中心',
                      id: 4
                      /!* childList: [
                        {
                          name: '订单',
                          id: 41,
                          path: '/'
                        },
                        {
                          name: '商品销售统计',
                          id: 42,
                          path: '/'
                        }
                      ] *!/
                    },
                    {
                      name: ' 营销中心',
                      id: 5
                      /!* childList: [
                        {
                          name: '优惠券管理',
                          id: 51,
                          path: '/'
                        },
                        {
                          name: '兑换码',
                          id: 52,
                          path: '/'
                        },
                        {
                          name: '拼团',
                          id: 53,
                          path: '/'
                        },
                        {
                          name: '充值管理',
                          id: 54,
                          path: '/'
                        },
                        {
                          name: '推广管理',
                          id: 55,
                          path: '/'
                        }
                      ] *!/
                    },
                    {
                      name: '系统管理',
                      id: 6
                      /!* childList: [
                        {
                          name: 'banner管理',
                          id: 61,
                          path: '/'
                        },
                        {
                          name: '权限管理',
                          id: 62,
                          path: '/'
                        }
                      ] *!/
                    } */
        ]
      }
    },
    mounted () {
      this.menuList = getRouterInfoFromStorage()
      this.setOpens()
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      },
      jumpTo (path) {
        this.$router.push(path)
      },
      setOpens () {
        this.menuList.forEach((item, key) => {
          this.opens.push(key)
        })
      }
    }
  }
</script>

<style>
  .el-submenu__title:focus {
    background-color: transparent !important;
  }

  .el-submenu__title:hover {
    background-color: transparent !important;
  }

  .el-submenu__title .el-submenu__icon-arrow.el-icon-arrow-down {
    color: #1BDBAD !important;
  }
</style>
<style scoped lang="scss">
  .logo {
    height: 100px;
  }

  .el-submenu {
    width: 193px;
  }

  .el-submenu__title {
    .el-icon-location {
      color: #fff;
    }

    span {
      color: #fff;

      &:hover {
        background-color: transparent !important;
      }
    }
  }

  .el-menu-item {
    color: #fff;
    padding-left: 49px !important;
  }

  .el-menu-item:hover {
    background: transparent !important;
  }

  .el-menu-item.is-active {
    color: #1BDBAD;
    background-color: #FFFFFF !important;
    position: relative;

    &:before {
      content: '';
      display: block;
      width: 41px;
      height: 41px;
      background: #1BDBAD;
      border-radius: 0 41px;
      position: absolute;
      z-index: 33;
      right: 0;
      top: -41px;
      -webkit-transform: rotate(270deg);
      -ms-transform: rotate(270deg);
      -o-transform: rotate(270deg);
      transform: rotate(270deg);
    }

    &:after {
      content: '';
      display: block;
      width: 41px;
      height: 41px;
      background: #1BDBAD;
      border-radius: 41px 0;
      position: absolute;
      z-index: 33;
      right: 0;
      bottom: -41px;
      -webkit-transform: rotate(270deg);
      -ms-transform: rotate(270deg);
      -o-transform: rotate(270deg);
      transform: rotate(270deg);
    }

    span {
      &:after {
        content: "";
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 40px 0 0 0;
        background: #fff;
        position: absolute;
        right: 0;
        bottom: -40px;
        transform: rotateX(180deg);
        z-index: 2;
      }

      &:before {
        content: "";
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 40px 0 0 0;
        background: #fff;
        position: absolute;
        right: 0;
        top: -40px;
        transform: rotateX(360deg);
        z-index: 2;
      }
    }
  }
</style>
