import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import DetaileScreen from '../screens/DetaileScreen';
import { StatusBar } from 'expo-status-bar';


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar style='dark'/> 
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false}}>
        <Stack.Screen name='Welcome' component={WelcomeScreen}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='ImageDetail' component={DetaileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation