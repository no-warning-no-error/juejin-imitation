<template>
  <div id="nav">
  <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"

      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
    <el-menu-item index="1"><router-link to="/article">综合</router-link></el-menu-item>
    <el-menu-item index="2">关注</el-menu-item>
    <el-menu-item index="3" >后端</el-menu-item>
    <el-menu-item index="4">前端</el-menu-item>
    <el-menu-item index="5">Android</el-menu-item>
    <el-menu-item index="6">IOS</el-menu-item>
    <el-menu-item index="7">人工智能</el-menu-item>
    <el-menu-item index="8">开发工具</el-menu-item>
    <el-menu-item index="9">代码人生</el-menu-item>
    <el-menu-item index="10">阅读</el-menu-item>
  </el-menu>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "NavList",
    data() {
      return {
        activeIndex2: '1',
        input: ''
      };
    },
    methods: {

    }

}
</script>

<style scoped>
#nav{
  margin: 0;
  border: 0;
  padding: 0;
}
.el-menu-demo{
  background-color: cyan;
}
</style>



