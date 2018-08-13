<template>
  <div id="app">
    <router-link to="/">
      <img src="./assets/logo.png">
    </router-link><br/>
    <ul>
      <router-link class="rout-item" tag="li" to="/page"><a href="">go to page</a></router-link>
      <router-link class="rout-item" tag="li" to="/table"><a href="">go to table</a></router-link>
    </ul>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0 20px;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style: none;
}
.rout-item {
  margin: 10px;
}
.rout-item a {
  display: inline-block;
}
</style>
