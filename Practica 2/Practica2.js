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