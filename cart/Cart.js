import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

const Cart = (props) => {
    const [height, setHeight] = React.useState(200)
    const style = StyleSheet.create({
        body: {
            height: height,
            borderWidth: 1,
            margin: 20,
        },
        logo: {
            width: 50,
            height: 50,
            borderRadius: 25,
        },
        ViewImage: {
            display: 'flex',
            flexDirection: 'row',
            marginTop: 20,
            marginLeft: 20,
        },
        ViewText: {
            marginLeft: 20,
            marginTop: 5,
        },
        TextRead: {
            color: 'red',
            marginLeft: 300,
        },
    })
    return (
        <View style={style.body}>
            {
                height === 200 ? (
                    <TouchableOpacity onPress={() => {
                        setHeight(300);
                    }}>
                        <View style={style.ViewImage}>
                            <Image
                                style={style.logo}
                                source={{
                                    uri: 'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/photos/term-bg-1-c98135712157fb21286eafd480f610f9.jpg',
                                }}
                            />
                            <View style={style.ViewText}>
                                <Text> {props.nText}</Text>
                                <Text style={{ marginTop: 5, }}>OK Done</Text>
                            </View>
                        </View>
                        <View style={{
                            height: 100,
                            overflow: 'hidden',
                        }}>
                        <Text style={{ margin: 20, }}>{props.text}</Text>
                        </View>
                        <Text style={style.TextRead}>Read More</Text>

                    </TouchableOpacity>
                ) : (
                    <View>
                        <View style={style.ViewImage}>
                            <Image
                                style={style.logo}
                                source={{
                                    uri: 'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/photos/term-bg-1-c98135712157fb21286eafd480f610f9.jpg',
                                }}
                            />
                            <View style={style.ViewText}>
                                <Text> {props.nText} </Text>
                                <Text style={{ marginTop: 5, }}>OK Done</Text>
                            </View>
                        </View>
                        <Text style={{ margin: 20, }}>{props.text}</Text>
                        <TouchableOpacity onPress={() => {
                        setHeight(200);
                    }}>
                            <Text style={style.TextRead}>Back</Text>
                        </TouchableOpacity>
                    </View>
                )
            }

        </View>
    );
};

export default Cart;