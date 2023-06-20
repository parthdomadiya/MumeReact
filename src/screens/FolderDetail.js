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

export default function FolderDetail() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
    <View style={[style.main, { backgroundColor: theme.bg }]}>
        <AppBar
            color={theme.bg}
            elevation={0}
            style={{}}
            leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs3')}>
                <Icon name="arrow-back" color={theme.txt} size={30} />
            </TouchableOpacity>
            }
            trailing={<HStack>
                <Icon name="search-outline" color={theme.txt} size={30} />
                <Icons name="dots-horizontal-circle-outline" color={theme.txt} size={30} />
            </HStack>}
        />
        <ScrollView showsVerticalScrollIndicator={false} >
            <Image source={require('../../assets/image/Folder.png')} style={{ height: height / 5.5, width: width / 2.35, resizeMode: 'stretch', alignSelf: 'center',marginTop:15 }} />
            <Text style={[style.title, { color: theme.txt, fontSize: 30, textAlign: 'center', marginTop: 5 }]}>Top 100 Billboards</Text>
            <Text style={[style.m14, { color: theme.disable3, textAlign: 'center', marginTop: 8 }]}> 100 Songs | 04:48:25 mins</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={[style.btn, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                        <Icon name='shuffle' size={20} color={Colors.secondary} />
                        <Text style={[style.b16, { color: Colors.secondary, marginLeft: 5 }]}>Shuffle</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 10 }}></View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={[style.btn, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.bg2 }]}>
                        <Avatar.Image source={require('../../assets/image/Play.png')} size={20} style={{ backgroundColor: theme.bg }} />
                        <Text style={[style.b16, { color: theme.s, marginLeft: 5 }]}>Play</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={[style.apptitle, { color: theme.txt, }]}>Songs</Text>
                <TouchableOpacity>
                    <Text style={[style.b16, { color: Colors.primary }]}>See All</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                <Image source={require('../../assets/image/s33.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                <View style={{ marginLeft: 10, flex: 1 }}>
                    <Text style={[style.b18, { color: theme.txt }]}>Pain</Text>
                    <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Ryan Jones</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                    <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                <Image source={require('../../assets/image/s34.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                <View style={{ marginLeft: 10, flex: 1 }}>
                    <Text style={[style.b18, { color: theme.txt }]}>Dangerous Woman</Text>
                    <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Ariana Grande</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                    <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
                <Image source={require('../../assets/image/s35.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                <View style={{ marginLeft: 10, flex: 1 }}>
                    <Text style={[style.b18, { color: theme.txt }]}>Chain Smooker</Text>
                    <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Acidrap</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                    <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                </View>
            </View>
        </ScrollView>
    </View>
</SafeAreaView>
  )
}