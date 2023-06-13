import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context'

import HomeScreen from './Screens/HomeScreen'

export default function App() {
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <HomeScreen/>
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
