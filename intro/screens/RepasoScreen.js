import React, { useEffect, useState } from 'react';
import {View, Text, TextInput, StyleSheet, Button, Alert, Platform, Image, ImageBackground, StatusBar, Switch,} from 'react-native';

const SPLASH_IMG = require('../assets/Recursos/imagen.png');   
const FONDO_IMG = require('../assets/Recursos/imagen2.jpeg');  
const LOGO_IMG = require('../assets/Recursos/imagen3.jpeg');   

export default function RepasoScreen() {
  const [nombre, setNombre] = useState('');             
  const [correo, setCorreo] = useState('');               
  const [aceptaTerminos, setAceptaTerminos] = useState(false); 
  const [mostrarSplash, setMostrarSplash] = useState(true);    

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarSplash(false); 
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const mostrarAlerta = () => {
    if (nombre.trim() === '') {
      Platform.OS === 'web'
        ? window.alert('Error: Ingrese su nombre correctamente')
        : Alert.alert('Error', 'Ingrese su nombre correctamente');
      return;
    }

    if (correo.trim() === '') {
      Platform.OS === 'web'
        ? window.alert('Error: Ingrese su correo correctamente')
        : Alert.alert('Error', 'Ingrese su correo correctamente');
      return;
    }

    if (!aceptaTerminos) {
      Platform.OS === 'web'
        ? window.alert('Error: Debe aceptar los términos y condiciones')
        : Alert.alert('Error', 'Debe aceptar los términos y condiciones');
      return;
    }

    const mensaje = `Usuario ${nombre} con correo ${correo} registrado correctamente`;
    Platform.OS === 'web'
      ? window.alert(mensaje)
      : Alert.alert('Registro Exitoso', mensaje);
  };

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
          <Text style={styles.splashTitle}>Mi App</Text>
          <Text style={styles.splashSubtitle}>Cargando aplicación...</Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      source={FONDO_IMG}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <View style={styles.mainScreen}>
        <View style={styles.formContainer}>
          <Text style={styles.titulo}>Registro de Usuario</Text>

          <TextInput
            style={styles.recuadro}
            placeholder="Nombre completo"
            value={nombre}
            onChangeText={setNombre}
            maxLength={50}
          />

          <TextInput
            style={styles.recuadro}
            placeholder="Correo electrónico"
            value={correo}
            keyboardType="email-address"
            onChangeText={setCorreo}
            maxLength={40}
          />

          <View style={styles.switchContainer}>
            <Text style={styles.textoTerminos}>Aceptar términos y condiciones</Text>
            <Switch value={aceptaTerminos} onValueChange={setAceptaTerminos} />
          </View>

          <Button title="Registrar" color="blue" onPress={mostrarAlerta} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,         
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