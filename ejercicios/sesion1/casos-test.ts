//2.Declarar un array de al menos 5 objetos, cada uno representando un caso de prueba con: id (number), 
// titulo (string), prioridad (string: "alta" | "media" | "baja") y ejecutado (boolean).
type CasoDeTest = {
  id: number;
  titulo: string;
  prioridad: "alta" | "media" | "baja";
  ejecutado: boolean;
};

const casosDeTest: CasoDeTest[] = [
  { id: 1, titulo: "Login válido", prioridad: "alta", ejecutado: true },
  { id: 2, titulo: "Login con clave incorrecta", prioridad: "alta", ejecutado: true },
  { id: 3, titulo: "Registro de usuario nuevo", prioridad: "media", ejecutado: false },
  { id: 4, titulo: "Recuperación de contraseña", prioridad: "media", ejecutado: true },
  { id: 5, titulo: "Validación de campos obligatorios", prioridad: "baja", ejecutado: false },
];

//console.log(casosDeTest);
//3.Escribir una función contarPorPrioridad(casos) que recorra el array y devuelva cuántos casos hay de cada prioridad.
function contarPorPrioridad(casos: CasoDeTest[]): { alta: number; media: number; baja: number } {
  const conteo = {
    alta: 0,
    media: 0,
    baja: 0,
  };

  casos.forEach((caso) => {
    conteo[caso.prioridad]++;
  });

  return conteo;
}
//console.log(contarPorPrioridad(casosDeTest));
//4.Escribir una función listarPendientes(casos) que devuelva solo los casos donde ejecutado sea false.
function listarPendientes(casos: CasoDeTest[]): CasoDeTest[] {
  const pendientes: CasoDeTest[] = [];

  for (const caso of casos) {
    if (!caso.ejecutado) { // Equivale a: caso.ejecutado === false
      pendientes.push(caso);
    }
  }

  return pendientes;
}
console.log(listarPendientes(casosDeTest));