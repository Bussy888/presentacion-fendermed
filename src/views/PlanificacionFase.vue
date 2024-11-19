<template>
    <div class="slide">
      <h1 class="text-xl font-bold">Fase de Planificación</h1>
      <h2 class="text-lg">2.1 Plan del Proyecto “Cronogramas”</h2>
      <p class="mt-4">Descarga el plan y observa el cronograma:</p>
      <div class="mt-6">
        <!-- <a href="plan_proyecto.pdf" download class="btn">Descargar Plan</a> -->
        <img src="@/assets/images/planificacion/cronograma.png" alt="Cronograma" class="mt-4">
      </div>
      <router-link to="/planificacion-herramientas" class="btn mt-6 block">Siguiente</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PlanificacionFase',
  };
  </script>
  