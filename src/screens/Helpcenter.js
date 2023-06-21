import { View, Text ,SafeAreaView, TextInput, StatusBar,TouchableOpacity,Image,ScrollView,Dimensions,KeyboardAvoidingView} from 'react-native'
import React,{useState,useContext} from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, Avatar} from '@react-native-material/core';
import  Icon  from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'


const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Helpcenter() {
    
    const theme = useContext(themeContext);
    const navigation=useNavigation();
    const categories =['General', 'Playlist', 'Subscription', 'Others'];

    const [categoryIndex, setcategoryIndex] = useState(0)
  
    const Categorylist=()=>{
      return( <View style={style.categorycontainer}>
        {categories.map((item,index)=>(
          <TouchableOpacity key={index} 
            activeOpacity={0.8}
            onPress={()=>setcategoryIndex(index)}>
            <Text 
             key={index} 
             style={[
             style.categoryText ,{color:theme.s},
             categoryIndex==index && style.categoryTextSelected]}>
            {item}
          </Text>
          </TouchableOpacity>
          
        ))}
      </View>
      );
    };
    
  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{flex:1}}>
    <View style={[style.main,{backgroundColor:theme.bg,}]}>
        <AppBar 
            color={theme.bg}
            title='FAQ'
            titleStyle={[style.apptitle,{color:theme.txt}]}
            elevation={0}
            leading={ <TouchableOpacity onPress={()=>navigation.navigate('MyTabs')}>
            <Icon name="arrow-back"  
            // style={{backgroundColor:Colors.secondary,}}  
            color={theme.txt} size={30}
            />
            </TouchableOpacity>}
            />

            <View style={[style.inputContainer,{backgroundColor:theme.input,marginTop:10,borderColor:theme.border}]}>
                <Icon name="search" size={20} color={theme.icon}/>  
                <TextInput placeholder='Search...'
                    selectionColor={Colors.primary}
                    placeholderTextColor={theme.icon}
                    style={{flex:1,color:theme.txt,fontFamily:'Urbanist-Regular'}}/>
            </View> 

            <View style={{marginTop:10,}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Categorylist/>
                </ScrollView>
            </View>
            <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} >
            
            <View style={{}}>
                <View style={[style.txtinput,{backgroundColor:theme.input,borderRadius:20,height:130,justifyContent:'center'}]}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Text style={[style.b18,{color:theme.txt,flex:1}]}>What is Mume Music Player?</Text>
                        <Icon name='caret-down' size={20} color={theme.s}></Icon>
                    </View>
                    <View style={[style.divider,{backgroundColor:theme.border,marginVertical:15}]}></View>
                    <Text style={[style.r14,{color:theme.txt}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </View>
            </View>

            <View style={{paddingTop:15,}}>
                <View style={[style.txtinput,{backgroundColor:theme.input,padding:15,borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}]}>
                    <Text style={[style.b18,{color:theme.txt,flex:1}]}>Is Mume free to use?</Text>
                    <TouchableOpacity>
                    <Icon name='caret-down' size={20} color={theme.s}></Icon>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{paddingTop:15,}}>
                <View style={[style.txtinput,{backgroundColor:theme.input,padding:15,borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}]}>
                    <Text style={[style.b18,{color:theme.txt,flex:1}]}>What are the features in Mume?</Text>
                    <TouchableOpacity>
                    <Icon name='caret-down' size={20} color={theme.s}></Icon>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{paddingTop:15,}}>
                <View style={[style.txtinput,{backgroundColor:theme.input,padding:15,borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}]}>
                    <Text style={[style.b18,{color:theme.txt,flex:1}]}>How can I subscribe to premium?</Text>
                    <TouchableOpacity>
                    <Icon name='caret-down' size={20} color={theme.s}></Icon>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{paddingTop:15,}}>
                <View style={[style.txtinput,{backgroundColor:theme.input,padding:15,borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}]}>
                    <Text style={[style.b18,{color:theme.txt,flex:1}]}>How do I unsubscribe premium?</Text>
                    <TouchableOpacity>
                    <Icon name='caret-down' size={20} color={theme.s}></Icon>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{paddingTop:15,marginBottom:20}}>
                <View style={[style.txtinput,{backgroundColor:theme.input,padding:15,borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}]}>
                    <Text style={[style.b18,{color:theme.txt,flex:1}]}>How to make playlists?</Text>
                    <TouchableOpacity>
                    <Icon name='caret-down' size={20} color={theme.s}></Icon>
                    </TouchableOpacity>
                </View>
            </View>

            </ScrollView>

    </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}