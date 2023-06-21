import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions, KeyboardAvoidingView, Modal } from 'react-native'
import React, { useState, useContext } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar,  } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Review() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);
    const [visible, setVisible] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg, }]}>

                <AppBar
                    color={theme.bg}
                    title='Review Summary'
                    titleStyle={[style.apptitle, { color: theme.txt }]}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back"
                            // style={{backgroundColor:Colors.secondary,}}  
                            color={theme.txt} size={30}
                        />
                    </TouchableOpacity>
                    } />

                <ScrollView showsVerticalScrollIndicator={false}>

                    <Image source={require('../../assets/image/a9.png')} style={{ height: height / 3, width: width - 40, resizeMode: 'stretch', marginTop: 10 }}></Image>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 30 }}>
                        <Text style={[style.m14, { color: theme.disable3 }]}>Amount</Text>
                        <Text style={[style.s16, { color: theme.txt2 }]}>$9.99</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                        <Text style={[style.m14, { color: theme.disable3 }]}>Tax</Text>
                        <Text style={[style.s16, { color: theme.txt2 }]}>$1.99</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                        <Text style={[style.m14, { color: theme.disable3 }]}>Total</Text>
                        <Text style={[style.s16, { color: theme.txt2 }]}>$11.99</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        {/* <Image source={theme.master}></Image> */}
                        <Text style={[style.b18, { color: theme.txt, flex: 1, marginLeft: 10 }]}>•••• •••• •••• •••• 4679</Text>
                        <Text style={[style.b16, { color: Colors.primary }]}>Change</Text>
                    </View>

                    <View style={{ marginTop: 50, marginBottom: 20 }}>
                        <TouchableOpacity onPress={() => setVisible(true)}
                            style={style.btn}>
                            <Text style={style.btntxt}>Continue</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
            <Modal transparent={true}
                visible={visible}>
                <View style={{
                    flex: 1,
                    backgroundColor: '#000000aa',
                    transparent: 'true'
                }}>
                    <View style={[style.modalcontainer, { backgroundColor: theme.bg, width: width - 60, marginVertical: 160 }]}>
                        <View style={{ marginTop: 10, marginHorizontal: 20 }}>
                            <View style={{ alignItems: 'flex-end' }}>
                                <TouchableOpacity onPress={() => setVisible(false)}>
                                    <Icon name="close-outline"  color={theme.txt} size={30} />
                                </TouchableOpacity>
                            </View>
                            <Image source={require('../../assets/image/s66.png')} style={{ height: height / 7, width: width/3, resizeMode: 'stretch', marginTop: 10 ,alignSelf:'center'}} />
                            <Text style={[style.subtitle, { color: Colors.primary, textAlign: 'center', marginTop: 20 }]}>Congratulations!</Text>
                            <Text style={[style.r16, { color: theme.txt, marginTop: 10, textAlign: 'center' }]}>You have successfully subscribed 1 month premium. Enjoy the benefits!</Text>
                            <View style={{ paddingVertical: 20 }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setVisible(false);
                                        navigation.navigate('MyTabs');
                                    }}
                                    style={[style.btn]}>
                                    <Text style={[style.btntxt]}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}