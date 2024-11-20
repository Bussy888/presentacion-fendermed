<template>
    <div class="slide">
      <h1 class="text-xl font-bold">Fase de Control de Calidad e Implementación</h1>
      <h2 class="text-lg">4.2 Selección del Servidor, Configuración y Lanzamiento</h2>
      <p class="mt-4">
        Se recomienda Amazon Web Services (AWS) para el hosting de la plataforma E-Commerce de FENDERMED debido a su escalabilidad, alta disponibilidad (99.9%) y seguridad con certificados SSL.
         AWS ofrece servicios como Elastic Beanstalk para el despliegue, EC2 para servidores, RDS para bases de datos y S3 para almacenamiento seguro. Si se usa el nivel gratuito o recursos limitados, el costo mensual sería de $1 a $3 USD, lo que equivale a $12 a $36 USD anuales.
      </p>
      <p class="mt-4">
        Alternativamente, opciones como Hostinger o Bluehost ofrecen hosting a $100 a $150 USD anuales, con características como almacenamiento SSD y soporte 24/7. 
        AWS es preferido por su flexibilidad y herramientas avanzadas de monitoreo, ideales para una plataforma con información sensible. FENDERMED deberá pagar el hosting anualmente para asegurar la continuidad del servicio.
      </p>
        <router-link to="/cierre-manuales" class="btn mt-6 block">Siguiente Fase</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImplementacionLanzamiento',
  };
  </script>
  