<template>
  <div>
    <!-- Navbar -->
    <nav class="bg-blue-100 p-6 shadow-md rounded-lg flex justify-center space-x-8">
      <router-link to="/" class="text-xl font-semibold text-gray-800 hover:text-teal-500">Home</router-link>
      <router-link to="/inicio-tdrs" class="text-lg font-medium text-blue-700 hover:text-teal-600">Carta de Inicio</router-link>
      <router-link to="/cierre-carta" class="text-lg font-medium text-blue-700 hover:text-teal-600">Carta de Cierre</router-link>
      <router-link to="/cierre-manuales" class="text-lg font-medium text-blue-700 hover:text-teal-600">Manuales</router-link>
      <router-link to="/planificacion" class="text-lg font-medium text-blue-700 hover:text-teal-600">Plan de Proyecto</router-link>
      <router-link to="/inicio-tdrs" class="text-lg font-medium text-blue-700 hover:text-teal-600">TDRs</router-link>
      <router-link to="/control-calidad" class="text-lg font-medium text-blue-700 hover:text-teal-600">Pruebas de Calidad</router-link>
    </nav>
    
    <!-- Main content rendering -->
    <div class="slide1">
    <router-view />
  </div>
  </div>
</template>

<script>
export default {
  name: "ProjectPresentation",
};
</script>

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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f4f8;
  border-radius: 8px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 15px;
    text-decoration: none;

    &:hover {
      color: #42b983;
      text-decoration: underline;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.slide1 {
  margin-top: 20px;
}
</style>
