import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useState } from 'react'
import Button from './component/Button'
import Cart from './cart/Cart'
import Home from './screen/Home'
import CartTow from './cart/CartTow';


export default function App() {
  const [a, text, setA] = useState('ok')
  return (
    <ScrollView>
      <Button a={a} setA={setA} />
      <Button a={a} color='blue' setA={setA} />
      <Button a={a} setA={setA} />
      <Button a={a} color='red' setA={setA} />
      <Cart nText="Tasnim" text="nhjbb jdbgfid bdhifiyhfoajoiefh kjbdfhduf9huwdhfo sdijbfudhvudvod kjdbvuhdsuvhdvd kjdsbvubds"></Cart>
      <Cart nText="alakshb" text="Fuck" />
    </ScrollView>
  );
}