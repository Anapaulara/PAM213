//Ejercicio a
const persona = {
    nombre: "Ana Paulina",
    edad: 18,
    direccion: {
        ciudad: "Qro",
        pais: "MX"
    }
};

//Aplica destructuracion aquì
const {nombre, edad, direccion: {ciudad} } = persona; 

//Imprime mensaje aqui 
console.log ("Me llamo " + nombre + ", tengo " + edad + " años"+ " y vivo en "+ ciudad);


const productos = [
  { nombre: "Laptop", precio: 12000 },
  { nombre: "Mouse", precio: 250 },
  { nombre: "Teclado", precio: 750 },
  { nombre: "Monitor", precio: 3000 }
];
//Codigo
//Productos con precio > 1000
const filtrados = productos.filter(p => p.precio > 1000);

//Arreglo con solo nombres
const nombres = filtrados.map(p => p.nombre);

console.log(nombres); // ["Laptop", "Monitor"]