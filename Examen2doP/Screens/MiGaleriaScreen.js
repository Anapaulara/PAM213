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
  splashOverlay: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashTitle: {
    color: '#000', 
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },
  splashSubtitle: {
    color: '#000', 
    fontSize: 16,
    marginTop: 5,
  },
  logo: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#000',
  },
  mainScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  formContainer: {
    backgroundColor: 'rgba(255,255,255,0.8)', 
    padding: 25,
    borderRadius: 15,
    width: '85%',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000', 
    marginBottom: 20,
    textAlign: 'center',
  },
  recuadro: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 15,
    color: '#000', 
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    justifyContent: 'space-between',
  },
  textoTerminos: {
    color: '#000', 
    fontSize: 16,
    marginRight: 10,
  },
});

