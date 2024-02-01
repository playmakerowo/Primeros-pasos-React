import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Boton from './boton';

//estas importaciones web solo se usan si quiero ejecutar la version de web de lo contrario se deben quitar por probelmas de compatibilidad 
//import { View, StyleSheet, Text } from "react-native-web";

export default function Contador({ navigation }) {
  const [contador, setContador] = useState(0);

  const aumentarNumero = () => {
    const nuevoValor = contador + 1;
    setContador(nuevoValor);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador</Text>
      <Text style={styles.contador}> {contador}</Text>
      <Boton
        onPress={aumentarNumero}
        text={"Aumentar numero a: " + (contador + 1)}></Boton>
      <Boton
        onPress={() => navigation.navigate("home")} text='Volver a home'></Boton>
      <Boton
        onPress={() => navigation.navigate("contador2")} text='IR A CONTADOR 2'></Boton>
      <Text style={styles.texto}>Solo para aclarar contador 1 y 2 son el mismo componente (contador.js) es un experimento que sirve para demostrar que solo con delcarar la ruta puedes tener dos pestañas que te lleven al mismo componente</Text>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      fontFamily: "Comic Sans MS",
      color: 'blue',
      fontSize: 40,
      textAlign: 'center',
    },
    texto: {
      fontFamily: "Comic Sans MS",
      fontSize: 15,
      textAlign: 'center',
      padding: 10,
      backgroundColor: 'gray',
    },
    contador: {
      fontFamily: "Comic Sans MS",
      color: 'red',
      fontSize: 50,
      textAlign: 'center',
    },
  }
)