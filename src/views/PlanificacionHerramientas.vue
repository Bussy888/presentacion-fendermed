<template>
    <div class="slide">
      <h1 class="text-xl font-bold">Fase de Planificación</h1>
      <h2 class="text-lg">2.2 Uso de Herramientas</h2>
      <p class="mt-4">Trello: Para organizar las tareas del equipo, establecer objetivos claros y facilitar el seguimiento del avance del proyecto mediante tableros de planificación.</p>
      
      <p class="mt-4">Vue.js: Será la librería JavaScript principal para el desarrollo del frontend, proporcionando una interfaz interactiva y dinámica.</p>
      
      <p class="mt-4">Amazon Web Services (AWS): Para el hosting seguro y escalable de la plataforma.</p>
      <img  src="@/assets/images/herramientas/herramientas.png"   alt="Herramientas"   class="herramientas-img"/>
      <div>
      <router-link to="/planificacion-riesgos" class="btn mt-6 block">Siguiente</router-link>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PlanificacionHerramientas',
  };
  </script>
  