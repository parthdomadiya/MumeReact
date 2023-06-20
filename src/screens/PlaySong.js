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

export default function PlaySong() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [show, setshow] = useState(false)
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
                    trailing={<Icons name="dots-horizontal-circle-outline" color={theme.txt} size={30} />}
                />
                <ScrollView showsVerticalScrollIndicator={false} >
                    <Image source={require('../../assets/image/s19.png')} style={{ height: height / 2.5, width: width - 50, resizeMode: 'stretch', alignSelf: 'center', marginTop: 15 }} />
                    <Text style={[style.title, { color: theme.txt, marginTop: 10, textAlign: 'center' }]}>Starboy</Text>
                    <Text style={[style.s18, { color: theme.txt2, textAlign: 'center', marginTop: 5 }]}>The Weeknd, Daft Punk</Text>
                    <Image source={theme.bar} style={{ height: height / 50, width: width - 40, resizeMode: 'stretch', marginTop: 15 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={[style.m16, { color: theme.txt }]}>03:35</Text>
                        <Text style={[style.m16, { color: theme.txt }]}>03:35</Text>
                    </View>
                    <Image source={theme.bar1} style={{ height: height / 12, width: width - 40, resizeMode: 'stretch', marginTop: 15 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 15 }}>
                        <Icons name='car-speed-limiter' size={28} color={theme.txt} />
                        <Icons name='timer-outline' size={28} color={theme.txt} />
                        <Icons name='cast' size={28} color={theme.txt} />
                        <Icons name='dots-vertical' size={28} color={theme.txt} />
                    </View>
                    <TouchableOpacity onPress={() => setshow(!show)}>
                        <Icon name='chevron-up' size={28} color={theme.txt} style={{ alignSelf: 'center', marginTop: 10 }} />
                        <Text style={[style.b18, { color: theme.txt, textAlign: 'center' }]}>Lyrics</Text>
                    </TouchableOpacity>
                    {show ?
                        <View style={{ marginTop: 10, padding: 12, backgroundColor: theme.bg2, borderRadius: 12, marginBottom: 20 }}>
                            <Text style={[style.subtitle, { color: Colors.primary }]}>Let a nigga brag Pitt Legend of the fall took the year like a bandit Bought mama a crib and a brand new wagon</Text>
                            <Text style={[style.subtitle, { color: theme.txt }]}>Now she hit the grocery shop looking lavish Star Trek roof in that Wraith of Khan Girls get loose when they hear this song A hundred on the dash get me close to God We don't pray for love, we just pray for cars</Text>
                        </View> : null}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}