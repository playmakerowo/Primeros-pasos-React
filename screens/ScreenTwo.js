//import { StyleSheet, Text } from "react-native-web";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Boton from "../components/boton";

const ScreenTwo = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>ScreenTwo</Text>
            </View>
            <View>
                <Text style={styles.titulo}>ScreenTwo</Text>
                <Boton
                    onPress={() => navigation.navigate("Home")} text='Ir a Menu'></Boton>
                <Boton
                    onPress={() => navigation.navigate("ScreenOne")} text='Ir a ScreenOne'></Boton>
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
            backgroundColor: "#FCC",
            alignItems: "center",
            justifyContent: "center",
        },
        headerText: {
            fontSize: 50
        }

});

export default ScreenTwo;
