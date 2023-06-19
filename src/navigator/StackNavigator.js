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
                    <Stack.Screen
                        name="ArtistDetail"
                        component={ArtistDetail}
                        options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </themeContext.Provider>
    )
}