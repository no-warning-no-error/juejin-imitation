<template>
  <div id="ArticleList">


    <ul class="article-infinite-list"
        v-infinite-scroll="loadArticle"
        infinite-scroll-distance="1"
    >
      <li v-for="i in count" class="infinite-list-item" :key="i" >
       <div class="article" >
         <div class="articleInfo">
           {{ArticleData[0].writer}}  |
          {{ArticleData[0].date}}  |
           {{ArticleData[0].category}}
         </div>

         <div class="title">{{ArticleData[0].title}}</div>



         <br/>
       </div>
      </li>
    </ul>

  </div>

</template>

<script>
// import NavList from "@/components/NavList";
export default {
  data () {
    return {
      count: 0,
      ArticleData:[{

        date: '2021-05-03',
        writer: '王小虎',
        title: 'CSS',
        category:'前端'
      }]
    }
  },
  methods: {
    loadArticle () {
      this.count += 2
    },
    clickArticle(){

    }
  },
  components:{
    // NavList
  }
}
</script>

<style scoped>
.article-infinite-list{
  height: 300px;
  width: auto;
  overflow: auto;

}
ul{
  list-style: none;
}
.article{
  text-decoration: none;
  height: 120px;
}

</style>