import { View, Text ,SafeAreaView,StatusBar,Dimensions,Image} from 'react-native'
import React,{useState,useContext} from 'react'
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { BallIndicator} from 'react-native-indicators'
import { Avatar } from 'react-native-paper'


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Splash() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg}]}>
    <StatusBar backgroundColor="transparent" translucent={true}/>
    <View style={{
        flex:1,alignItems:'center',justifyContent:'flex-end'
    }}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Avatar.Image source={require('../../assets/image/Logo.png')} size={60} style={{backgroundColor:theme.bg}} />
        <Text style={[style.title,{fontSize:45,color:theme.txt,marginLeft:5}]}>Mume</Text>
        </View>
        
    </View>
    <View style={{
        flex:1,alignItems:'center',justifyContent:'flex-start'
    }}>
        <BallIndicator size={30} color={Colors.primary}/>
    </View>
</SafeAreaView>
  )
}