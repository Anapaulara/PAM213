
//1.imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React,{useState} from 'react';

//2.Main: Zona de componentes
export default function App() {
  const [contador,setContador]=useState(0);
  return (
    <View style={styles.container}>
      <Text style ={styles.texto}> Contador:</Text> 
      <Text style = {styles.texto2}> {contador} </Text> 

      <View style={styles.botonesContainer}>
      <Button color="red" title="Agregar" onPress={()=>setContador(contador+1)}/>
      <Button color="blue" title="Quitar" onPress={()=>setContador(contador-1)}/>  
      <Button color="purple" title="Reiniciar" onPress={()=>setContador(0)}/> 
      </View>
       

      <StatusBar style="auto" />
    </View>
  );
}
//3.Estilos: Zona de estetica y posicionamiento.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcef1ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color:'#aa1e9cff',
    fontSize: 30,
    fontFamily:'Times New Roman',
    fontWeight:'blod',
    fontStyle:'italic',
    textDecorationLine:'line-through',
  },
  texto2:{
    color:'#b9021bff',
    fontSize: 35,
    fontFamily:'Courier',
    fontWeight:'400',
    fontStyle:'normal',
    textDecorationLine:'underline',
  },
  botonesContainer:{
    marginTop: 15,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap:25,
  },
});
