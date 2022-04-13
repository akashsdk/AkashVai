import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native'

const CartTow = (props) => {
    const [height, setHeight] = React.useState(110)
    const style = StyleSheet.create({
        container: {
            margin: 10,
            backgroundColor: 'white',
            shadowOffset: {
                height: 2,
                width: 2
            },
            shadowColor: 'black',
            shadowOpacity: .4,
            shadowRadius: 5,
            elevation: 5,
            borderRadius: 10,
            padding: 10
        }
    })
    return (
        <View style={style.container}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Image style={{
                    height: 80,
                    width: 80,
                    borderRadius: 40
                }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAEb4vYaXPxxMMFRmrz4asb49Dz0PkNu1cPw&usqp=CAU' }} />
                <View style={{ margin: 10 }}>
                    <Text>Tanim Khan</Text>
                    <Text>Graphics Designer</Text>
                </View>
            </View>
            <View style={{
                height: height,
                overflow: 'hidden'
            }}>
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>
            <View style={{
                alignItems: 'flex-end',
            }}>
                {
                    height == 110 ? (
                        <TouchableOpacity onPress={() => {
                            setHeight('auto');
                        }} style={{
                            margin: 10
                        }}>
                            <Text style={{
                                color: 'red',
                                fontWeight: 500,
                            }}>Read More</Text>
                        </TouchableOpacity>
                    ):(
                        <View></View>
                    )
                }
            </View>
        </View>
    );
};

export default CartTow;