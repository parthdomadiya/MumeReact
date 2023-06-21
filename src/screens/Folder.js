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

export default function Folder() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{height:Platform.OS === 'ios' ? height : height/1.2}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                    <Text style={[style.subtitle, { color: theme.txt, }]}>40 folders</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[style.b16, { color: Colors.primary, marginRight: 5 }]}>Date Added</Text>
                        <Icon name='swap-vertical' size={20} color={Colors.primary} />
                    </TouchableOpacity>
                </View>
                <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                   <Image source={require('../../assets/image/Folder.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('FolderDetail')}>
                        <Text style={[style.b18, { color: theme.txt }]}>Top 100 Billboards</Text>
                        <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>100 songs</Text>
                        </TouchableOpacity>
                    </View>
                    <Icons name='dots-vertical' size={20} color={theme.txt} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                   <Image source={require('../../assets/image/Folder.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <Text style={[style.b18, { color: theme.txt }]}>My Favorite Songs</Text>
                        <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>240 songs</Text>
                    </View>
                    <Icons name='dots-vertical' size={20} color={theme.txt} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                   <Image source={require('../../assets/image/Folder.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <Text style={[style.b18, { color: theme.txt }]}>Ariana Grande</Text>
                        <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>44 songs</Text>
                    </View>
                    <Icons name='dots-vertical' size={20} color={theme.txt} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                   <Image source={require('../../assets/image/Folder.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <Text style={[style.b18, { color: theme.txt }]}>Most Popular Songs</Text>
                        <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>120 songs</Text>
                    </View>
                    <Icons name='dots-vertical' size={20} color={theme.txt} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                   <Image source={require('../../assets/image/Folder.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <Text style={[style.b18, { color: theme.txt }]}>Childood Memories</Text>
                        <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>55 songs</Text>
                    </View>
                    <Icons name='dots-vertical' size={20} color={theme.txt} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15,marginBottom:20 }}>
                   <Image source={require('../../assets/image/Folder.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <Text style={[style.b18, { color: theme.txt }]}>Great Soundtracks</Text>
                        <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>60 songs</Text>
                    </View>
                    <Icons name='dots-vertical' size={20} color={theme.txt} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}