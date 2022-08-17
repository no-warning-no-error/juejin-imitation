<template>
  <div id="nav">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">沸点</el-menu-item>
    <el-menu-item index="3" >课程</el-menu-item>
    <el-menu-item index="4">直播</el-menu-item>
    <el-menu-item index="5">活动</el-menu-item>
    <el-menu-item index="6">商城</el-menu-item>
    <el-menu-item index="7">APP</el-menu-item>
    <el-menu-item index="8">插件</el-menu-item>
    <el-menu-item index="9">
      <el-input
          type="text"
          suffix-icon="el-icon-search"
          v-model="input"
          placeholder="请输入"
          style="width: 270px; cursor: pointer">
<!--          @keyup.enter.native="Search"-->
      </el-input>
    </el-menu-item>
  </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
    data() {
      return {
        activeIndex: '1',
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



