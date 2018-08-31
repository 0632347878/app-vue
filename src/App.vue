<template>
  <div class="" id="app">
    <ul class="rout">
      <router-link class="rout-item" tag="li" to="/page"><a href="">main page</a></router-link>
      <router-link class="rout-item" tag="li" to="/list" active-class="custom-class"><a href="">users</a></router-link>
    </ul>

    <router-link to="/" v-if="main">
      <img src="./assets/logo.png">
    </router-link>

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',
  computed:{
    main(){
      return this.$route.path === '/'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul {
  list-style: none;
}
a:hover {
  text-decoration: none;
}
.rout {
  background: rgba(0,0,0, .1);
  text-align: left;
}
.rout-item {
  margin: 10px;
  text-align: center;
  width: 10%;
  display: inline-block;
  border: 1px solid #333;
  box-shadow: 0 0 3px #000;
  transition: box-shadow, background .3s ease;
}
.rout-item:hover {
  background: rgba(0,0,0, .05);
  transition: box-shadow, background .3s ease;
  box-shadow: 0 0 1px #000;
}
.rout-item a {
  color: inherit;
  display: block;
  padding: 5px;
}
</style>
