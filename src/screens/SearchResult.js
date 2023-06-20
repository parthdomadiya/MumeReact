import { View, Text, SafeAreaView, Dimensions, StatusBar, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Switch, ImageBackground, TextInput } from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function SearchResult() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const categories = ['Songs', 'Artists', 'Albums', 'Folders '];
    const [categoryIndex, setcategoryIndex] = useState(0)
    const Categorylist = () => {
        return (<View style={[style.categorycontainer,{marginBottom:10}]}>
            {categories.map((item, index) => (
                <TouchableOpacity key={index}
                    activeOpacity={0.8}
                    onPress={() => setcategoryIndex(index)}>
                    <Text
                        key={index}
                        style={[[style.categoryText, { color: Colors.primary, backgroundColor: theme.bg }], categoryIndex == index && [style.categoryTextSelected, {}]]}>
                        {item}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
        );
    };
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg }]}>
                <AppBar
                    color={theme.bg}
                    elevation={0}
                    style={{}}
                    title={<View style={[style.txtinput, { flexDirection: 'row', alignItems: 'center', borderColor: theme.input, backgroundColor: theme.input }]}>
                        <Icon name='search-outline' color={theme.icon} size={20} />
                        <TextInput placeholder='Firework'
                            selectionColor={Colors.primary}
                            placeholderTextColor={theme.disable}
                            style={[style.m14, { color: theme.txt, flex: 1 }]} />
                        <Icon name='close' color={theme.icon} size={20} />
                    </View>}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs3')}>
                        <Icon name="arrow-back" color={theme.txt} size={30} />
                    </TouchableOpacity>
                    }
                />
                <ScrollView showsVerticalScrollIndicator={false} >
                    <Categorylist></Categorylist>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s36.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>Firework</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Katy Perry</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                            <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s39.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>Firework - Accoustic</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>The Mayries</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                            <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s37.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>Last Friday Night</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Katy Perry</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                            <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s45.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>Firework Cover</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>The Sappear</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                            <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s44.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>Teenage Dream</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Katy Perry</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                            <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s46.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>Roar</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Katy Perry</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                            <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/s47.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>Fireworks</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Sleep on it</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/Play.png')} size={32} style={{ backgroundColor: theme.bg }} />
                            <Icons name='dots-vertical' size={20} color={theme.txt} style={{ marginLeft: 8 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15,marginBottom:20 }}>
                        <Image source={require('../../assets/image/s48.png')} style={{ height: height / 11, width: width / 5, resizeMode: 'stretch', }} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt }]}>Fireworks at Dawn</Text>
                            <Text style={[style.m12, { color: theme.disable3, marginTop: 7 }]}>Katy Perry</Text>
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