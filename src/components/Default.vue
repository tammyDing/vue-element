<template>
  <div class="container">
    <el-row class="header">
      <el-col :span="4" class="main-text">课程学习笔记</el-col>
      <el-col :offset="4" :span="3">指南</el-col>
      <el-col :span="3">资源库</el-col>
      <el-col :span="3">报错处理</el-col>
      <el-col :span="3">工具方法</el-col>
      <el-col :span="4" style="text-align: right;">
        <p class="user-info" v-if="userInfo">{{userInfo.username}}</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <el-menu
          router
          :default-active="defaultActive"
          class="el-menu-vertical-demo menu-main"
          background-color="#fff"
          text-color="#535353"
          active-text-color="#409eff"
          @open="handleOpen"
          @close="handleClose">
          <template v-for="(item,index) in menusList">
            <!-- 没有子目录 -->
            <el-menu-item v-if="item.href" :index="item.href" :key="index">
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
            <!-- 有子目录 -->
            <el-submenu :index="index+''" v-else :key="index">
              <template slot="title">
                <span slot="title">{{item.title}}</span>
              </template>
              <el-menu-item-group v-for="(list, cur) in item.submenus" :key="cur">
                <el-menu-item :index="list.href">{{list.title}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </template>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
      <el-col class="footer">
        <p>smartthing0916@126.com</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      menusList: []
    }
  },
  beforeMount () {
    let aMenus = this.$api.data
    aMenus.forEach((item, index) => {
      if (item.submenus.length === 0) {
        item['href'] = item.url
      } else {
        item.submenus.forEach((list, current) => {
          list['href'] = item.url + '-' + list.url
        })
      }
    })
    this.menusList = aMenus
    console.log(this.menusList)
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    },
    defaultActive () {
      return this.$route.path.replace('/', '')
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  padding:0 30px;
  height: 60px;
  line-height: 60px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  text-align: center;
  margin-bottom: 1px;
}
.user-info {
  color:#50bfff;
}
.footer {
  text-align: center;
  border-top: 1px solid rgba(26,26,26,.1);
  padding: 10px;
  line-height: 24px;
  font-size: 12px;
}
</style>
