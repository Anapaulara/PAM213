// Primero importamos React y el hook useState, que nos va a permitir manejar datos que cambian.
// Luego importamos los componentes que vamos a usar desde React Native.
import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';

// Este es nuestro componente principal, donde va todo el contenido de la pantalla.
export default function AppScrollView() {

  // Aquí creo una lista (arreglo) con tres opciones iniciales.
  // useState me permite guardar esa lista y actualizarla después.
  const [items, setItems] = useState(["Opción 1", "Opción 2", "Opción 3"]);

  // -----------------------------------------------------------
  // FUNCIÓN PARA AGREGAR UNA NUEVA OPCIÓN
  // -----------------------------------------------------------
  // Esta función se ejecuta cuando presionamos el botón "Agregar opción".
  // Lo que hace es crear una nueva opción con el número que sigue y añadirla a la lista.
  const agregarOpcion = () => {
    const nuevaOpcion = `Opción ${items.length + 1}`; // Crea el texto de la nueva opción
    setItems([...items, nuevaOpcion]); // Agrega la nueva opción a la lista existente
  };

  // -----------------------------------------------------------
  // FUNCIÓN PARA BORRAR LA ÚLTIMA OPCIÓN
  // -----------------------------------------------------------
  // Esta función se activa cuando damos clic en "Borrar última".
  // Solo borra las opciones nuevas que agregamos, no las tres originales.
  const borrarUltima = () => {
    if (items.length > 3) { // Si hay más de tres opciones
      setItems(items.slice(0, items.length - 1)); // Borra la última
    } else {
      alert("Solo se borran las opciones que agregaste nuevas"); // Muestra mensaje si intentamos borrar las base
    }
  };

  // -----------------------------------------------------------
  // AQUÍ VIENE LO QUE SE MUESTRA EN PANTALLA
  // -----------------------------------------------------------
  return (
    // La vista principal donde irá todo el contenido visual
    <View style={styles.container}>

      {/* Este texto es el título que aparece arriba */}
      <Text style={styles.title}> Ejemplo de ScrollView</Text>

      {/* 
        Aquí usamos el componente ScrollView.
        ScrollView nos sirve para poder desplazarnos, ya sea vertical u horizontalmente,
        cuando hay muchos elementos en pantalla.
      */}
      <ScrollView
        style={styles.scroll} // Estilo visual del ScrollView
        contentContainerStyle={styles.content} // Estilo interno del contenido
        horizontal={true} // Lo ponemos en modo horizontal
        showsVerticalScrollIndicator={false} // Ocultamos la barra vertical
        persistentScrollbar={true} // La barra de desplazamiento se mantiene visible
        scrollEnabled={true} // Activamos el desplazamiento
        keyboardDismissMode="on-drag" // Si hay teclado abierto, se cierra al arrastrar
      >
        {/* 
          Este bloque recorre la lista de opciones y muestra cada una dentro de una cajita azul.
          Cada cajita tiene un texto con el nombre de la opción.
        */}
        {items.map((item, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}
      </ScrollView>

      {/* 
        En la parte de abajo colocamos dos botones:
        uno para agregar opciones y otro para borrar la última.
      */}
      <View style={styles.buttonContainer}>
        <Button title="Agregar opción" color="#4d8a71ff" onPress={agregarOpcion} />
        <View style={styles.space} /> {/* Este View solo deja espacio entre botones */}
        <Button title="Borrar última" color="#d99d4fff" onPress={borrarUltima} />
      </View>
    </View>
  );
}

/////////////////////////////////////////////////////////
// ESTILOS DE NUESTRA APLICACIÓN
/////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  // Estilo general del contenedor principal
  container: { 
    flex: 1, // Ocupa toda la pantalla
    padding: 20, // Espacio interno
    backgroundColor: '#EEF2FF', // Fondo color lavanda claro
  },

  // Estilo del título principal
  title: { 
    fontSize: 26, // Tamaño grande
    fontWeight: 'bold', // En negrita
    textAlign: 'center', // Centrado
    marginVertical: 15, // Espacio arriba y abajo
    color: '#2C3E50', // Color del texto
  },

  // Estilo visual del ScrollView
  scroll: { 
    flex: 1,
    marginBottom: 15, // Espacio debajo
    borderRadius: 10, // Bordes redondeados
    backgroundColor: '#F9FAFB', // Fondo casi blanco
  },

  // Estilo del contenido interno dentro del ScrollView
  content: { 
    paddingVertical: 15, // Espacio vertical
    alignItems: 'center', // Centra las cajitas
  },

  // Cada cajita azul donde se muestra una opción
  box: {
    backgroundColor: '#82B6ED', // Azul claro
    width: '90%', // Ocupa el 90% del ancho
    padding: 20, // Espacio interno
    marginVertical: 10, // Espacio entre cajas
    borderRadius: 15, // Bordes redondeados
    elevation: 3, // Sombra en Android
    shadowColor: '#000', // Color de sombra
    shadowOpacity: 0.2, // Transparencia de sombra
    shadowRadius: 5, // Difuminado de sombra
  },

  // Estilo del texto dentro de cada caja
  text: { 
    fontSize: 18, 
    color: '#1F2937', 
    textAlign: 'center',
  },

  // Contenedor de los botones
  buttonContainer: {
    flexDirection: 'row', // Los coloca uno al lado del otro
    justifyContent: 'center', // Centra los botones horizontalmente
    marginBottom: 10, // Espacio inferior
  },

  // Espacio entre los dos botones
  space: {
    width: 10, // Define el espacio entre ellos
  },
});
