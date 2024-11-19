<template>
    <div class="slide">
      <h1 class="text-xl font-bold">Fase de Cierre</h1>
      <h2 class="text-lg">5.1 Manuales</h2>
      <p class="mt-4">
        Se proporcionan manuales detallados para el usuario final y el equipo de mantenimiento. 
        Estos documentos garantizan un correcto uso y soporte del sistema.
      </p>
      <div class="mt-6">
        <a href="manuales.pdf" download class="btn">Descargar Manuales</a>
      </div>
      <router-link to="/cierre-carta" class="btn mt-6 block">Siguiente</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CierreManuales',
  };
  </script>
  