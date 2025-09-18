let nombre =  "Armando"; 
const edad =  25; 

nombre = "Ana Maria"; 

const saludo= "Hola," + nombre +" Tienes"+ edad+ "Años"; 
console.log(saludo); 

const cuadrado = (numero) => {
    return numero * numero;
};

console.log(cuadrado(2));
console.log(cuadrado(5));
console.log(cuadrado(10));

const saludoPersonalizado = (nombre, edad) => {
    return "Hola, me llamo " + nombre + " y tengo " + edad + " años.";
};

console.log(saludoPersonalizado("Isay", 37));