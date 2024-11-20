<template>
    <div class="slide">
      <h1 class="text-xl font-bold">Fase de Inicio</h1>
      <h2 class="text-lg">1.1 Análisis de Requerimientos</h2>
      <img src="@/assets/fendermed.jpeg" alt="Diseño de Pantallas" class="fendermed-img">
      <p class="mt-4">
        Usuarios objetivos: Establecimientos de salud pública y privada, profesionales médicos y particulares.
      </p>
      <p class="mt-4">
        Catálogo de productos: Equipos médicos, accesorios, e insumos clasificados por categoría.
      </p>
      <p class="mt-4">
        Proceso de compra en línea: Carrito de compras, integración con pasarelas de pago (ej. tarjetas, transferencias bancarias).
      </p>
      <p class="mt-4">
        Soporte post-venta: Gestión de garantías, manuales y contacto técnico.
      </p>
      <p class="mt-4">
        Gestión de usuarios: Creación de cuentas para clientes y acceso a promociones personalizadas.
      </p>
      <p class="mt-4">
        Sistema de inventario: Actualización en tiempo real para evitar pedidos de productos no disponibles.
      </p>
     

      <router-link to="/inicio-tdrs" class="btn mt-6 block">Siguiente</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InicioFase',
  };
  </script>
  
  <style scoped>
  /* Similar to other slides */
  </style>
  