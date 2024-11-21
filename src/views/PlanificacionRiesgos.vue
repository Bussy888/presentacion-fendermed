<template>
  <div class="slide">
    <h1 class="text-xl font-bold">Fase de Planificación</h1>
    <h2 class="text-lg">2.3 Gestión de Riesgos</h2>

    <!-- Contenedor Grid -->
    <div class="grid-container">
      <!-- Encabezados -->
      <div class="grid-header">Riesgo</div>
      <div class="grid-header">Probabilidad</div>
      <div class="grid-header">Impacto</div>
      <div class="grid-header">Mitigación</div>

      <!-- Filas de contenido -->
      <div class="grid-item">Atrasos en el Desarrollo</div>
      <div class="grid-item">Medio</div>
      <div class="grid-item">Alto</div>
      <div class="grid-item">Control de cambios y resolución técnica.</div>

      <div class="grid-item">Fallas en la Seguridad</div>
      <div class="grid-item">Bajo</div>
      <div class="grid-item">Alto</div>
      <div class="grid-item">Protocolos de seguridad y auditorías.</div>

      <div class="grid-item">Baja Adopción</div>
      <div class="grid-item">Medio</div>
      <div class="grid-item">Moderado</div>
      <div class="grid-item">Marketing y soporte continuo.</div>

      <div class="grid-item">Problemas con Pasarelas de Pago</div>
      <div class="grid-item">Medio</div>
      <div class="grid-item">Alto</div>
      <div class="grid-item">Pruebas y soporte continuo.</div>

      <div class="grid-item">Falta de Capacitación</div>
      <div class="grid-item">Medio</div>
      <div class="grid-item">Moderado</div>
      <div class="grid-item">Tutoriales y sesiones de capacitación.</div>

      <div class="grid-item">Cambios en Requisitos</div>
      <div class="grid-item">Alto</div>
      <div class="grid-item">Alto</div>
      <div class="grid-item">Gestión rigurosa de cambios.</div>
    </div>

    <a href="/diseno-metodologias" class="btn mt-6 block">Siguiente Fase</a>
  </div>
</template>

<style>
  /* Estilos para el grid */
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;
    margin-top: 20px;
  }

  /* Estilos para los encabezados */
  .grid-header {
    font-weight: bold;
    text-align: center;
  }

  /* Estilos para los items de la tabla */
  .grid-item {
    padding: 10px;
    text-align: left;
  }

  /* Alineación centrada para la columna de Probabilidad e Impacto */
  .grid-container .grid-item:nth-child(2),
  .grid-container .grid-item:nth-child(3) {
    text-align: center;
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

  .btn:hover {
    background-color: #65BDF4;
  }
</style>

<script>
export default {
  name: "PlanificacionRiesgos",
};
</script>
