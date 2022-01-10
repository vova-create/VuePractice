<template>
  <div class="wrapper">
<h1>Instagram-Cats</h1>
 <div class="catItems" v-for="( item, index) in cats.data" :key="index">
   <div v-if="!!item.image && !!item.image.url">
     <h2 v-text="item.name"></h2>
     <img class="catPicture" :src="item.image.url" alt="cat">
   </div>

 </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "CatList",

  data() {
    return {
      cats: []
    }
  },
  mounted() {
    axios.get('https://api.thecatapi.com/v1/breeds')
    .then(responce => this.cats = responce )
  },
  methods:{

  }
}
</script>

<style scoped>
body{
  background-color: antiquewhite;
}
.wrapper {
  text-align: center;
  border: 1px solid black;
  max-width: 600px;
  margin: 0 auto;
  background-color:azure;
}
.catItems {
  box-sizing: border-box;
  flex-wrap: wrap;
}

.catPicture {
  height: 200px;
  width: 200px;
  margin: 10px;
  border: 1px solid gold;
}
</style>