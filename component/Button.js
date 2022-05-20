import React from 'react';
import {TouchableOpacity,Text} from 'react-native'

const Button = (props) => {
    return (
        <TouchableOpacity onPress={()=>{}} style={{
            
            width:300,
            height:100,
            borderRadius:10,
            justifyContent:'center',
            alignItems: 'center',
            borderWidth:2,
            backgroundColor:props.color?props.color:'green',
        }}>
            <Text style={{
                color:'black',
                fontSize:31
            }}>{props.a}</Text>


            <Text> Thank You</Text>
        </TouchableOpacity>
    );
};

export default Button;
