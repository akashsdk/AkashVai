import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react'
import Button from './component/Button'

export default function App() {
  const [a, setA] = useState('ok')
  return (
    <View> 
      <Button a={a} setA={setA}/>
      <Button a={a} color='blue' setA={setA}/>
      <Button a={a} color='blue' setA={setA}/>
    </View>
  );
}