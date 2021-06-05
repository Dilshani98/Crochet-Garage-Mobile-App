import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import {StyleSheet, Text, TextInput, View } from 'react-native';
import *as location from expo-location;

export default function App() {
const [error, seterror] = useState(null)



  return (
    <View style={styles.container}>
      <Text>Crochet Garage</Text>
      <TextInput></TextInput>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
