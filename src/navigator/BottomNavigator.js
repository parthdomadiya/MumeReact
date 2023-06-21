import React,{useContext,useState,useRef,useEffect} from 'react';
import {StyleSheet,Text,View,} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons"
import { Colors } from '../theme/color';
import themeContext from '../theme/themeContex';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import Playlist from '../screens/Playlist';
import Setting from '../screens/Setting';
import Animated, { FadeInUp, FadeOutDown, Layout } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

export default function MyTabs() {

  const theme = useContext(themeContext);
  const [darkMode,setDarkMode] = useState('false')

  return (
  //   <Animated.View
  //     entering={FadeInUp}
  //     exiting={FadeOutDown}
  //     layout={Layout.duration(100)}
  //     style={{
  //       height:80,
  //     }}
  // >
    
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: { position: 'absolute',height:70,paddingBottom:10,paddingTop:10,backgroundColor:theme.bottom,},
      tabBarLabelStyle: {
        fontSize: 15,
      },
      tabBarShowLabel:false,
    }}
    >
   
    <Tab.Screen name="Home" component={Home} 
    options={{
      tabBarShowLabel:true,
      tabBarLabel: ({focused, color,}) => (
        <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'Urbanist-Regular'}}>Home</Text>
      ),
      tabBarIcon:({focused,color}) => {
        return <Ionicons name={focused ? 'home' : 'home-outline'} size={25} 
        color={focused ? Colors.primary : Colors.disable} />
      },
      headerShown:false,
      // animationTypeForReplace: 'push',
      //  animation:'slide_from_bottom'
    }}
    />
    
  
    <Tab.Screen name="Favorites" component={Favorites}
     options={{
      tabBarShowLabel:true,
      tabBarLabel: ({focused, color,}) => (
        <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'Urbanist-Regular'}}>Favorites</Text>
      ),
      tabBarIcon:({focused,color}) => {
        return <Ionicons name={focused ? 'heart' : 'heart-outline'} size={25}
        color={ focused ? Colors.primary : Colors.disable} />
      },
      headerShown:false,
    }} />

 <Tab.Screen name="Playlist" component={Playlist}
     options={{
      tabBarShowLabel:true,
      tabBarLabel: ({focused, color,}) => (
        <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'Urbanist-Regular'}}>Playlists</Text>
      ),
      tabBarIcon:({focused,color}) => {
        return <Ionicons name={focused ? 'reader' : 'reader-outline'} size={25}
        color={focused ? Colors.primary : Colors.disable} />
      },
      headerShown:false,
    }} />

<Tab.Screen name="Setting" component={Setting}
    options={{
      tabBarShowLabel:true,
      tabBarLabel: ({focused, color,}) => (
        <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'Urbanist-Regular'}}>Settings</Text>
      ),
      tabBarIcon:({focused,color}) => {
        return <Ionicons name={focused ? 'settings' : 'settings-outline'} size={25}
        color={focused ? Colors.primary: Colors.disable} />
      },
      headerShown:false,
    }} />

  </Tab.Navigator>
  // </Animated.View>
  );
}


