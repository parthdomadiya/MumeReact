import { View, Text, SafeAreaView, Dimensions, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Switch, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper';
import { TextInput, } from 'react-native-paper';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import RBSheet from 'react-native-raw-bottom-sheet';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Alumb() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{height:Platform.OS === 'ios' ? height : height*1.01}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                    <Text style={[style.subtitle, { color: theme.txt, }]}>68 albums</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[style.b16, { color: Colors.primary, marginRight: 5 }]}>Date Modified</Text>
                        <Icon name='swap-vertical' size={20} color={Colors.primary} />
                    </TouchableOpacity>
                </View>
                <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {  navigation.navigate('AlubmDetail') }}
                    style={{ flex: 1 }}>

                        <ImageBackground source={require('../../assets/image/s24.png')} resizeMode='stretch' style={{ height: height / 5.5, }} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={[style.subtitle, { color: theme.txt }]}>Dawn FM</Text>
                            <Icons name='dots-vertical' size={20} color={theme.txt} />
                        </View>
                        <Text style={[style.m12, { color: theme.txt2, marginTop: 7 }]}>The Weeknd  |  2022  16 songs</Text>
                    </TouchableOpacity>
                    <View style={{ marginHorizontal: 5 }}></View>
                    <View style={{ flex: 1 }}>
                        <ImageBackground source={require('../../assets/image/s25.png')} resizeMode='stretch' style={{ height: height / 5.5, }} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={[style.subtitle, { color: theme.txt }]}>Sweetener</Text>
                            <Icons name='dots-vertical' size={20} color={theme.txt} />
                        </View>
                        <Text style={[style.m12, { color: theme.txt2, marginTop: 7 }]}>Ariana Grande  |  2021  16 songs</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' ,marginTop:15}}>
                    <View style={{ flex: 1 }}>
                        <ImageBackground source={require('../../assets/image/s26.png')} resizeMode='stretch' style={{ height: height / 5.5, }} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={[style.subtitle, { color: theme.txt }]}>First Impact</Text>
                            <Icons name='dots-vertical' size={20} color={theme.txt} />
                        </View>
                        <Text style={[style.m12, { color: theme.txt2, marginTop: 7 }]}>Treasure  |  2021  14 songs</Text>
                    </View>
                    <View style={{ marginHorizontal: 5 }}></View>
                    <View style={{ flex: 1 }}>
                        <ImageBackground source={require('../../assets/image/s27.png')} resizeMode='stretch' style={{ height: height / 5.5, }} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={[style.subtitle, { color: theme.txt }]}>Pain (Official)</Text>
                            <Icons name='dots-vertical' size={20} color={theme.txt} />
                        </View>
                        <Text style={[style.m12, { color: theme.txt2, marginTop: 7 }]}>Ryan Jones  |  2021  18 songs</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' ,marginTop:15,marginBottom:20}}>
                    <View style={{ flex: 1 }}>
                        <ImageBackground source={require('../../assets/image/s28.png')} resizeMode='stretch' style={{ height: height / 5.5, }} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={[style.subtitle, { color: theme.txt }]}>Lorem Ipsum</Text>
                            <Icons name='dots-vertical' size={20} color={theme.txt} />
                        </View>
                        <Text style={[style.m12, { color: theme.txt2, marginTop: 7 }]}>Nova  |  2021  15 songs</Text>
                    </View>
                    <View style={{ marginHorizontal: 5 }}></View>
                    <View style={{ flex: 1 }}>
                        <ImageBackground source={require('../../assets/image/s29.png')} resizeMode='stretch' style={{ height: height / 5.5, }} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={[style.subtitle, { color: theme.txt }]}>Lorem Ipsum</Text>
                            <Icons name='dots-vertical' size={20} color={theme.txt} />
                        </View>
                        <Text style={[style.m12, { color: theme.txt2, marginTop: 7 }]}>Acidrap  |  2022  22 songs</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}