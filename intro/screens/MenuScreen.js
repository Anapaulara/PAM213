import { Text, StyleSheet, View, Button} from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TextInputScreen from './TextInputScreen';
import ImageBackgroungScreen from './ImageBackgroungScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicadorScreen from './ActivityIndicadorScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import BottomSheetScreen from './BottomSheetScreen';

export default function MenuScreen() {

    const [screen,setScreen] = useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreen/>
        case 'botones':
            return <BotonesScreen/>
        case 'text':
            return <TextInputScreen/>
        case 'image':
            return <ImageBackgroungScreen/>
        case 'scroll':
            return <ScrollViewScreen/>
        case 'activityIndicator':
            return <ActivityIndicadorScreen/>
        case 'flatList':
            return <FlatListScreen/>
        case 'modal':
            return <ModalScreen/>
        case 'bottomSheet':
            return <BottomSheetScreen/>
        case 'menu':
            default:
                    return (
                        <View>
                        <Text>Menu de Practicas</Text>
                        <Button title='Pract:Contador' onPress={()=>setScreen('contador')}/>
                        <Button title='Pract:Buttons' onPress={()=>setScreen('botones')}/>
                        <Button title='Pract:TextInput' onPress={()=>setScreen('text')}/>
                        <Button title='Pract:ImageBackgroung' onPress={()=>setScreen('image')}/>
                        <Button title='Pract:ScrollView' onPress={()=>setScreen('scroll')}/>
                        <Button title='Pract:ActivityIndicator' onPress={()=>setScreen('activityIndicator')}/>
                        <Button title='Pract:FlatList' onPress={()=>setScreen('flatList')}/>
                        <Button title='Pract:Modal' onPress={()=>setScreen('modal')}/>
                        <Button title='Pract:BottomSheet' onPress={()=>setScreen('bottomSheet')}/>

                        </View>
                    )
    }
 
}

const styles = StyleSheet.create({})