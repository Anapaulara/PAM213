import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import MiGaleriaScreen from './MiGaleriaScreen';
import FlatListScreen from './FlatListScreen';

export default function MenuScreen() {

  const [screen,setScreen] = useState('principal'); 
    switch(screen){
       case 'migaleria':
        return <MiGaleriaScreen/>
      case 'principal':
        default:
          return (
             <View style={styles.botonesContainer}>
                <Text>Mi Galeria </Text>
                <Button color = "pink" title='Mi galeria' onPress={()=>setScreen('migaleria')}/>
                 </View>
          )
        }
    }

const styles = StyleSheet.create({
  botonesContainer:{
      flex: 1,
      marginTop: 15,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 30,
  }
})