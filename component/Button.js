import React from "react";
import { ScrollView, View, Text, TouchableOpacity, Dimensions } from 'react-native';
 const Button =() => {
     return (
         <TouchableOpacity onPress={() =>{
             let a=10;
             console.log(a);
         }} style={{
             height:30,
             width: 30,
             backgroundColor:'red'
         }}>

         </TouchableOpacity>
     )
 }
 export default Button