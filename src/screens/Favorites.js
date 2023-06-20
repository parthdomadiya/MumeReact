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

export default function Favorites() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg }]}>
                <AppBar
                    color={theme.bg}
                    elevation={0}
                    title='Mume'
                    style={{ marginTop: 20 }}
                    titleStyle={[style.apptitle, { color: theme.txt }]}
                    leading={<Image source={require('../../assets/image/Logo2.png')} style={{ height: height / 20, width: width / 12, resizeMode: 'stretch', }} />}
                    trailing={<Icon name="search-outline" color={theme.txt} size={30} />} />
                    
                <ScrollView showsVerticalScrollIndicator={false} >
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
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                        <Text style={[style.subtitle, { color: theme.txt, }]}>175 favorites</Text>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[style.b16, { color: Colors.primary, marginRight: 5 }]}>Date Added</Text>
                            <Icon name='swap-vertical' size={20} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>
                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s49.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <TouchableOpacity onPress={() => this.RBSheet3.open()}>
                                <RBSheet ref={ref => {
                                    this.RBSheet3 = ref;
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
                                                <Image source={require('../../assets/image/s49.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                                                <View style={{ marginLeft: 10, flex: 1 }}>
                                                    <Text style={[style.b18, { color: theme.txt }]}>Die For You</Text>
                                                    <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>The Weeknd</Text>
                                                </View>
                                                <Icon name='heart' size={30} color={Colors.primary} />
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
                                <Text style={[style.b18, { color: theme.txt }]}>Die For You</Text>
                                <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>The Weeknd</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                            <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s14.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>Starboy</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>The Weeknd, Daft Punk</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                            <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s50.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>Starboy Speed Up</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Just Lowkey</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                            <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s37.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>Blinding Lights</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>The Weeknd</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                            <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s51.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>The Hills</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>The Weeknd</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                            <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 20 }}>
                        <Image source={require('../../assets/image/s52.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>I Feel It Coming</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>The Weeknd, Daft Punk</Text>
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