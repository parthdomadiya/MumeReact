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

export default function Songs() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                    <Text style={[style.subtitle, { color: theme.txt, }]}>560 songs</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[style.b16, { color: Colors.primary, marginRight: 5 }]}>Ascending</Text>
                        <Icon name='swap-vertical' size={20} color={Colors.primary} />
                    </TouchableOpacity>
                </View>
                <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Image source={require('../../assets/image/s14.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <TouchableOpacity onPress={() => this.RBSheet1.open()}>
                            <RBSheet ref={ref => {
                                this.RBSheet1 = ref;
                            }}
                                height={550}
                                openDuration={100}
                                customStyles={{
                                    container: {
                                        borderTopRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        backgroundColor: theme.bg3
                                    }
                                }}>
                                <View style={{ marginTop: 15, marginHorizontal: 20 }}>
                                    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <Image source={require('../../assets/image/s14.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                                            <View style={{ marginLeft: 10, flex: 1 }}>
                                                <Text style={[style.b18, { color: theme.txt }]}>Starboy</Text>
                                                <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>The Weeknd, Daf...  |  03:50 mins</Text>
                                            </View>
                                            <Icon name='heart-outline' size={30} color={theme.txt} />
                                        </View>
                                        <View style={[style.divider, { backgroundColor: theme.border, marginTop: 15 }]}></View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                            <View style={{ height: 28, width: 28, borderRadius: 10, borderWidth: 1.2, borderColor: theme.txt, justifyContent: 'center', alignItems: 'center' }}>
                                                <Icon name='arrow-forward-sharp' size={20} color={theme.txt} />
                                            </View>
                                            <Text style={[style.s18, { color: theme.txt, marginLeft: 10 }]}>Play Next</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                            <Icon name='document-text-outline' size={28} color={theme.txt} />
                                            <Text style={[style.s18, { color: theme.txt, marginLeft: 10 }]}>Add to Playing Queue</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                            <View style={{ height: 28, width: 28, borderRadius: 10, borderWidth: 1.2, borderColor: theme.txt, justifyContent: 'center', alignItems: 'center' }}>
                                                <Icon name='add' size={20} color={theme.txt} />
                                            </View>
                                            <Text style={[style.s18, { color: theme.txt, marginLeft: 10 }]}>Add to Playlist</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                            <View style={{ height: 28, width: 28, borderRadius: 10, borderWidth: 1.2, borderColor: theme.txt, justifyContent: 'center', alignItems: 'center' }}>
                                                <Icon name='play-outline' size={15} color={theme.txt} />
                                            </View>
                                            <Text style={[style.s18, { color: theme.txt, marginLeft: 10 }]}>Go to Album</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                            <Icon name='person-outline' size={28} color={theme.txt} />
                                            <Text style={[style.s18, { color: theme.txt, marginLeft: 10 }]}>Go to Artist</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                            <View style={{ height: 28, width: 28, borderRadius: 10, borderWidth: 1.2, borderColor: theme.txt, justifyContent: 'center', alignItems: 'center' }}>
                                                <Icon name='information-outline' size={15} color={theme.txt} />
                                            </View>
                                            <Text style={[style.s18, { color: theme.txt, marginLeft: 10 }]}>Details</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                            <Icon name='call-outline' size={28} color={theme.txt} />
                                            <Text style={[style.s18, { color: theme.txt, marginLeft: 10 }]}>Set as Ringtone</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                            <View style={{ height: 28, width: 28, borderRadius: 10, borderWidth: 1.2, borderColor: theme.txt, justifyContent: 'center', alignItems: 'center' }}>
                                                <Icon name='close-outline' size={20} color={theme.txt} />
                                            </View>
                                            <Text style={[style.s18, { color: theme.txt, marginLeft: 10 }]}>Add to Blacklist</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                            <Icon name='paper-plane-outline' size={28} color={theme.txt} />
                                            <Text style={[style.s18, { color: theme.txt, marginLeft: 10 }]}>Share</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 20 }}>
                                            <Icons name='delete-outline' size={28} color={theme.txt} />
                                            <Text style={[style.s18, { color: theme.txt, marginLeft: 10 }]}>Delete from Device</Text>
                                        </View>
                                    </ScrollView>
                                </View>
                            </RBSheet>
                            <Text style={[style.b18, { color: theme.txt }]}>Starboy</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>The Weeknd, Daf...  |  03:50 mins</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                        <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Image source={require('../../assets/image/s15.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <Text style={[style.b18, { color: theme.txt }]}>Disaster</Text>
                        <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Conan Gray  |  03:50 mins</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                        <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Image source={require('../../assets/image/s13.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <Text style={[style.b18, { color: theme.txt }]}>HANDSOME</Text>
                        <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Warren Hue  |  04:45 mins</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                        <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Image source={require('../../assets/image/s12.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <Text style={[style.b18, { color: theme.txt }]}>Sharks</Text>
                        <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Imagine Dragons  |  05:23 mins</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                        <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Image source={require('../../assets/image/s16.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <Text style={[style.b18, { color: theme.txt }]}>Fly Me To The Sun</Text>
                        <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Romantic Echoes  |  04:20 mins</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                        <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Image source={require('../../assets/image/s17.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <Text style={[style.b18, { color: theme.txt }]}>The Bended Man</Text>
                        <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Sunwich  |  03:48 mins</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                        <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 20 }}>
                    <Image source={require('../../assets/image/s18.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <Text style={[style.b18, { color: theme.txt }]}>Somebody’s Nobody</Text>
                        <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Alexander 23  |  03:57 mins</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                        <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}