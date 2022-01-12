<template>
  <div class="allWrapper">
    <header>
      <h1>cat-instagram</h1>
    </header>
    <div class="wrapper">
      <div class="catItems" v-for="(item, index) in cats.data" :key="index">
        <div>
          <h2 v-text="item.name"></h2>
          <img class="catPicture" :src="item.url" alt="cat">
        </div>
      </div>
    </div>
    <h2 v-text="text"></h2>
    <button id="button" @click="showMoreCats"><img style=" hight:20px; width: 40px " src="https://cdn-icons.flaticon.com/png/512/4225/premium/4225935.png?token=exp=1641996380~hmac=0dec2f32bbad356516a8e0eb391bf4cb" alt=""></button>
    <br>
    <label for="button">Еще котиков</label>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "CatList",

  data() {
    return {
      cats: [],
      text:'Нажмите на кнопку чтобы увидеть больше котиков',
      page: 1,
      limit: 10,
    }
  },
  mounted() {
    axios.get(`https://api.thecatapi.com/v1/images/search?limit=${this.limit}&page=${this.page}&order=DESC`)
     .then(response => this.cats = response )
      .then(data => console.log(data))
  },
  methods:{
showMoreCats() {
  this.text = ''
  this.page += 1
  this.limit +=10
  axios.get(`https://api.thecatapi.com/v1/images/search?limit=${this.limit}&page=${this.page}&order=DESC`)
      .then(response => this.cats = this.cats(response.data))
},
  }
}
</script>

<style scoped>
body{
  background-color: antiquewhite;
}
h1 {
  color: #DDA0DD;
  font-family: 'Raleway',sans-serif;
  font-size: 62px;
  font-weight: 800;
  line-height: 72px;
  margin: 0 0 24px;
  text-align: center;
  text-transform: uppercase; }

.allWrapper {
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
#button:hover {opacity: 1}
</style>