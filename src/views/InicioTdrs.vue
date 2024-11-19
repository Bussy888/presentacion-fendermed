<template>
    <div class="slide">
      <h1 class="text-xl font-bold">Fase de Inicio</h1>
      <h2 class="text-lg">1.2 Tdr’s y Carta de Inicio</h2>
      <p class="mt-4">Descarga los documentos necesarios:</p>
      <div class="mt-6">
        <a href="tdrs.pdf" download class="btn">Descargar Tdr’s</a>
        <a href="carta_inicio.pdf" download class="btn ml-4">Descargar Carta de Inicio</a>
      </div>
      <router-link to="/planificacion" class="btn mt-6 block">Siguiente Fase</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InicioTdrs',
  };
  </script>
  