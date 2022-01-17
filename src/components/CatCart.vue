<template>
  <div>
    <div class="catItems" v-for="(item, index) in cats" :key="index">
      <div class="catCart">
        <img v-if="catLike" class="heart" src="https://cdn-icons.flaticon.com/png/512/210/premium/210545.png?token=exp=1642163861~hmac=f9f72273a40ad659f0eb6fadeff2c597" alt="">
        <h2 v-text="item.name"></h2>
        <img @click="likeCat" class="catPicture" :src="item.url" alt="cat">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cats: {
      type: Array,
      required:true
    }
  },
  name: "CatCart",

  data() {
    return {
      catLike: false
    }
  },


  methods:{
    likeCat(){
      this.catLike = !this.catLike
    }
  }
}
</script>

<style scoped>
.heart {
  position: relative;
  top: 70px;
  height: 30px;
  width: 30px
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
</style>