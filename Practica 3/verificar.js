function verificarUsuario(usuario) {
    //retornar promesa
  return new Promise((resolve, reject) => {
    if (usuario === "admin") {
      resolve("Acceso concedido");
    } else {
      reject("Acceso denegado");
    }
  });
}
// uso de .then() y catch() 
verificarUsuario('admin')
.then(res=> console.log(res)) // Acceso concedido
.catch(err=> console.error(err));

verificarUsuario('Pau')
.then(res=> console.log(res))
.catch(err=> console.error(err)); //Acceso denegado