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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Splash from './Splash';
import Suggest from './Suggest';
import Songs from './Songs';
import Artist from './Artist';
import Alumb from './Alumb';
import Folder from './Folder';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const Tab = createMaterialTopTabNavigator();

const Top = () => {

    const theme = useContext(themeContext);

    return <Tab.Navigator
        screenOptions={{
            tabBarStyle: { flexDirection: 'row', },
            tabBarLabelStyle: {
                fontSize: 18,
                backgroundColor: theme.bg,
                // paddingVertical: 5,
                marginHorizontal: 20,
                
            },
            tabBarShowLabel: true,
            tabBarScrollEnabled: true,
            tabBarIndicatorStyle: { backgroundColor: Colors.primary },
            swipeEnabled:false
        }}>

        <Tab.Screen name="Suggested" component={Suggest}
            options={{
                tabBarShowLabel: true,
                tabBarLabel: ({ focused, color, }) => (
                    <View style={{
                        paddingVertical: 8,
                        marginHorizontal: -30
                    }}>
                        <Text style={{ color: focused ? Colors.primary : theme.disable, fontFamily: 'Urbanist-SemiBold', textAlign: 'center' ,fontSize:18}}>Suggested</Text>
                    </View>
                ),
                headerShown: false,
            }}
        />
        <Tab.Screen name="Songs" component={Songs}
            options={{
                tabBarShowLabel: true,
                tabBarLabel: ({ focused, color, }) => (
                    <View style={{
                        paddingVertical: 8,
                        marginHorizontal: -30
                    }}>
                        <Text style={{ color: focused ? Colors.primary : theme.disable, fontFamily: 'Urbanist-SemiBold', textAlign: 'center',fontSize:18 }}>Songs</Text>
                    </View>
                ),
                headerShown: false,
            }} />

        <Tab.Screen name="Artists" component={Artist}
            options={{
                tabBarShowLabel: true,
                tabBarLabel: ({ focused, color, }) => (
                    <View style={{
                        paddingVertical: 8,
                        marginHorizontal: -30
                    }}>
                        <Text style={{ color: focused ? Colors.primary : theme.disable, fontFamily: 'Urbanist-SemiBold', textAlign: 'center' ,fontSize:18}}>Artists</Text>
                    </View>
                ),
                headerShown: false,
            }}
        />

        <Tab.Screen name="Albums" component={Alumb}
            options={{
                tabBarShowLabel: true,
                tabBarLabel: ({ focused, color, }) => (
                    <View style={{
                       paddingVertical: 8,
                        marginHorizontal: -30
                    }}>
                        <Text style={{ color: focused ? Colors.primary :theme.disable, fontFamily: 'Urbanist-SemiBold', textAlign: 'center' ,fontSize:18}}>Albums</Text>
                    </View>
                ),
                headerShown: false,
            }} />

        <Tab.Screen name="Folders" component={Folder}
            options={{
                tabBarShowLabel: true,
                tabBarLabel: ({ focused, color, }) => (
                    <View style={{
                        paddingVertical: 8,
                        marginHorizontal: -30
                    }}>
                        <Text style={{ color: focused ? Colors.primary : theme.disable, fontFamily: 'Urbanist-SemiBold', textAlign: 'center' ,fontSize:18}}>Folders</Text>
                    </View>
                ),
                headerShown: false,
            }} />

    </Tab.Navigator>
}

export default function Home() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg }]}>
                <AppBar
                    color={theme.bg}
                    elevation={0}
                    title='Mume'
                    style={{marginTop:15}}
                    titleStyle={[style.apptitle, { color: theme.txt }]}
                    leading={<Image source={require('../../assets/image/Logo2.png')} style={{ height: height / 24, width: width / 12, resizeMode: 'stretch', }} />}
                    trailing={<Icon name="search-outline" color={theme.txt} size={30} />} />
                <Top></Top>
            </View>
        </SafeAreaView>
    )
}