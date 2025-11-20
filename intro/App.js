import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MenuScreen from './screens/MenuScreen'; 


//2.Main: Zona de componentes
export default function App() {
 
  return (
    <GestureHandlerRootView style={{felx:1}}>
    <MenuScreen/>  
    </GestureHandlerRootView>
   
  
  );
}