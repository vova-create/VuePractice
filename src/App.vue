<template>
  <div id="app">
    <div class="wrapper">
      <nav class="nav">
        <router-link exact to="/my-page">Моя Страница</router-link>
        <router-link exact to="/cat-list">Лента котов</router-link>
        <router-link class="link" to="/">Главная Страница</router-link>
        <router-link exact to="/download">Загрузить фото котика</router-link>
      </nav>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style>
.wrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  font-size: 30px;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
}

.nav a {
  font-weight: bold;
  color: lightpink;
  text-decoration: none;
}

.nav a.router-link-exact-active {
  color: #DDA0DD;
}
</style>
