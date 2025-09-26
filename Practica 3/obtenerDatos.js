function simularPeticionAPI() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Datos recibidos correctamente");
    }, 5000); 
  });
}

async function obtenerDatos() {
  try {
    console.log("Esperando datos...");
    const resultado = await simularPeticionAPI();
    console.log("Resultado:", resultado);
  } catch (error) {
    console.error("Error:", error);
  }
}

obtenerDatos();