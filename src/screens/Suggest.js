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

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Suggest() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                    <Text style={[style.subtitle, { color: theme.txt, }]}>Recently Played</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RecentPlay')}>
                        <Text style={[style.b16, { color: Colors.primary }]}>See All</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 15 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                        <View style={{ width: width / 3, }}>
                            <Image source={require('../../assets/image/s5.png')} style={{ height: height / 7, width: width / 3, resizeMode: 'stretch', }} />
                            <Text style={[style.b18, { color: theme.txt,marginTop:5 }]}>Shades of Love - Ania Szarm..</Text>
                        </View>
                        <View style={{ width: width / 3, marginHorizontal: 10 }}>
                            <Image source={require('../../assets/image/s6.png')} style={{ height: height / 7, width: width / 3, resizeMode: 'stretch', }} />
                            <Text style={[style.b18, { color: theme.txt,marginTop:5}]}>Without You - The Kid LAROI</Text>
                        </View>
                        <View style={{ width: width / 3, }}>
                            <Image source={require('../../assets/image/s7.png')} style={{ height: height / 7, width: width / 3, resizeMode: 'stretch', }} />
                            <Text style={[style.b18, { color: theme.txt,marginTop:5 }]}>Save Your Tears The We</Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                    <Text style={[style.subtitle, { color: theme.txt, }]}>Artists</Text>
                    <TouchableOpacity>
                        <Text style={[style.b16, { color: Colors.primary }]}>See All</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 15 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                        <View style={{alignItems:'center' }}>
                            <Avatar.Image source={require('../../assets/image/s8.png')} size={100} style={{ backgroundColor: theme.bg }} />
                            <Text style={[style.b18, { color: theme.txt,marginTop:5}]}>Ariana Grande</Text>
                        </View>
                        <View style={{ marginHorizontal: 12 ,alignItems:'center'}}>
                            <Avatar.Image source={require('../../assets/image/s9.png')} size={100} style={{ backgroundColor: theme.bg }} />
                            <Text style={[style.b18, { color: theme.txt,marginTop:5 }]}>The Weeknd</Text>
                        </View>
                        <View style={{ alignItems:'center'}}>
                            <Avatar.Image source={require('../../assets/image/s10.png')} size={100} style={{ backgroundColor: theme.bg }} />
                            <Text style={[style.b18, { color: theme.txt,marginTop:5 }]}>Acidrap</Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                    <Text style={[style.subtitle, { color: theme.txt, }]}>Most Played</Text>
                    <TouchableOpacity>
                        <Text style={[style.b16, { color: Colors.primary }]}>See All</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 15 ,marginBottom:20}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                        <View style={{ width: width / 3, }}>
                            <Image source={require('../../assets/image/s11.png')} style={{ height: height / 7, width: width / 3, resizeMode: 'stretch', }} />
                            <Text style={[style.b18, { color: theme.txt,marginTop:5 }]}>About Damn Time - Lizzo</Text>
                        </View>
                        <View style={{ width: width / 3, marginHorizontal: 10 }}>
                            <Image source={require('../../assets/image/s12.png')} style={{ height: height / 7, width: width / 3, resizeMode: 'stretch', }} />
                            <Text style={[style.b18, { color: theme.txt,marginTop:5}]}>As It Was - Harry Styles</Text>
                        </View>
                        <View style={{ width: width / 3, }}>
                            <Image source={require('../../assets/image/s13.png')} style={{ height: height / 7, width: width / 3, resizeMode: 'stretch', }} />
                            <Text style={[style.b18, { color: theme.txt,marginTop:5 }]}>Boyfriend - Dove Cameron</Text>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}