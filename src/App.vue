<template>
  <div class="app">
    
    <div>
      <router-view></router-view>
    <Menu/>
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";

export default {
  name: "App",
  components: {
    Menu,
  }

};
</script> 

<style>
html, body {
  height: 100%;
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  max-width: 50em;
  border: 1px solid;
  color: #2c3e50;
}

</style>
