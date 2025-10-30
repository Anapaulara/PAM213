import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TextInputScreen from './TextInputScreen'
import ImageBackgroungScreen from './ImageBackgroungScreen'
import ScrollViewScreen from './ScrollViewScreen'
import ActivityIndicatorScreen from './ActivityIndicatorScreen'
import FlatListScreen from './FlatListScreen'
import ModalScreen from './ModalScreen'
import BottomScreen from './BottomScreen'
import RepasoScreen from './RepasoScreen'

export default function MenuScreen() {

  const [screen,setScreen] = useState('menu');

  switch(screen){
      case 'contador':
        return <ContadorScreen/>
      case 'botones':
        return <BotonesScreen/>
      case 'texto':
        return <TextInputScreen/>
      case 'imagen':
        return <ImageBackgroungScreen/>
      case 'scroll':
        return <ScrollViewScreen/>
      case 'actividad':
        return <ActivityIndicatorScreen/>
      case 'lista':
        return <FlatListScreen/>
      case 'modal':
        return <ModalScreen/>
      case 'bottom':
        return <BottomScreen/>
      case 'repaso':
        return <RepasoScreen/>
      case 'menu':
        default:
          return (
              <View style={styles.botonesContainer}>
                <Text style ={styles.texto}> Menu Practicas:</Text> 
                <Button color = "pink" title='Pract:Contador' onPress={()=>setScreen('contador')}/>
                <Button color = "pink" title='Pract:Buttons' onPress={()=>setScreen('botones')}/>
                <Button color = "pink" title='Pract:Text Input & Alert' onPress={()=>setScreen('texto')}/>
                <Button color = "pink" title='Pract:Image Backgroung & SlapshScreen' onPress={()=>setScreen('imagen')}/>
                <Button color = "pink" title='Pract:ScrollView' onPress={()=>setScreen('scroll')}/>
                <Button color = "pink" title='Pract:ActivityIndicator' onPress={()=>setScreen('actividad')}/>
                <Button color = "pink" title='Pract:FlatList' onPress={()=>setScreen('lista')}/>
                <Button color = "pink" title='Pract:Modal' onPress={()=>setScreen('modal')}/>
                <Button color = "pink" title='Pract:Bottom Sheet' onPress={()=>setScreen('bottom')}/>
                <Button color = "pink" title='Pract:Repaso' onPress={()=>setScreen('repaso')}/>
              </View>
          )
  }

}

const styles = StyleSheet.create({
   texto:{
    color:'#aa1e9cff',
    fontSize: 30,
    fontFamily:'Times New Roman',
    fontWeight:'blod',
    fontStyle:'italic',
    textDecorationLine:'underline',
  },
  botonesContainer:{
      flex: 1,
      marginTop: 15,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 30,
  }
})