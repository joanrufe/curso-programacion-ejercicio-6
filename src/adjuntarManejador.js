import filtrarEmpleados from "./filtrarEmpleados";

/**
 * Adjuntar un manejador en empleadosInput que llame a filtrarEmpleados y a pintarEmpleados
 * @param {import('./empleados').EmpleadosArray} empleados
 */
export default function adjuntarManejador(empleados) {
  const empleadosInput = document.querySelector(".filter-employees input");
  // Debe subscribirse al evento "input" de empleadosInput
}
