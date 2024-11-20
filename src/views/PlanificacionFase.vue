<template>
    <div class="slide">
      <h1 class="text-xl font-bold">Fase de Planificación</h1>
      <h2 class="text-lg">2.1 Plan del Proyecto “Cronogramas”</h2>
      <p class="mt-4">Fase 1: Recolección de Requisitos (2 semanas)</p>
      
      <p class="mt-4">Fase 2: Diseño y Planificación (3 semanas)</p>
      
      <p class="mt-4">Fase 3: Desarrollo (8 semanas)</p>
      
      <p class="mt-4">Fase 4: Pruebas y Verificación (3 semanas)</p>
      
      <p class="mt-4">Fase 5: Implementación y Lanzamiento (2 semanas)</p>
      
      <p class="mt-4">Fase 6: Mantenimiento Inicial (1 mes)</p>
      
      <div>
      <img src="@/assets/images/planificacion/cronograma.png" alt="Cronograma" class="herramientas-img1">
    </div>
    <div class="mt-6">
        <a href="plan_proyecto.pdf" download class="btn">Descargar Plan</a>
        
      </div>
      <p></p>
      <router-link to="/planificacion-herramientas" class="btn mt-6 block">Siguiente</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PlanificacionFase',
  };
  </script>
  