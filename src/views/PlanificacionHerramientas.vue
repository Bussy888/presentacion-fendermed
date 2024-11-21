<template>
  <div class="slide">
    <h1 class="text-xl font-bold">Fase de Planificación</h1>
    <h2 class="text-lg">2.2 Uso de Herramientas</h2>
    
    <div class="content-container">
      <img src="@/assets/images/herramientas/herramientas.png" alt="Herramientas" class="herramientas-img"/>
      <div class="text-content">
        <p class="mt-4"><strong>Trello:</strong> Facilidad de uso y capacidad para organizar y asignar tareas de forma visual. Esto ayuda al equipo a establecer objetivos claros y facilita el seguimiento del avance del proyecto.</p>
        <p class="mt-4"><strong>Vue.js:</strong> Vue.js se seleccionó como la librería JavaScript con capacidad para proporcionar una interfaz de usuario interactiva y dinámica. </p>
        <p class="mt-4"><strong>Amazon Web Services (AWS):</strong> AWS fue elegido para el hosting de la plataforma debido a su flexibilidad, seguridad y escalabilidad. Estas características permiten que la plataforma crezca sin problemas conforme aumente la demanda, al mismo tiempo que garantiza la protección de los datos de los usuarios.</p>
      </div>
    </div>
    
    <div>
      <router-link to="/planificacion-riesgos" class="btn mt-6 block">Siguiente</router-link>
    </div>
  </div>
</template>

<style>
  /* Estilos para el contenedor principal */
  .content-container {
    display: flex;
    align-items: flex-start; /* Alinear la imagen y el texto al inicio verticalmente */
    gap: 20px; /* Espacio entre la imagen y el texto */
    margin-top: 20px;
  }

  .herramientas-img {
    width: 500px; /* Ajusta el tamaño de la imagen */
    height: auto;
    flex-shrink: 0; /* Evita que la imagen cambie de tamaño */
  }

  .text-content {
    flex-grow: 1; /* Permite que el texto ocupe el espacio restante */
  }

  .btn {
    display: block;
    margin-top: 16px;
    padding: 10px 20px;
    text-align: center;
    background-color: #65BDF4;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }

  .btn:hover {
    background-color: #65BDF4;
  }
</style>

<script>
export default {
  name: 'PlanificacionHerramientas',
};
</script>
