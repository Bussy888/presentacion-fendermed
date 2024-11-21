

<template>
  <div class="slide">
    <h1 class="text-xl font-bold">Fase de Cierre</h1>
    <h2 class="text-lg mt-4">5.1 Manuales</h2>
    
    <p class="mt-4">
      Se proporcionan manuales detallados tanto para el <strong>usuario final</strong> como para el <strong>equipo de mantenimiento</strong>.
      Estos documentos aseguran un uso correcto y un adecuado soporte del sistema.
    </p>

    <!-- Contenedor de los manuales -->
    <div class="manuales-container mt-6">
      
      <!-- Manual de Usuario -->
      <div class="manual-item">
        <h3 class="text-md font-semibold">Manual de Usuario</h3>
        <p class="mt-2">
          Este manual está diseñado para guiar a los usuarios en la navegación y uso de la página web para la compra de equipos médicos. 
          Encontrarás instrucciones sobre cómo explorar las categorías de productos, añadirlos al carrito y completar las compras.
        </p>
        <a href="manuale_usuario.pdf" download class="btn">Descargar Manual De Usuario</a>
      </div>

      <!-- Manual del Programador -->
      <div class="manual-item">
        <h3 class="text-md font-semibold">Manual del Programador</h3>
        <p class="mt-2">
          El manual del programador proporciona detalles técnicos sobre el desarrollo y mantenimiento de la página web, incluyendo la configuración de rutas en Vue.js, estructura de directorios y pasos para compilar el proyecto.
        </p>
        <a href="manual_programador.pdf" download class="btn">Descargar Manual Del Programador</a>
      </div>
      
    </div>

    <!-- Navegación a la siguiente sección -->
    <p class="mt-6">
      <router-link to="/cierre-carta" class="btn mt-6 block">Siguiente</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'CierreManuales',
};
</script>

<style scoped>
/* Contenedor para los manuales */
.manuales-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.manual-item {
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.manual-item h3 {
  font-size: 1.125rem;
  color: #333;
}

.manual-item p {
  font-size: 1rem;
  color: #666;
}

h1 {
  font-size: 2rem;
  color: #333;
}

h2 {
  font-size: 1.25rem;
  color: #555;
}

p {
  font-size: 1rem;
  color: #666;
}

.btn {
  display: block;
  margin-top: 10px;
  padding: 10px 20px;
  text-align: center;
  background-color: #65BDF4;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.btn:hover {
  background-color: #4682B4;
}

.mt-4{
    font-size: x-large;
    margin-left: 200px;
    margin-right: 200px;
}
.mt-6{
    font-size: x-large;
    margin-left: 200px;
    margin-right: 200px;
}

/* Estilos para pantallas pequeñas */
@media (max-width: 768px) {
  .manuales-container {
    flex-direction: column;
  }

  h1 {
    font-size: 1.75rem;
  }

  h2 {
    font-size: 1.1rem;
  }

  h3 {
    font-size: 1rem;
  }

  p {
    font-size: 0.95rem;
  }

  .btn {
    padding: 8px 16px;
  }
}

@media (max-width: 480px) {
  .manuales-container {
    flex-direction: column;
    gap: 12px;
  }

  .slide {
    padding: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1rem;
  }

  h3 {
    font-size: 0.95rem;
  }

  p {
    font-size: 0.85rem;
  }

  .btn {
    padding: 8px 12px;
  }
}
</style>

