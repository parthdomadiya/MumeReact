import { View, Text, SafeAreaView, Dimensions, StatusBar, Modal, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Switch, ImageBackground } from 'react-native'
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

export default function PlaylistDetail() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [visible, setvisible] = useState(false)
    const [select, setselect] = useState(false)
    const [isSelect, setisSelect] = useState(false)
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
                        <TouchableOpacity onPress={() => setvisible(true)}>
                            <Icons name="dots-horizontal-circle-outline" color={theme.txt} size={30} />
                        </TouchableOpacity>
                    </HStack>}
                />
                <ScrollView showsVerticalScrollIndicator={false} >
                    <Image source={require('../../assets/image/s53.png')} style={{ height: height / 4, width: width / 1.8, resizeMode: 'stretch', alignSelf: 'center', marginTop: 15 }} />
                    <Text style={[style.title, { color: theme.txt, fontSize: 30, textAlign: 'center', marginTop: 5 }]}>My Favorite Songs</Text>
                    <Text style={[style.m14, { color: theme.disable3, textAlign: 'center', marginTop: 8 }]}> 345 Songs | 09:55:37 mins</Text>
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
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name='swap-vertical' size={20} color={Colors.primary} />
                            <Text style={[style.b16, { color: Colors.primary, marginLeft: 5 }]}>Date Added</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Add')}>
                            <Icons name='plus-box' size={32} color={Colors.primary} />
                        </TouchableOpacity>
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
                        <Image source={require('../../assets/image/s36.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>Somebody’s Nobody</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Ariana Grande</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                            <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
                        <Image source={require('../../assets/image/s44.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>Alexander 23</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Romantic Echoes</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                            <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                </ScrollView>
            </View>
            <Modal transparent={true} visible={visible}>
                <View style={{ flex: 1 }}>
                    <View style={{
                        right: 45, height: 110, width: 160, backgroundColor: Colors.secondary, position: 'absolute', marginTop: 40, borderRadius: 15, 
                        shadowColor: 'black',
                        shadowOffset: { width: 1, height: 1 },
                        shadowOpacity: 0.2, borderColor: 'black',
                        elevation: 10,
                    }}>
                        <TouchableOpacity onPress={() => setvisible(false)}
                            style={{ flex: 1, justifyContent: 'flex-end', marginHorizontal: 10 }}>
                            <Icons name='close' size={20} color={Colors.active} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setvisible(false) }}>
                            <View style={{ marginHorizontal: 10, flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                                <Icons name='pencil-outline' size={20} color={Colors.active} />
                                <Text style={[style.s16, { color: theme.txt, marginLeft: 5 }]}>Edit Playlist Info</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 10 }]}></View>
                        <TouchableOpacity onPress={() => { setvisible(false) }} >
                            <View style={{ marginHorizontal: 10, flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
                                <Icons name='delete-outline' size={20} color={Colors.active} />
                                <Text style={[style.s16, { color: theme.txt, marginLeft: 5 }]}>Delete Playlist</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        </SafeAreaView>
    )
}