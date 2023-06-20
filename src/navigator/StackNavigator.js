import { View, Text, StatusBar } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';
import Splash from '../screens/Splash';
import Introduction from '../screens/Introduction';
import ArtistDetail from '../screens/ArtistDetail';
import Home from '../screens/Home';
import PlaySong from '../screens/PlaySong';
import AlubmDetail from '../screens/AlubmDetail';
import FolderDetail from '../screens/FolderDetail';
import RecentPlay from '../screens/RecentPlay';
import Search from '../screens/Search';
import SearchResult from '../screens/SearchResult';
import Favorites from '../screens/Favorites';
import Playlist from '../screens/Playlist';
import PlaylistDetail from '../screens/PlaylistDetail';
import Add from '../screens/Add';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    useEffect(() => {
        const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
            setDarkMode(data)
            console.log(data)

        })

        return () => {
            EventRegister.removeAllListeners(listener)
        }
    }, [darkMode])

    const [showSplashScreen, setshowSplashScreen] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setshowSplashScreen(false);
        }, 4000);


    }, [])
    const [darkMode, setDarkMode] = useState(false)
    return (
        <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
            <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
                <StatusBar backgroundColor={darkMode === true ? Colors.active : Colors.secondary} barStyle={darkMode === true ? 'light-content' : 'dark-content'} translucent={false} />
                <Stack.Navigator>
                    {/* {
                        showSplashScreen ?
                            <Stack.Screen
                                name="Splash"
                                component={Splash}
                                options={{ headerShown: false }} />
                            : null
                    } */}
                    {/* <Stack.Screen
                        name="Introduction"
                        component={Introduction}
                        options={{ headerShown: false }} /> */}
                    {/* <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }} /> */}
                    <Stack.Screen
                        name="Playlist"
                        component={Playlist}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Add"
                        component={Add}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="PlaylistDetail"
                        component={PlaylistDetail}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Favorites"
                        component={Favorites}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="SearchResult"
                        component={SearchResult}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Search"
                        component={Search}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="RecentPlay"
                        component={RecentPlay}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="FolderDetail"
                        component={FolderDetail}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="AlubmDetail"
                        component={AlubmDetail}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="PlaySong"
                        component={PlaySong}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="ArtistDetail"
                        component={ArtistDetail}
                        options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </themeContext.Provider>
    )
}