
//1.imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import ContadorScreen from './screens/ContadorScreen'; 


//2.Main: Zona de componentes
export default function App() {
 
  return (
    <ContadorScreen></ContadorScreen>
  
  );
}