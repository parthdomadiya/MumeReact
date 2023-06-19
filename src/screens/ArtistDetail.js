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

export default function ArtistDetail() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg }]}>
                <AppBar
                    color={theme.bg}
                    elevation={0}
                    title='Artist'
                    centerTitle={true}
                    style={{}}
                    titleStyle={[style.b18, { color: Colors.secondary }]}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs3')}>
                        <Icon name="arrow-back" color={theme.txt} size={30} />
                    </TouchableOpacity>
                    }
                    trailing={<HStack>
                        <Icon name="search" color={theme.txt} size={30} />
                        <Icons name="dots-horizontal-circle-outline" color={theme.txt} size={30} />
                    </HStack>}
                />

                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 15 }}>
                    <Image source={require('../../assets/image/s1.png')} style={{ height: height / 5.5, width: width / 2.35, resizeMode: 'stretch', alignSelf: 'center' }} />
                    <Text style={[style.title, { color: theme.txt, fontSize: 30, textAlign: 'center', marginTop: 5 }]}>Ariana Grande</Text>
                    <Text style={[style.m14, { color: theme.disable3, textAlign: 'center', marginTop: 8 }]}>| Album | 20 Songs | 01:25:43 mins</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10,justifyContent:'space-between' }}>
                        <Text style={[style.apptitle, { color: theme.txt, }]}>Songs</Text>
                        <TouchableOpacity>
                            <Text style={[style.b16, { color: Colors.primary }]}>See All</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}