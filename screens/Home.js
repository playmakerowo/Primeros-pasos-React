import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Boton from "../components/boton";

const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Home</Text>
            </View>
            <View>
                <Text style={styles.titulo}>Menu</Text>
                <Boton
                    onPress={() => navigation.navigate("ScreenOne")} text='Ir a Screen 1'></Boton>
                <Boton
                    onPress={() => navigation.navigate("ScreenTwo")} text='Ir a Screen 2'></Boton>
            </View>
        </View>
    )
}

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
            backgroundColor: "purple",
            alignItems: "center",
            justifyContent: "center",
        },
        headerText: {
            fontSize: 50,
            color: '#ccc',
        }

    }
)

export default Home;