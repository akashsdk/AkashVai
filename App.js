import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import  Button  from './component/Button';

export default function App() {
  const [a, setA] 
}
const App = () => {
  
  return (
    <View>
    <Button/>
      <View style={{
        height: 70,
        marginTop: 41,
        display: 'flex',
        flexDirection: 'row'

      }}>
        <View style={{
          backgroundColor: 'red',
          height: 30,
          width: 30,
          borderRadius: 15,
          margin: 20,
        }}></View>
        <Text style={{
          margin: 20,
          fontSize: 30,
        }}>Sathi Shikdar fnot</Text>
      </View>
      <ScrollView>

      </ScrollView>
    </View>
  )
}
export default App;