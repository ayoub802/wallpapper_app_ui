import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/AppNavigation';
import "react-native-url-polyfill/auto"
import OneSignal from 'react-native-onesignal';
export default function App() {
  OneSignal.setAppId("101981c2-dfd6-4264-87cc-f39822c84967");
  return (
    <AppNavigation />
  );
}

