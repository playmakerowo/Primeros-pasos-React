//import { TouchableOpacity, StyleSheet, Text } from "react-native-web";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';



export default function Boton ({onPress, text="Boton"}){
    return(
        <>
        <TouchableOpacity style={styles.areatocable} onPress={onPress}>
            <Text>{text}</Text>
        </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create(
    {    
        areatocable:{
            backgroundColor: '#ccc',
            padding: 10,
            borderRadius: 15,
            marginTop: 10,
            margin: 10,
        }
    }
)