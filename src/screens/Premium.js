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

export default function Premium() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg }]}>
                <AppBar
                    color={theme.bg}
                    elevation={0}
                    style={{}}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                        <Icon name="arrow-back" color={theme.txt} size={30} />
                    </TouchableOpacity>
                    }
                />
                <ScrollView showsVerticalScrollIndicator={false} >
                    <Text style={[style.title, { color: Colors.primary, marginTop: 10, textAlign: 'center' }]}>Subscribe to Premium</Text>
                    <Text style={[style.m16, { color: theme.txt2, marginTop: 10, textAlign: 'center' }]}>Enjoy listening songs with better audio quality, without restrictions, and without ads.</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('PaymentMethod')}>
                        <Image source={require('../../assets/image/s62.png')} style={{ height: height / 3, width: width - 40, resizeMode: 'stretch', marginTop: 15 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Premium')}>
                        <Image source={require('../../assets/image/s63.png')} style={{ height: height / 3, width: width - 40, resizeMode: 'stretch', marginTop: 15 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Premium')}>
                        <Image source={require('../../assets/image/s64.png')} style={{ height: height / 3, width: width - 40, resizeMode: 'stretch', marginTop: 15, marginBottom: 20 }} />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}