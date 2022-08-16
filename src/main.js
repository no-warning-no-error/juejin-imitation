 // 整个项目的入口文件

 //引入Vue
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

 // import infiniteScroll from 'vue-infinite-scroll'
 // 引入app组件--所有组件的父组件
import App from './App.vue'


// 关闭Vue的生产提示
Vue.config.productionTip = false

 Vue.use(ElementUI);
 // Vue.use(infiniteScroll)

 // 创建Vue实例对象
new Vue({
  el:'#app',
  render: h => h(App),
})//.$mount('#app')  //el:'#app'
