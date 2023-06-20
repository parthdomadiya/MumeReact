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

export default function Playlist() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg }]}>
                <AppBar
                    color={theme.bg}
                    elevation={0}
                    title='Playlists'
                    style={{ marginTop: 20 }}
                    titleStyle={[style.apptitle, { color: theme.txt }]}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs3')}>
                        <Icon name="arrow-back" color={theme.txt} size={30} />
                    </TouchableOpacity>
                    }
                    trailing={<Icon name="search-outline" color={theme.txt} size={30} />} />

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                        <Text style={[style.subtitle, { color: theme.txt, }]}>14 playlists</Text>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[style.b16, { color: Colors.primary, marginRight: 5 }]}>Recently Added</Text>
                            <Icon name='swap-vertical' size={20} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>
                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <TouchableOpacity onPress={() => this.RBSheet4.open()}>
                            <RBSheet ref={ref => {
                                this.RBSheet4 = ref;
                            }}
                                height={300}
                                openDuration={100}
                                customStyles={{
                                    container: {
                                        borderTopRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        backgroundColor: theme.bg3
                                    }
                                }}>
                                <View style={{ marginTop: 15, marginHorizontal: 20 }}>
                                    <Text style={[style.subtitle, { color: theme.txt, textAlign: 'center' }]}>New Playlist</Text>
                                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                                    <View style={[style.txtinput, { justifyContent: 'center', borderColor: theme.input2, backgroundColor: theme.input2 }]}>
                                        <Text style={[style.s14, { color: theme.txt, }]}>My Top 50 Songs</Text>
                                    </View>
                                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                                        <View style={{ flex: 1 }}>
                                            <TouchableOpacity style={[style.btn, { backgroundColor: theme.bg2 }]}>
                                                <Text style={[style.btntxt, { color: theme.s }]}>Cancel</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginHorizontal: 5 }}></View>
                                        <View style={{ flex: 1 }}>
                                            <TouchableOpacity style={[style.btn, {}]}>
                                                <Text style={[style.btntxt, {}]}>Create</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </RBSheet>
                            <Avatar.Image source={require('../../assets/image/add.png')} size={70} style={{ backgroundColor: theme.bg }} />
                        </TouchableOpacity>
                        <Text style={[style.b18, { color: theme.txt, flex: 1, marginLeft: 10 }]}>Add New Playlist</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s53.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('PlaylistDetail')}>
                                <Text style={[style.b18, { color: theme.txt }]}>My Favorite Songs</Text>
                                <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>345 songs</Text>
                            </TouchableOpacity>
                        </View>
                        <Icons name='dots-vertical' size={20} color={theme.txt} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s54.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>90s Old Song</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>127 songs</Text>
                        </View>
                        <Icons name='dots-vertical' size={20} color={theme.txt} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s55.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>Legend Rock Song</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>98 songs</Text>
                        </View>
                        <Icons name='dots-vertical' size={20} color={theme.txt} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s56.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>My Favorite Acoustic Song</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>163 songs</Text>
                        </View>
                        <Icons name='dots-vertical' size={20} color={theme.txt} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s57.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>Memories of Love</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>159 songs</Text>
                        </View>
                        <Icons name='dots-vertical' size={20} color={theme.txt} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 20 }}>
                        <Image source={require('../../assets/image/s58.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>Pain - Ryan Jones</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>24 songs</Text>
                        </View>
                        <Icons name='dots-vertical' size={20} color={theme.txt} />
                    </View>
                </ScrollView>
            </View >
        </SafeAreaView >
    )
}