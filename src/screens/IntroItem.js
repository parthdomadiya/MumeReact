import { View, Text, Image, Dimensions, TouchableOpacity, SafeAreaView, ImageBackground, StatusBar, } from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function IntroItem({ item }) {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={{ width: width, backgroundColor: theme.bg }}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <View style={{ flex: 2.5, paddingTop:40 }}>
                <ImageBackground source={item.bg} resizeMode='stretch'
                    style={{ width: width, height: height /2,  }}>
                    <Image source={item.img}
                        style={{ width: width, height: height/1.8 ,  resizeMode: 'stretch' ,}} />
                </ImageBackground>
            </View>
            <View style={{ flex: 1.5, paddingHorizontal: 20, backgroundColor: theme.bg, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                <View style={{ paddingTop: 20 }}>
                    <Text style={[style.title, { textAlign: 'center', color: theme.txt, fontSize: 35 }]}>{item.title1}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}