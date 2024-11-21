<template>
  <!--  -->
  <nav class="bg-blue-100 p-6 shadow-md rounded-lg">
  <router-link to="/" class="text-xl font-semibold text-gray-800 hover:text-teal-500">Home</router-link> 
  </nav>
  <div class="slide1">
  <router-view/>
</div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
