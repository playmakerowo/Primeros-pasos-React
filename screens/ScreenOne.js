//import { StyleSheet, Text } from "react-native-web";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Boton from "../components/boton";

const ScreenOne = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>ScreenOne</Text>
            </View>
            <View>
                <Text style={styles.titulo}>ScreenOne</Text>
                <Boton
                    onPress={() => navigation.navigate("Home")}
                    text='Ir a Menu'>

                </Boton>
                <Boton
                    onPress={() => navigation.navigate("ScreenTwo")}
                    text='Ir a ScreenTwo'>

                </Boton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff',
        },
        titulo: {
            color: 'blue',
            fontSize: 30,
            textAlign: 'center',
        },
        header: {
            flex: 0.2,
            backgroundColor: "#CFC",
            alignItems: "center",
            justifyContent: "center",
        },
        headerText: {
            fontSize: 50,
            color: '#000',
        }
});

export default ScreenOne;
