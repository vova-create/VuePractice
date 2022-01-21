<template>
  <div>
    <h2>Main page</h2>
    <img :src='image' alt="my-cat">
    <p>My cat photo</p>
  </div>
</template>

<script>

export default {
  name: "MyPage",
  data() {
    return {
      image: null
    }
  },
  mounted() {
    fetch('https://api.thecatapi.com/v1/images', {
      method: 'GET',
      headers: {
        'X-Api-Key': 'bb841dd0-045d-4eae-b4f0-c9fc24733d87',
      }
    })
        .then((data) => data.json())
        .then((img) => {
          this.image = img[0].url;
        })
  }
}
</script>

<style scoped>
img {
  box-sizing: border-box;
  flex-wrap: wrap;
  height: 500px;
  width: 500px;
  margin: 10px 10px;
  transition: .3s ease-in-out;
  object-fit: cover;
  border: 5px solid black;
  padding: 10px;
  background-color: #74992e;
  border-image: linear-gradient(#f6b73c, #4d9f0c) 30;
}

</style>