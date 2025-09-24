//Ejercicio c
const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "María", edad: 28 }
];

const personaEncontrada = personas.find(persona => persona.nombre === "Luis");

const { nombre, edad } = personaEncontrada;
console.log("Encontré a " + nombre + ", tiene " + edad + " años.");
personas.forEach(({ nombre, edad }) => {
  console.log("Nombre: " + nombre + ", Edad: " + edad);
}
);

const totalEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log("La suma total de las edades es: " + totalEdades);
