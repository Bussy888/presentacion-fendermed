<template>
  <div class="slide">
    <h1 class="text-xl font-bold">Fase de Planificación</h1>
    <h2 class="text-lg">2.1 Plan del Proyecto “Cronogramas”</h2>
    <div class="plan-details">
      <div class="phase-container">
        <p class="text-lg mt-2"><strong>Fase 1: Recolección de Requisitos (2 semanas)</strong></p>
        <p class="mt-2">Esta fase se centra en la recopilación y análisis de los requisitos del cliente, con el objetivo de definir de manera clara las funcionalidades y expectativas del proyecto.</p>
      </div>
      <div class="phase-container">
        <p class="text-lg mt-2"><strong>Fase 2: Diseño y Planificación (3 semanas)</strong></p>
        <p class="mt-2">En esta etapa, se realiza el diseño visual de la plataforma y se planifican las metodologías de trabajo, asegurando que el diseño cumpla con las necesidades del usuario.</p>
      </div>
      <div class="phase-container">
        <p class="text-lg mt-2"><strong>Fase 3: Desarrollo (8 semanas)</strong></p>
        <p class="mt-2">Durante el desarrollo, se implementan las funcionalidades de la plataforma de E-Commerce según los requisitos definidos, asegurando calidad y eficiencia en la construcción del software.</p>
      </div>
      <div class="phase-container">
        <p class="text-lg mt-2"><strong>Fase 4: Pruebas y Verificación (3 semanas)</strong></p>
        <p class="mt-2">Se realizan pruebas exhaustivas de la plataforma para garantizar la estabilidad, seguridad y rendimiento antes del lanzamiento al entorno de producción.</p>
      </div>
      <div class="phase-container">
        <p class="text-lg mt-2"><strong>Fase 5: Lanzamiento (2 semanas)</strong></p>
        <p class="mt-2">En esta fase, la plataforma se lanza en el entorno de producción y se capacita al equipo de FENDERMED en el uso y administración del sistema.</p>
      </div>
      <div class="phase-container">
        <p class="text-lg mt-2"><strong>Fase 6: Mantenimiento Inicial (1 mes)</strong></p>
        <p class="mt-2">Esta fase abarca el mantenimiento y soporte técnico de la plataforma, corrigiendo errores menores y optimizando el rendimiento durante el primer mes de uso.</p>
      </div>
    </div>
    <div class="mt-4">
      <img src="@/assets/images/planificacion/cronograma.png" alt="Cronograma" class="cronograma-img">
    </div>
    <div class="mt-6">
      <a href="plan_proyecto.pdf" download class="btn">Descargar Plan</a>
    </div>
    <router-link to="/planificacion-herramientas" class="btn mt-6 block">Siguiente</router-link>
  </div>
</template>

<style>
/* Estilos para el contenedor del cronograma */
.plan-details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.phase-container {
  border: 1px solid #ddd;
  padding: 8px;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.cronograma-img {
  width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
}

/* Enlace al siguiente paso */
.btn {
  display: block;
  margin-top: 20px;
  padding: 10px 20px;
  text-align: center;
  background-color: #65BDF4;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}


</style>

<script>
export default {
  name: 'PlanificacionFase',
};
</script>
