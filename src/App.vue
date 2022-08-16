<template>
  <div id="app">
    <NavMenu></NavMenu>
    <NavList></NavList>
    <ArticleList></ArticleList>
  </div>
</template>

<script>

import NavMenu from "@/components/NavMenu";
import NavList from "@/components/NavList";
import ArticleList from "@/components/ArticleList";

export default {
  name: 'App',
  components: {

    NavMenu,
    NavList,
    ArticleList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  border: 0;
  padding: 0;
  width: 100%;
}
</style>
