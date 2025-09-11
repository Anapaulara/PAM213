document.write("<h1>Hola Mundo</h1>");
console.log("Mensaje en consola")
console.log(12)
console.log([8,9,10,11])
console.log({"Fecha de nacimiento":101006, "nombre":"Ana"})

 const PI = 3.1416;
 let nombre = "Paulina";
 let apellido = " Lara";
 nombre_completo = nombre + apellido;
console.log(nombre)
console.log(apellido)
console.log(nombre_completo)

let num_1 = 15;
let num_2 = 50;

let res1 = num_1 + num_2;
let res2 = num_1 - num_2;
let res3 = num_1 / num_2;
let res4 = num_1 * num_2;
let res5 = num_1 < num_2;
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)

let password = "10141";

let input = "12345";

let res6 = password == input;
if (res6 == true){
    console.log("Acceso concedido")
}else if (password == "10141") {
    console.log("Entrada especial")
} 
else {
    console.log("Acceso denegado")
}
switch (password) {
    case true:
        console.log("Acceso concedido");
        break;
    case "10141":
        console.log("Entrada especial");
        break;
    default:
        console.log("Acceso denegado");
}

let i = 30;
while (i > 0) {
    console.log(i);
    i--;
}

let maquillaje = ["Rubor", "Polvo", "Masacara de pestañas", "Contorno"];
for (let i = 0; i < maquillaje.length; i++) {
    console.log(maquillaje[i]);
}

for (let j = 30; j > 0; j--) {
    console.log( j);
}

let nomb
function saludar(nomb) {
    console.log("hola "+ nomb );
    return nomb;
}
saludar('Ana');
saludar('Paulina');

function sumar(n1, n2) {
    res7 = n1 + n2;
    console.log("la suma de "+n1+"+"+n2+"=" + res7 );
    return res7;
}
sumar(20, 30);
sumar(50, 30);