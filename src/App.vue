<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import store from './store.js';

export default {
  mounted() {
    store.dispatch('getServerStatus');
  },
};
</script>


<style>
html,
body {
  margin: 0;
  height: 100vh;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  height: 100%;
}
a {
  color: inherit;
  text-decoration: none;
  text-decoration-color: black;
}
</style>
