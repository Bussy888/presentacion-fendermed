<template>
  <div class="slide5">
    <div class="container">
      <h1 class="title">Fase de Control de Calidad e Implementación</h1>
      <h2 class="subtitle">4.2 Selección del Servidor, Configuración y Lanzamiento</h2>

      <div class="content">
        <p class="paragraph">
          Se recomienda <strong>Amazon Web Services (AWS)</strong> para el hosting de la plataforma E-Commerce de FENDERMED debido a su escalabilidad, alta disponibilidad (99.9%) y seguridad con certificados SSL. AWS ofrece servicios como Elastic Beanstalk para el despliegue, EC2 para servidores, RDS para bases de datos y S3 para almacenamiento seguro. Si se usa el nivel gratuito o recursos limitados, el costo mensual sería de $5 a $15 USD, lo que equivale a $60 a $180 USD anuales.
        </p>

        <p class="paragraph">
          Alternativamente, opciones como <strong>Hostinger</strong> o <strong>Bluehost</strong> ofrecen hosting a $100 a $150 USD anuales, con características como almacenamiento SSD y soporte 24/7. Sin embargo, AWS es preferido por su flexibilidad y herramientas avanzadas de monitoreo, ideales para una plataforma con información sensible. FENDERMED deberá pagar el hosting anualmente para asegurar la continuidad del servicio.
        </p>

        
      </div>

      <!-- Información adicional -->
      <h2 class="subtitle">4.3 Cómo Lanzarlo a la Web</h2>
      <p class="paragraph">
        El lanzamiento a la web se realizará mediante un enfoque de <strong>Despliegue Gradual</strong> para minimizar riesgos. El proceso será el siguiente:
      </p>
      <ul class="list">
        <li><strong>Fase de Prueba Interna:</strong> Desplegar la plataforma en un entorno de prueba para su evaluación por el equipo interno de FENDERMED.</li>
        <li><strong>Fase de Beta Cerrada:</strong> Permitir que un grupo limitado de usuarios pruebe la plataforma y proporcione retroalimentación antes del lanzamiento oficial.</li>
        <li><strong>Despliegue en Producción:</strong> Una vez validados todos los aspectos, la plataforma será desplegada en el entorno de producción utilizando <strong>AWS Elastic Beanstalk</strong> para gestionar la infraestructura y simplificar el proceso de despliegue.</li>
        <li><strong>Monitoreo Post-Lanzamiento:</strong> Utilizar <strong>AWS CloudWatch</strong> para monitorear el rendimiento de la plataforma y asegurar la estabilidad en el entorno de producción.</li>
      </ul>
<!-- Botón de navegación -->
          <router-link to="/cierre-manuales" class="btn mt-6 bloc">Siguiente Fase</router-link>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "ImplementacionLanzamiento",
};
</script>

<style scoped>
  /* Estilos de las diapositivas */
  .slide5 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
  }

  .container {
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 40px;
    width: 80%;
    max-width: 1000px;
    text-align: center;
  }

  /* Títulos principales */
  .title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #2b2b2b;
  }

  .subtitle {
    font-size: 1.5rem;
    margin-top: 20px;
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

  /* Botón */
  .btn1 {
    display: inline-block;
    margin-top: 30px;
    padding: 12px 30px;
    background-color: #4a90e2;
    color: white;
    font-size: 1.1rem;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .btn:hover1 {
    background-color: #357ab7;
  }

  .button-container1 {
    margin-top: 20px;
  }
</style>
