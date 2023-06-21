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

export default function RecentPlay() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg }]}>
                <AppBar
                    color={theme.bg}
                    elevation={0}
                    title='Recently Played'
                    style={{}}
                    titleStyle={[style.apptitle, { color: theme.txt }]}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                        <Icon name="arrow-back" color={theme.txt} size={30} />
                    </TouchableOpacity>
                    }
                    trailing={<HStack>
                        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <Icon name="search-outline" color={theme.txt} size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('SearchResult')}>
                        <Icons name="dots-horizontal-circle-outline" color={theme.txt} size={30} />
                        </TouchableOpacity>
                    </HStack>}
                />
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s36.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>Somebody’s Nobody</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Alexander 23</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                            <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s37.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>Sharks</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Imagine Dragons</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                            <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s38.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>Disaster</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Conan Gray</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                            <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s39.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>HANDSOME</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Warren Hue</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                            <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s40.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>God Is a Woman</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Ariana Grande</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                            <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s41.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>BREAK MY SOUL</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Beyonce</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                            <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s42.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>The Bended Man</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Sunwich</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                            <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s43.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>The Light Is Coming</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Ariana Grande</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                            <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 ,marginBottom:20}}>
                        <Image source={require('../../assets/image/s44.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>Fly Me To The Sun</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Romantic Echoes</Text>
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