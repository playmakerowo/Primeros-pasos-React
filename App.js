import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import Boton from './components/boton';
//import { ScrollView } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';

export default function App() {

  //FORMA DE USAR STACKS TRADICIONAL
  const Stack = createNativeStackNavigator();

  //FORMA DE USAR TABS TRADICIONAL (BOTONES INFERIORES TIPO INSTAGRAM)
  const Tab = createBottomTabNavigator();

  return (
    <>
      <ScrollView style={styles.scroll} contentContainerStyle={{ flexGrow: 2 }}>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Tab.Navigator>
            <Tab.Screen name="HOME" component={Home} options={{
              headerShown: false, tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }} ></Tab.Screen>
            <Tab.Screen name="PAGINA 1" component={ScreenOne} options={{
              headerShown: false, tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="bell" color={color} size={size} />
              )
            }}></Tab.Screen>
            <Tab.Screen name="PAGINA 2" component={ScreenTwo} options={{
              headerShown: false, tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="bell" color={color} size={size} />)
            }}></Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </ScrollView>
    </>
  );
  //FORMA TRADICIONAL DE HACER TRANCISIONES NO SE RECOMIENDA
  /*
  const [view, setView] = useState("Home");

  const renderView = () => {
    switch (view) {
      case "Home":
        return <Home setView={setView}></Home>
      case "ScreenOne":
        return <ScreenOne setView={setView}></ScreenOne>
      case "ScreenTwo":
        return <ScreenTwo setView={setView}></ScreenTwo>
    }
  }

  return (
    <>
      <StatusBar style="auto" />
      {renderView()}
      <Boton text='Haz tu donacion'></Boton>
    </>
  )*/
}


const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'blue',
    flex: 1,
  }
});   
