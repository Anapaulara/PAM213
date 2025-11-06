import React, {useState, useEffect} from 'react'; 
import {View, Text, TextInput, StyleSheet, Button, Alert, Platform, Image, ImageBackground, StatusBar, Switch,} from 'react-native';

const SPLASH_IMAGE = require ('../assets/Recursos/imagen.png');
const MAIN_IMAGE = require ('../assets/Recursos/imagen2.webp');
const LOGO_IMAGE = require ('../assets/Recursos/imagen3.jpg');


export default function MiGaleriaScreen(){

    const [nombre, setNombre] = useState(''); 
    const [items, setItems] = useState(["1", "2", "3"]);
    const [isLoading, setIsLoading] = useState(true);
    const [mostrarSplash, setMostrarSplash] = useState(true); 

    useEffect(()=> {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 3000);
  return () => clearTimeout(timer);
  }, []); 

 if (mostrarSplash) {
    return (
      <ImageBackground
        source={SPLASH_IMG}
        style={styles.background}
        resizeMode="cover"
      >
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <View style={styles.splashOverlay}>
          <Image source={LOGO_IMG} style={styles.logo} resizeMode="contain" />
          <Text style={styles.splashTitle}>Mi Galeria</Text>
          <Text style={styles.splashSubtitle}>Cargando aplicación...</Text>
        </View>
      </ImageBackground>
    );
  }
     return (
    <View style={styles.container}>
      <Text style={styles.title}> Ejemplo de ScrollView</Text>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        persistentScrollbar={true}
        scrollEnabled={true}
        keyboardDismissMode="on-drag"
      >
        {items.map((item, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button title="Agregar opción" color="#4d8a71ff" onPress={agregarOpcion} />
        <View style={styles.space} />
        <Button title="Borrar última" color="#d99d4fff" onPress={borrarUltima} />
      </View>
    </View>
  );

}


const styles = StyleSheet.create({
  background: {
    flex: 1,               // Ocupa toda la pantalla
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  });

