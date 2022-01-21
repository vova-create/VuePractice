<template>
  <div>
    <header class="header">
      <h1>cat-instagram</h1>
      <img :src="require('@/assets/BigCat.png')" alt="cat-icon">
    </header>
  </div>
</template>

<script>
export default {
  name: "CatHeader"
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  color: #DDA0DD;
  font-family: 'Raleway', sans-serif;
  font-size: 72px;
  font-weight: 800;
  line-height: 72px;
  margin: 30px 0px;
  text-transform: uppercase;
}

img {
  height: 140px;
  width: 140px;
  margin-left: 10px;
}
</style>