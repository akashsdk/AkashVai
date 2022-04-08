import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import  Button  from './component/Button';

export default function App() {
  const [a, setA] = userSelect ('ok')
  return (
    <View>
      <Button/>
    </View>
  )
}
