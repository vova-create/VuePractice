<template>
  <div class="allWrapper">
    <div class="wrapper">
      <div class="catItems" v-for="(item, index) in cats" :key="index">
        <div>
          <h2 v-text="item.name"></h2>
          <img class="catPicture" :src="item.url" alt="cat">
        </div>
      </div>
    </div>
    <h2 v-text="text"></h2>
    <button id="button" @click="showMoreCats">
      <img src="../assets/CatPaw.png" alt="cat-image-paw"></button>
    <br>
    <label for="button">Еще котиков</label>
  </div>
</template>

<script>
import {CatService} from "@/components/apiFunction";
export default {
  name: "CatList",

  data() {
    return {
      cats: [],
      text:'Нажмите на кнопку чтобы увидеть больше котиков',
      page: 1,
      fImage: [],
      service: null
    }
  },
 async mounted() {
      this.service = new CatService();
      const data = await this.service.getImages();
      this.cats = data;
  },
  methods:{
 async showMoreCats() {
  this.text = ''
  this.page += 1
  const data = await this.service.getImages(this.page);
  this.cats = [...this.cats, ...data];
},
  }
}
</script>
<style scoped>
body{
  background-color: antiquewhite;
}
.allWrapper {
  margin-top: 50px;
  text-align: center;
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  background-color: whitesmoke;
  border: 1px solid wheat;
  max-width: 1800px;
  margin: 0 auto;
}
.catItems {
  box-sizing: border-box;
  flex-wrap: wrap;
}
.catPicture {
  height: 300px;
  width: 300px;
  margin: 10px;
  border: 1px solid gold;
}
#button {
  background-color:#DDA0DD;
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  font-size: 16px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  margin: 10px 10px;
  border-radius: 5px;
}
#button:hover {
  opacity: 1;
}
img {
  height:50px;
  width: 50px;
}
</style>