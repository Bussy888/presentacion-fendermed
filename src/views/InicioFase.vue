<template>
    <div class="slide">
      <h2 class="text-lg">1.1 Análisis de Requerimientos</h2>
      <p class="mt-2">FENDERMED busca desarrollar una plataforma de E-Commerce para facilitar la compra de equipos médicos y accesorios.</p>
      <img src="@/assets/fendermed.jpeg" alt="Análisis de Requerimientos" class="fendermed-img">
      
      <p class="mt-4">
        Los <strong>usuarios objetivos</strong> incluyen establecimientos de salud, médicos y particulares.
      </p>
      <p class="mt-4">
        El <strong>catálogo de productos</strong> abarca equipos médicos, accesorios e insumos, organizados por categorías.
      </p>
      <p class="mt-4">
        Se establece el <strong>proceso de compra</strong> en línea con integración a pasarelas de pago para una experiencia segura.
      </p>
      <router-link to="/inicio-tdrs" class="btn mt-6 block">Siguiente</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InicioFase',
  };
  </script>
  
  <style scoped>
  /* Similar to other slides */
  </style>
