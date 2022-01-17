<template>
  <div class="allWrapper">
    <div class="wrapper">
      <div class="catItems" v-for="(item, index) in allCats" :key="index">
        <div class="catCart">
          <div class="heart">
            <img v-show="item.likes" src="../assets/heart.png" alt="heart">
          </div>
          <h2 v-text="item.name"></h2>
          <img @click="item.likes = !item.likes" class="catPicture" :src="item.url" alt="cat">
          <h3>
            {{item.likes ? 'you liked this cat': 'not liked'}}
          </h3>
        </div>
      </div>
    </div>
    <button id="button" @click="this.showMoreCats">
      <img src="../assets/CatPaw.png" alt="cat-image-paw"></button>
    <br>
    <label for="button">Еще котиков</label>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "CatList",
  computed: mapGetters(['allCats','page']),
  async mounted() {
   await this.getCats();
  },
  methods:{
    ...mapActions(['getCats','showMoreCats'])
  }
}
</script>
<style scoped>

.heart {
  position: relative;
  top: 90px;
  left: 165px;
  height: 30px;
  width: 30px;
}
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
  box-sizing: border-box;
  flex-wrap: wrap;
  height: 350px;
  width: 350px;
  margin: 10px;
  border: 1px solid gold;
  padding: 5px;
  background-color: #DDA0DD;
  border-radius: 10%;
  transition: .3s ease-in-out;
}

.catPicture:hover {
  background-color: orange;
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
h3 {
  color: #d910d9;
}
</style>