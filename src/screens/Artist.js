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

export default function Artist() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{height:Platform.OS === 'ios' ? height*1.1 : height/1.07}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                    <Text style={[style.subtitle, { color: theme.txt, }]}>85 artists</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[style.b16, { color: Colors.primary, marginRight: 5 }]}>Date Added</Text>
                        <Icon name='swap-vertical' size={20} color={Colors.primary} />
                    </TouchableOpacity>
                </View>
                <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Avatar.Image source={require('../../assets/image/s8.png')} size={70} style={{ backgroundColor: theme.bg }} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <TouchableOpacity onPress={() => this.RBSheet2.open()}>
                            <RBSheet ref={ref => {
                                this.RBSheet2 = ref;
                            }}
                                height={400}
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
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                            <Avatar.Image source={require('../../assets/image/s8.png')} size={70} style={{ backgroundColor: theme.bg }} />
                                            <View style={{ marginLeft: 10, flex: 1 }}>
                                                <TouchableOpacity onPress={() => { this.RBSheet2.close(), navigation.navigate('ArtistDetail') }}>
                                                <Text style={[style.b18, { color: theme.txt }]}>The Weeknd</Text>
                                                <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>1 Album  |  20 Songs</Text>
                                                </TouchableOpacity>
                                                
                                            </View>
                                        </View>
                                        <View style={[style.divider, { backgroundColor: theme.border, marginTop: 15 }]}></View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                            <Icon name='play-circle-outline' size={28} color={theme.txt} />
                                            <Text style={[style.s18, { color: theme.txt, marginLeft: 10 }]}>Play</Text>
                                        </View>
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
                                            <Icon name='paper-plane-outline' size={28} color={theme.txt} />
                                            <Text style={[style.s18, { color: theme.txt, marginLeft: 10 }]}>Share</Text>
                                        </View>
                                    </ScrollView>
                                </View>
                            </RBSheet>
                            <Text style={[style.b18, { color: theme.txt }]}>Ariana Grande</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>1 Album  |  20 Songs</Text>
                        </TouchableOpacity>
                    </View>
                    <Icons name='dots-vertical' size={20} color={theme.txt} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Avatar.Image source={require('../../assets/image/s9.png')} size={70} style={{ backgroundColor: theme.bg }} />
                    <TouchableOpacity onPress={() => this.RBSheet2.open()} style={{ marginLeft: 10, flex: 1 }}>
                        <Text style={[style.b18, { color: theme.txt }]}>The Weeknd</Text>
                        <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>1 Album  |  16 Songs</Text>
                    </TouchableOpacity>
                    <Icons name='dots-vertical' size={20} color={theme.txt} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Avatar.Image source={require('../../assets/image/s10.png')} size={70} style={{ backgroundColor: theme.bg }} />
                    <TouchableOpacity onPress={() => this.RBSheet2.open()} style={{ marginLeft: 10, flex: 1 }}>
                        <Text style={[style.b18, { color: theme.txt }]}>Acidrap</Text>
                        <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>2 Album  |  28 Songs</Text>
                    </TouchableOpacity>
                    <Icons name='dots-vertical' size={20} color={theme.txt} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Avatar.Image source={require('../../assets/image/s20.png')} size={70} style={{ backgroundColor: theme.bg }} />
                    <TouchableOpacity onPress={() => this.RBSheet2.open()} style={{ marginLeft: 10, flex: 1 }}>
                        <Text style={[style.b18, { color: theme.txt }]}>Ania Szarmarch</Text>
                        <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>1 Album  |  12 Songs</Text>
                    </TouchableOpacity>
                    <Icons name='dots-vertical' size={20} color={theme.txt} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Avatar.Image source={require('../../assets/image/s21.png')} size={70} style={{ backgroundColor: theme.bg }} />
                    <TouchableOpacity style={{ marginLeft: 10, flex: 1 }}>
                        <Text style={[style.b18, { color: theme.txt }]}>Troye Sivan</Text>
                        <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>1 Album  |  14 Songs</Text>
                    </TouchableOpacity>
                    <Icons name='dots-vertical' size={20} color={theme.txt} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Avatar.Image source={require('../../assets/image/s22.png')} size={70} style={{ backgroundColor: theme.bg }} />
                    <TouchableOpacity onPress={() => this.RBSheet2.open()} style={{ marginLeft: 10, flex: 1 }}>
                        <Text style={[style.b18, { color: theme.txt }]}>Ryan Jones</Text>
                        <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>2 Album  |  24 Songs</Text>
                    </TouchableOpacity>
                    <Icons name='dots-vertical' size={20} color={theme.txt} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 20 }}>
                    <Avatar.Image source={require('../../assets/image/s23.png')} size={70} style={{ backgroundColor: theme.bg }} />
                    <TouchableOpacity onPress={() => this.RBSheet2.open()} style={{ marginLeft: 10, flex: 1 }}>
                        <Text style={[style.b18, { color: theme.txt }]}>Sweet Sexy Savage</Text>
                        <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>1 Album  |  16 Songs</Text>
                    </TouchableOpacity>
                    <Icons name='dots-vertical' size={20} color={theme.txt} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}