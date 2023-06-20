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

export default function Add() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg }]}>
                <AppBar
                    color={theme.bg}
                    elevation={0}
                    title='Add Songs'
                    style={{ marginTop: 20 }}
                    titleStyle={[style.apptitle, { color: theme.txt }]}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs3')}>
                        <Icon name="arrow-back" color={theme.txt} size={30} />
                    </TouchableOpacity>
                    }
                    trailing={<Icon name="search-outline" color={theme.txt} size={30} />} />

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s59.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('PlaylistDetail')}>
                                <Text style={[style.b18, { color: theme.txt }]}>Somebody’s Nobody</Text>
                                <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Alexander 23</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity >
                            <Icons name='plus-box' size={32} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s48.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('PlaylistDetail')}>
                                <Text style={[style.b18, { color: theme.txt }]}>Sharks</Text>
                                <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Imagine Dragons</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity >
                            <Icons name='plus-box' size={32} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s17.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('PlaylistDetail')}>
                                <Text style={[style.b18, { color: theme.txt }]}>Disaster</Text>
                                <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Conan Gray</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity >
                            <Icon name='checkbox-outline' size={32} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s39.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('PlaylistDetail')}>
                                <Text style={[style.b18, { color: theme.txt }]}>HANDSOME</Text>
                                <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Warren Hue</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity >
                            <Icons name='plus-box' size={32} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s40.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('PlaylistDetail')}>
                                <Text style={[style.b18, { color: theme.txt }]}>God Is a Woman</Text>
                                <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Ariana Grande</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity >
                        <Icon name='checkbox-outline' size={32} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s16.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('PlaylistDetail')}>
                                <Text style={[style.b18, { color: theme.txt }]}>BREAK MY SOUL</Text>
                                <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Beyonce</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity >
                        <Icon name='checkbox-outline' size={32} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s59.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('PlaylistDetail')}>
                                <Text style={[style.b18, { color: theme.txt }]}>The Bended Man</Text>
                                <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Sunwich</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity >
                            <Icons name='plus-box' size={32} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s60.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('PlaylistDetail')}>
                                <Text style={[style.b18, { color: theme.txt }]}>The Light Is Coming</Text>
                                <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Ariana Grande</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity >
                            <Icons name='plus-box' size={32} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15,marginBottom:20 }}>
                        <Image source={require('../../assets/image/s44.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('PlaylistDetail')}>
                                <Text style={[style.b18, { color: theme.txt }]}>Fly Me To The Sun</Text>
                                <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Romantic Echoes</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity >
                            <Icons name='plus-box' size={32} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}