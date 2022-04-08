import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Dimensions } from 'react-native';
const App = () => {
  return (
    <View>
      <View style={{
        height: 70,
        marginTop: 40,
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
          fontSize: 30
        }}>Sathi Shikdar</Text>
      </View>
      <ScrollView>

      </ScrollView>
    </View>
  )
}
export default App;