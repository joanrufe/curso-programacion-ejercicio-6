import adjuntarManejadores from "./adjuntarManejadores";
import pintarTareas from "./pintarTareas";
import cargarTareas from "./cargarTareas";

// @ts-check
/** @typedef {Object} Tarea
 * @property {String} texto
 * @property {Boolean} hecha
 */

/**
 * Esta funcion cargara las tareas y las pintara
 */
export default function iniciarApp() {
  const tareas = cargarTareas();
  pintarTareas(tareas);
  adjuntarManejadores();
}
