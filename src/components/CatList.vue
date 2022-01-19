<template>
  <div class="allWrapper">
    <h2>Total cats are shown {{ allCats.length }}</h2>
    <div class="likeWrapperCounter">
      <h2> Total Likes : {{ likes }} </h2>
    </div>
    <div class="wrapper">
      <div class="catItems" v-for="(item, index) in allCats" :key="index">
        <div class="catCart">
          <div class="heart">
            <img v-if="item.likes" src="../assets/heart.png" alt="heart">
          </div>
          <h2 v-text="item.name"></h2>
          <img @click="item.likes = !item.likes" class="catPicture" :src="item.url" alt="cat">
          <h3>
            {{ item.likes ? 'you liked this cat' : 'not liked' }}
          </h3>
        </div>
      </div>
    </div>
    <button id="button" @click="showMoreCats">
      <img src="../assets/CatPaw.png" alt="cat-image-paw"></button>
    <br>
    <label for="button">Еще котиков {{ allCats.length }}</label>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "CatList",
  computed: mapGetters(['allCats', 'likes']),
  async mounted() {
    await this.getCats();
  },
  beforeDestroy() {
    this.deleteCats()
  },
  methods: {
    ...mapActions(['getCats', 'showMoreCats', "countLike", 'deleteCats'])
  },
}

</script>
<style scoped>
.likeWrapperCounter {
  height: 10px;
}

h2 {
  color: #103fd9;
  opacity: 0.4;
}

.heart {
  position: relative;
  top: 60px;
  left: 200px;
  height: 10px;
  width: 10px;
}

body {
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
  margin: 100px auto;
}

.catItems {
  box-sizing: border-box;
  flex-wrap: wrap;
  color: lightpink;
}

.catPicture {
  box-sizing: border-box;
  flex-wrap: wrap;
  height: 400px;
  width: 400px;
  margin: 10px 10px;
  transition: .3s ease-in-out;
  object-fit: contain;
}


.catPicture:hover {
  box-shadow: 3px 3px #9b7278, -1em 0 .4em #ab9297;;
}

#button {
  background-color: #e3a4e3;
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
  height: 50px;
  width: 50px;
}

h3 {
  color: #cb8fcb;
}

.thumbsUp {
  position: relative;
  top: 0;
  bottom: 0;
  height: 20px;
  width: 20px;
  border: 1px solid black;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://cdn-icons-png.flaticon.com/512/456/456115.png');
  margin: 20px auto;
}

.thumbsDown {
  background-image: url('https://cdn-icons.flaticon.com/png/512/4926/premium/4926589.png?token=exp=1642594429~hmac=7cce22cae2f12ee2123e8d4bbfa1b103');
  height: 50px;
  width: 50px;
  border: 1px solid black;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>