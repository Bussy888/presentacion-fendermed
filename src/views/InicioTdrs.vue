<template>
  <div class="slide">
    <h1 class="text-xl font-bold">Fase de Inicio</h1>
    <h2 class="text-lg">1.2 Tdr's y Carta de Aceptación</h2>

    <!-- Contenedor Grid -->
    <div class="grid-container">
      <!-- Contenido TDR -->
      <div class="grid-item">
        <h2 class="text-lg">Términos de Referencia (TDR)</h2>
        <h3 class="text-md mt-4">Requerimientos del Proyecto</h3>
        <ul class="mt-4 list-disc ml-6">
          <li><strong>Usuarios Objetivos:</strong> Establecimientos de salud pública y privada, profesionales médicos, y particulares.</li>
          <li><strong>Catálogo de Productos:</strong> Equipos médicos, accesorios, e insumos clasificados por categoría.</li>
          <li><strong>Proceso de Compra en Línea:</strong> Carrito de compras, integración con pasarelas de pago (tarjetas y transferencias bancarias).</li>
          <li><strong>Soporte Post-Venta:</strong> Gestión de garantías, manuales, y contacto técnico.</li>
          <li><strong>Gestión de Usuarios:</strong> Creación de cuentas para clientes y acceso a promociones personalizadas.</li>
          <li><strong>Sistema de Inventario:</strong> Actualización en tiempo real para evitar pedidos de productos no disponibles.</li>
        </ul>
        <div class="mt-6">
          <a href="tdrs.pdf" download class="btn">Descargar Tdr's</a>
        </div>
      </div>

      <!-- Contenido Carta de Aceptación -->
      <div class="grid-item">
        <h2 class="text-lg">Carta de Aceptación</h2>
        <h3 class="text-md mt-4">Objetivo de la Carta de Aceptación</h3>
        <p class="mt-4">El objetivo de la Carta de Aceptación es formalizar que FENDERMED ha recibido y revisado el proyecto final, aprobando su entrega y asegurando que todos los componentes acordados han sido implementados de acuerdo con los términos establecidos por MVM Solutions.</p>
        <h3 class="text-md mt-8">Límites y Legalidades de la Carta de Aceptación</h3>
        <ul class="mt-4 list-disc ml-6">
          <li><strong>Alcance del Proyecto:</strong> La aceptación cubre únicamente los componentes desarrollados conforme al TDR, incluyendo funcionalidades acordadas y pruebas realizadas.</li>
          <li><strong>Limitaciones de Responsabilidad:</strong> MVM Solutions no será responsable de modificaciones realizadas por terceros después de la entrega final.</li>
        </ul>
        <div class="mt-6">
          <a href="carta_inicio.pdf" download class="btn">Descargar Carta de Inicio</a>
        </div>
      </div>
    </div>

    <router-link to="/planificacion" class="btn mt-6 block">Siguiente Fase</router-link>
  </div>
</template>

<style>
  /* Estilos para el grid */
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 20px;
    align-items: start;
  }

  /* Estilos para los encabezados */
  .grid-header {
    font-weight: bold;
    text-align: center;
    grid-column: span 2;
    margin-bottom: 16px;
  }

  /* Estilos para los items de la tabla */
  .grid-item {
    padding: 10px;
    border: 1px solid #ddd;

    border-radius: 5px;
    background-color: #f9f9f9;
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
    name: 'InicioTdrs',
  };
</script>
