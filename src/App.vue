<template>
  <div id="app">
    <nav class="nav">
      <router-link class="link" exact to="/header">Главная Страница</router-link>
      <router-link exact to="/cat-list">Лента котов</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
}
</script>
<style>
#app {
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


<!--<div id="nav">-->
<!--<front-page/>-->
<!--<router-link to="/">Welcome page</router-link> |-->
<!--<router-link to="/cat-list">About</router-link>-->
<!--</div>-->
<!--&lt;!&ndash;    <router-view/>&ndash;&gt;-->