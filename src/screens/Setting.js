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
import Icon1 from 'react-native-vector-icons/Feather'
import { EventRegister } from 'react-native-event-listeners'
import RBSheet from 'react-native-raw-bottom-sheet';


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Setting() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [darkMode, setDarkMode] = useState('false')
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg }]}>
                <AppBar
                    color={theme.bg}
                    elevation={0}
                    title='Setting'
                    style={{ marginTop: 15 }}
                    titleStyle={[style.apptitle, { color: theme.txt }]}
                    leading={<Image source={require('../../assets/image/Logo2.png')} style={{ height: height / 24, width: width / 12, resizeMode: 'stretch', }} />}
                    trailing={<Icons name="dots-horizontal-circle-outline" color={theme.txt} size={30} />} />

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{height:Platform.OS === 'ios' ? height : height/1.15}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Premium')}>
                    <Image source={require('../../assets/image/s61.png')} style={{ height: height / 5.1, width: width - 40, resizeMode: 'stretch', marginTop: 10 }} />
                    </TouchableOpacity>
                    <View style={[style.divider, { backgroundColor: theme.border, marginTop: 15 }]}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Icon1 name='upload' size={28} color={theme.txt} />
                        <Text style={[style.s18, { color: theme.txt, marginLeft: 10, flex: 1 }]}>Backup</Text>
                        <Icon name='chevron-forward' size={20} color={theme.txt} />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}
                    style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Icons name='bell-outline' size={28} color={theme.txt} />
                        <Text style={[style.s18, { color: theme.txt, marginLeft: 10, flex: 1 }]}>Notification</Text>
                        <Icon name='chevron-forward' size={20} color={theme.txt} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Language')}
                    style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Icons name='google-circles-communities' size={28} color={theme.txt} />
                        <Text style={[style.s18, { color: theme.txt, marginLeft: 10, flex: 1 }]}>Language</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[style.s18, { color: theme.txt, marginRight: 5 }]}>English (US)</Text>
                            <Icon name='chevron-forward' size={20} color={theme.txt} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Icons name='eye-outline' size={28} color={theme.txt} />
                        <Text style={[style.s18, { color: theme.txt, marginLeft: 10, flex: 1 }]}>Dark Mode</Text>
                        <Switch
                        style={{marginRight:7}}
                            trackColor={{ false: theme.disable, true: Colors.primary }}
                            thumbColor={isEnabled ? Colors.secondary : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            value={darkMode}
                            onValueChange={
                                (value) => {
                                    setDarkMode(value);
                                    EventRegister.emit('ChangeTheme', value)
                                }
                            }
                        />
                    </View>
                    <TouchableOpacity onPress={() => this.RBSheet.open()}>
                    <RBSheet ref={ref => {
                        this.RBSheet = ref;
                    }}
                        height={350}
                        openDuration={100}
                        customStyles={{
                            container: {
                                borderTopRightRadius: 20,
                                borderTopLeftRadius: 20,
                                backgroundColor: theme.bg
                            }
                        }}>
                        <View style={{ marginTop: 15, marginHorizontal: 20 }}>
                            <AppBar
                                color={theme.bg}
                                title='Share App'
                                titleStyle={{ color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }}
                                centerTitle={true}
                                elevation={0}
                                // leading={<TouchableOpacity onPress={() => this.RBSheet.close()}>
                                //     <Avatar.Icon icon="close"
                                //         style={{ backgroundColor: theme.icon, }}
                                //         color={theme.txt} size={40}
                                //     />
                                // </TouchableOpacity>
                                // }
                            />
                            
                            <View style={[style.divider,{backgroundColor:theme.border,marginVertical:10}]}></View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                                
                                <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => {this.RBSheet.close(),navigation.navigate('Location')}}>
                                    <Image size={40}
                                        source={require('../../assets/image/a1.png')}
                                        style={{ height: height /16, width: width / 7, resizeMode:'stretch'  }}
                                    />
                                </TouchableOpacity>
                                    <Text style={[style.subtxt, { color: theme.txt, marginTop: 10 }]}>WhatsApp</Text>
                                </View>


                                <View style={{ alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => {this.RBSheet.close(),navigation.navigate('Location')}}>
                                    <Image size={40}
                                        source={require('../../assets/image/a2.png')}
                                        style={{ height: height /16, width: width / 7, resizeMode:'stretch'  }}
                                    />
                                    </TouchableOpacity>
                                    <Text style={[style.subtxt, { color: theme.txt, marginTop: 10 }]}>Twitter</Text>
                                </View>

                                <View style={{ alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => {this.RBSheet.close(),navigation.navigate('Location')}}>
                                    <Image size={40}
                                        source={require('../../assets/image/a3.png')}
                                        style={{ height: height / 16, width: width / 7, resizeMode:'stretch' }}
                                    />
                                    </TouchableOpacity>
                                    <Text style={[style.subtxt, { color: theme.txt, marginTop: 10 }]}>Facebook</Text>
                                </View>

                                <View style={{ alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => {this.RBSheet.close(),navigation.navigate('Location')}}>
                                    <Image size={40}
                                        source={require('../../assets/image/a4.png')}
                                        style={{ height: height /16, width: width / 7, resizeMode:'stretch' }}
                                    />
                                    </TouchableOpacity>
                                    <Text style={[style.subtxt, { color: theme.txt, marginTop: 10 }]}>Instagram</Text>
                                </View>

                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                                <View style={{ alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => {this.RBSheet.close(),navigation.navigate('Location')}}>
                                    <Image size={40}
                                        source={require('../../assets/image/a5.png')}
                                        style={{ height: height /16, width: width / 7, resizeMode:'stretch'  }}
                                    />
                                    </TouchableOpacity>
                                    <Text style={[style.subtxt, { color: theme.txt, marginTop: 10 }]}>Yahoo</Text>
                                </View>

                                <View style={{ alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => {this.RBSheet.close(),navigation.navigate('Location')}}>
                                    <Image size={40}
                                        source={require('../../assets/image/a6.png')}
                                        style={{ height: height /16, width: width / 7, resizeMode:'stretch'  }}
                                    />
                                    </TouchableOpacity>
                                    <Text style={[style.subtxt, { color: theme.txt, marginTop: 10 }]}>Tiktok</Text>
                                </View>

                                <View style={{ alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => {this.RBSheet.close(),navigation.navigate('Location')}}>
                                    <Image size={40}
                                        source={require('../../assets/image/a7.png')}
                                        style={{ height: height /16, width: width / 7, resizeMode:'stretch'  }}
                                    />
                                    </TouchableOpacity>
                                    <Text style={[style.subtxt, { color: theme.txt, marginTop: 10 }]}>Chat</Text>
                                </View>

                                <View style={{ alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => {this.RBSheet.close(),navigation.navigate('Location')}}>
                                    <Image size={40}
                                        source={require('../../assets/image/a8.png')}
                                        style={{ height: height /16, width: width / 7, resizeMode:'stretch'  }}
                                    />
                                    </TouchableOpacity>
                                    <Text style={[style.subtxt, { color: theme.txt, marginTop: 10 }]}>WeChat</Text>
                                </View>

                            </View>
                        </View>
                    </RBSheet>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Icon name='paper-plane-outline' size={28} color={theme.txt} />
                        <Text style={[style.s18, { color: theme.txt, marginLeft: 10, flex: 1 }]}>Share</Text>
                        <Icon name='chevron-forward' size={20} color={theme.txt} />
                    </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Icon name='document-text-outline' size={28} color={theme.txt} />
                        <Text style={[style.s18, { color: theme.txt, marginLeft: 10, flex: 1 }]}>Change Log</Text>
                        <Icon name='chevron-forward' size={20} color={theme.txt} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Icon name='shield-checkmark-outline' size={28} color={theme.txt} />
                        <Text style={[style.s18, { color: theme.txt, marginLeft: 10, flex: 1 }]}>Privacy Policy</Text>
                        <Icon name='chevron-forward' size={20} color={theme.txt} />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Helpcenter')}
                    style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <View style={{ height: 28, width: 28, borderRadius: 10, borderWidth: 1.2, borderColor: theme.txt, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name='information-outline' size={20} color={theme.txt} />
                        </View>
                        <Text style={[style.s18, { color: theme.txt, marginLeft: 10, flex: 1 }]}>FAQ</Text>
                        <Icon name='chevron-forward' size={20} color={theme.txt} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.RBSheet5.open()}>
                    <RBSheet ref={ref => {
                        this.RBSheet5 = ref;
                    }}
                        height={270}
                        openDuration={100}
                        customStyles={{
                            container: {
                                borderTopRightRadius: 20,
                                borderTopLeftRadius: 20,
                                backgroundColor: theme.bg
                            }
                        }}>
                        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                            <Text style={[style.subtitle, { textAlign: 'center', color: Colors.primary}]}>Quit</Text>
                            <View style={[style.divider, { marginVertical: 10,backgroundColor:theme.border}]}></View>
                            
                                <View style={{paddingTop:20}}>
                                <Text style={[style.b18,{color:theme.txt,textAlign:'center',}]}>Are you sure want to quit?</Text>
                                </View>  
                            <View style={{ marginTop: 25, flexDirection:'row' }}>
                                <TouchableOpacity
                                    onPress={() => this.RBSheet5.close()}
                                    style={[style.btn, { backgroundColor: theme.bg2,flex:1 }]}>
                                    <Text style={[style.btntxt, { color: theme.s }]}>Cancel</Text>
                                </TouchableOpacity>
                                <View style={{margin:5}}></View>
                                <TouchableOpacity
                                    onPress={()=>{ this.RBSheet5.close(),navigation.navigate('Login')}}
                                    style={[style.btn,{flex:1}]}>
                                    <Text style={[style.btntxt, { color: Colors.secondary}]}>Yes, Quit</Text>
                                </TouchableOpacity>
                                
                            </View>

                        </View>
                    </RBSheet>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Icons name='logout' size={28} color={theme.txt} />
                        <Text style={[style.s18, { color: theme.txt, marginLeft: 10, }]}>Quit</Text>
                    </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}