import { View, Text ,SafeAreaView, TextInput, StatusBar,TouchableOpacity,Image,ScrollView,Dimensions,KeyboardAvoidingView} from 'react-native'
import React,{useState,useContext} from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, Avatar} from '@react-native-material/core';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';

const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Notification() {
    const theme = useContext(themeContext);
    const navigation=useNavigation();
    const [checked, setChecked] = useState(false);
    
  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
    <View style={[style.main,{backgroundColor:theme.bg,marginTop:10}]}>
    
        <AppBar 
            color={theme.bg}
            title='Notification'
            titleStyle={[style.apptitle,{color:theme.txt}]}
            elevation={0}
            leading={ <TouchableOpacity onPress={()=>navigation.navigate('MyTabs')}>
            <Icon name="arrow-back"  
            // style={{backgroundColor:Colors.secondary,}}  
            color={theme.txt} size={30}
            />
            </TouchableOpacity>
        }/>

    <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
            <View style={{flex:1,marginRight:10}}>
                <Text style={[style.s18,{color:theme.txt}]}>New Music</Text>
                <Text style={[style.m14,{color:theme.txt}]}>Push</Text>
            </View>
            <Icon name='chevron-forward' size={20} color={theme.txt}></Icon>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
            <View style={{flex:1,marginRight:10}}>
                <Text style={[style.s18,{color:theme.txt}]}>Playlist Updates</Text>
                <Text style={[style.m14,{color:theme.txt}]}>Push, Email</Text>
            </View>
            <Icon name='chevron-forward' size={20} color={theme.txt}></Icon>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
            <View style={{flex:1,marginRight:10}}>
                <Text style={[style.s18,{color:theme.txt}]}>Artist Updates</Text>
                <Text style={[style.m14,{color:theme.txt}]}>Push, Email</Text>
            </View>
            <Icon name='chevron-forward' size={20} color={theme.txt}></Icon>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
            <View style={{flex:1,marginRight:10}}>
                <Text style={[style.s18,{color:theme.txt}]}>Mume Offers</Text>
                <Text style={[style.m14,{color:theme.txt}]}>Push, Email</Text>
            </View>
            <Icon name='chevron-forward' size={20} color={theme.txt}></Icon>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
            <View style={{flex:1,marginRight:10}}>
                <Text style={[style.s18,{color:theme.txt}]}>Payments & Subscriptions</Text>
                <Text style={[style.m14,{color:theme.txt}]}>Push, Email</Text>
            </View>
            <Icon name='chevron-forward' size={20} color={theme.txt}></Icon>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
            <View style={{flex:1,marginRight:10}}>
                <Text style={[style.s18,{color:theme.txt}]}>New Features</Text>
                <Text style={[style.m14,{color:theme.txt}]}>Push</Text>
            </View>
            <Icon name='chevron-forward' size={20} color={theme.txt}></Icon>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
            <View style={{flex:1,marginRight:10}}>
                <Text style={[style.s18,{color:theme.txt}]}>Security</Text>
                <Text style={[style.m14,{color:theme.txt}]}>Push, Email</Text>
            </View>
            <Icon name='chevron-forward' size={20} color={theme.txt}></Icon>
        </View>

    </ScrollView>
    </View>
    </SafeAreaView>
  )
}