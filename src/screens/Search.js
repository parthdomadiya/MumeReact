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

export default function Search() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [isfocuse, setIsfocuse] = useState()
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg }]}>
                <AppBar
                    color={theme.bg}
                    elevation={0}
                    style={{marginTop:10}}
                    title={<View style={[style.txtinput, { height:45,flexDirection: 'row', alignItems: 'center', borderColor: isfocuse === 'Search ..' ? Colors.primary : theme.border, backgroundColor: isfocuse === 'Search ..' ? Colors.bg : theme.bg ,borderWidth:1}]}>
                        <Icon name='search-outline' color={isfocuse === 'Search ..' ? Colors.primary : theme.disable} size={20} />
                        <TextInput placeholder='Search ..'
                            selectionColor={Colors.primary}
                            onFocus={() => setIsfocuse('Search ..')}
                            onBlur={() => setIsfocuse(false)}
                            placeholderTextColor={theme.disable}
                            style={[style.m14, { color: theme.txt, flex: 1 }]} />
                    </View>}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('RecentPlay')}>
                        <Icon name="arrow-back" color={theme.txt} size={30} />
                    </TouchableOpacity>
                    }
                />
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                        <Text style={[style.subtitle, { color: theme.txt, }]}>Recent Searches</Text>
                        <TouchableOpacity >
                            <Text style={[style.b16, { color: Colors.primary, }]}>Clear All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[style.divider, { backgroundColor: theme.border, }]}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                        <Text style={[style.m18, { color: theme.txt3, }]}>Ariana Grande</Text>
                        <Icon name='close-outline' size={24} color={theme.txt3} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                        <Text style={[style.m18, { color: theme.txt3, }]}>Morgan Wallen</Text>
                        <Icon name='close-outline' size={24} color={theme.txt3} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                        <Text style={[style.m18, { color: theme.txt3, }]}>Justin Bieber</Text>
                        <Icon name='close-outline' size={24} color={theme.txt3} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                        <Text style={[style.m18, { color: theme.txt3, }]}>Drake</Text>
                        <Icon name='close-outline' size={24} color={theme.txt3} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                        <Text style={[style.m18, { color: theme.txt3, }]}>Olivia Rodrigo</Text>
                        <Icon name='close-outline' size={24} color={theme.txt3} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                        <Text style={[style.m18, { color: theme.txt3, }]}>The Weeknd</Text>
                        <Icon name='close-outline' size={24} color={theme.txt3} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                        <Text style={[style.m18, { color: theme.txt3, }]}>Taylor Swift</Text>
                        <Icon name='close-outline' size={24} color={theme.txt3} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                        <Text style={[style.m18, { color: theme.txt3, }]}>Juice Wrld</Text>
                        <Icon name='close-outline' size={24} color={theme.txt3} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15,marginBottom:20 }}>
                        <Text style={[style.m18, { color: theme.txt3, }]}>Memories</Text>
                        <Icon name='close-outline' size={24} color={theme.txt3} />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}