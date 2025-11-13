import { View, Text, FlatList, StyleSheet } from 'react-native'
import {useState} from 'react'

class Producto{
  constructor(id, titulo, descripcion, precio){
    this.id= id; 
    this.titulo=titulo; 
    this.descripcion=descripcion; 
    this.precio=precio; 
  }
}

export const productos2 = [
  new Producto('1', 'Mascara de pestañas', 'Experiementa algo sensacional', 99),
  new Producto('2', 'Rubor', 'Experiementa algo sensacional', 99),
  new Producto('3', 'Corrector', 'Experiementa algo sensacional', 99),
  new Producto('4', 'Contorno', 'Experiementa algo sensacional', 99),
];

const FlatListScreen = () => {
  const [productList, setProductList]= useState(productos2); 
  return (
    <View style={styles.lista}>
      <FlatList
      data={productList}
      keyExtractor={(item) => item.id}
      renderItem={({item})=> (
        <View style={styles.item}>
          <Text>{item.titulo}</Text>
          <Text>{item.descripcion}</Text>
          <Text>{item.precio}</Text>
          <Text>Ver detalles</Text>
        </View>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    lista: {
      paddingVertical: 200
    },
    item: {
      padding: 15, // Espacio interno del item
      marginVertical: 8, // Separación vertical entre items
      marginHorizontal: 16, // Separación horizontal desde los bordes
      backgroundColor: '#f0f0f0', 
    }
}); 

export default FlatListScreen