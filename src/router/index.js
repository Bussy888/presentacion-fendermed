import { createRouter, createWebHistory } from 'vue-router';
import InicioFase from '../views/InicioFase.vue';
import InicioTdrs from '../views/InicioTdrs.vue';

import PlanificacionFase from '../views/PlanificacionFase.vue';
import PlanificacionHerramientas from '../views/PlanificacionHerramientas.vue';
import PlanificacionRiesgos from '../views/PlanificacionRiesgos.vue';

import DisenoMetodologias from '../views/DisenoMetodologias.vue';
import DisenoHerramientas from '../views/DisenoHerramientas.vue';
import DisenoPantallas from '../views/DisenoPantallas.vue';

import ControlCalidad from '../views/ControlCalidad.vue';
import ImplementacionLanzamiento from '../views/ImplementacionLanzamiento.vue';

import CierreManuales from '../views/CierreManuales.vue';
import CierreCarta from '../views/CierreCarta.vue';

const routes = [
  // Fase de Inicio
  { path: '/', name: 'InicioFase', component: InicioFase },
  { path: '/inicio-tdrs', name: 'InicioTdrs', component: InicioTdrs },

  // Fase de Planificación
  { path: '/planificacion', name: 'PlanificacionFase', component: PlanificacionFase },
  { path: '/planificacion-herramientas', name: 'PlanificacionHerramientas', component: PlanificacionHerramientas },
  { path: '/planificacion-riesgos', name: 'PlanificacionRiesgos', component: PlanificacionRiesgos },

  // Fase de Diseño y Desarrollo
  { path: '/diseno-metodologias', name: 'DisenoMetodologias', component: DisenoMetodologias },
  { path: '/diseno-herramientas', name: 'DisenoHerramientas', component: DisenoHerramientas },
  { path: '/diseno-pantallas', name: 'DisenoPantallas', component: DisenoPantallas },

  // Fase de Control de Calidad e Implementación
  { path: '/control-calidad', name: 'ControlCalidad', component: ControlCalidad },
  { path: '/implementacion-lanzamiento', name: 'ImplementacionLanzamiento', component: ImplementacionLanzamiento },

  // Fase de Cierre
  { path: '/cierre-manuales', name: 'CierreManuales', component: CierreManuales },
  { path: '/cierre-carta', name: 'CierreCarta', component: CierreCarta },
];

// Crear el router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
