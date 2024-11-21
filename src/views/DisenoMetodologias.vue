<template>
  <div class="slide3">
    <div class="container">
      <h1 class="title">Fase de Diseño y Desarrollo</h1>
      <h2 class="subtitle">3.1 Metodologías de Desarrollo</h2>

      <div class="content">
        <p class="paragraph">
          Para el desarrollo de la plataforma de E-Commerce de FENDERMED, se utilizará la metodología Agile. Esta metodología permite una mayor flexibilidad y adaptación a cambios durante el desarrollo del proyecto. Algunas características clave de Agile para este proyecto incluyen:
        </p>

        <ul class="list">
          <li><strong>Sprints:</strong> El trabajo se dividirá en iteraciones cortas, conocidas como sprints, para asegurar entregas parciales y la revisión continua del avance.</li>
          <li><strong>Reuniones diarias (Daily Stand-ups):</strong> Se realizarán reuniones cortas diarias para discutir el progreso, identificar bloqueos y garantizar que todos los miembros del equipo estén alineados.</li>
          <li><strong>Revisión y Retrospectiva:</strong> Al final de cada sprint, se realizará una revisión del trabajo completado y una retrospectiva para identificar mejoras en el proceso.</li>
        </ul>

        <div class="image-container">
          <img src="@/assets/images/metodologias/metodologias.jpg" alt="Metodologías" class="image">
        </div>

        <div class="button-container">
          <router-link to="/diseno-herramientas" class="btn">Siguiente</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  /* Contenedor general */
  .slide3 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
  }

  /* Contenedor principal */
  .container {
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 40px;
    width: 80%;
    max-width: 1000px;
    text-align: center;
  }

  /* Título principal */
  .title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #2b2b2b;
  }

  /* Subtítulo */
  .subtitle {
    font-size: 1.5rem;
    margin-top: 10px;
    font-weight: 500;
    color: #4a90e2;
  }

  /* Párrafos */
  .paragraph {
    margin-top: 20px;
    font-size: 1.1rem;
    color: #555;
    line-height: 1.6;
  }

  /* Listado */
  .list {
    margin-top: 20px;
    text-align: left;
    font-size: 1.1rem;
    color: #555;
    list-style-type: none;
    padding: 0;
  }

  .list li {
    margin-bottom: 10px;
  }

  .list strong {
    color: #4a90e2;
  }

  /* Estilos de la imagen */
  .image-container {
    margin-top: 30px;
    text-align: center;
  }

  .image {
    width: 100%;
    max-width: 600px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
</style>

<script>
export default {
  name: "MetodologiasDesarrollo",
};
</script>