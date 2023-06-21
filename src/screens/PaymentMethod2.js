import { View, Text, Image, Dimensions, TouchableOpacity, SafeAreaView, ImageBackground, StatusBar, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { AppBar } from '@react-native-material/core';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons'
import { RadioButton } from 'react-native-paper';

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function PaymentMethod2() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [checked, setChecked] = useState(false);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 10 }]}>
                <AppBar
                    color={theme.bg}
                    title='Payment'
                    titleStyle={[style.apptitle, { color: theme.txt }]}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('AddCard')}>
                        <Icons name="arrow-left" color={theme.txt} size={30} />
                    </TouchableOpacity>
                    }
                    trailing={<TouchableOpacity>
                        <Icons name="line-scan" color={theme.txt} size={20} />
                    </TouchableOpacity>
                    }
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={[style.m16, { color: theme.txt2, marginVertical: 15 }]}>Select the payment method you want to use.</Text>
                    <View style={{ paddingTop: 15, }}>
                        <View style={[style.txtinput, { backgroundColor: theme.input, flexDirection: 'row', alignItems: 'center' }]}>
                            <Image source={require('../../assets/image/paypal.png')}
                                style={{ resizeMode: 'stretch', height: height / 32, width: width / 15 }}
                            />
                            <Text style={[style.b18, { color: theme.txt, marginHorizontal: 10 }]}>Paypal</Text>
                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                <RadioButton
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('first')}
                                    color={theme.txt}
                                    uncheckedColor={theme.txt}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingTop: 15, }}>
                        <View style={[style.txtinput, { backgroundColor: theme.input, flexDirection: 'row', alignItems: 'center' }]}>
                            <Image source={require('../../assets/image/Google.png')}
                                style={{ resizeMode: 'stretch', height: height / 32, width: width / 15 }}
                            />
                            <Text style={[style.b18, { color: theme.txt, marginHorizontal: 10 }]}>Google pay</Text>
                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                <RadioButton
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('second')}
                                    color={theme.txt}
                                    uncheckedColor={theme.txt}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingTop: 15, }}>
                        <View style={[style.txtinput, { backgroundColor: theme.input, flexDirection: 'row', alignItems: 'center' }]}>
                            <Image source={require('../../assets/image/Apple.png')}
                                style={{ resizeMode: 'stretch', height: height / 32, width: width / 15, tintColor: theme.txt }}
                            />
                            <Text style={[style.b18, { color: theme.txt, marginHorizontal: 10 }]}>Apple Pay</Text>
                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                <RadioButton
                                    value="third"
                                    status={checked === 'third' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('third')}
                                    color={theme.txt}
                                    uncheckedColor={theme.txt}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingTop: 15, }}>
                        <View style={[style.txtinput, { backgroundColor: theme.input, flexDirection: 'row', alignItems: 'center' }]}>
                            <Image source={theme.master}
                                style={{ resizeMode: 'stretch', height: height / 30, width: width / 10 }}
                            />
                            <Text style={[style.b18, { color: theme.txt, marginHorizontal: 10 }]}>•••• •••• •••• •••• 4679</Text>
                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                <RadioButton
                                    value="fourth"
                                    status={checked === 'fourth' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('fourth')}
                                    color={theme.txt}
                                    uncheckedColor={theme.txt}
                                />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={[style.btn, { marginVertical: 20, backgroundColor: theme.bg2 }]}>
                        <Text style={[style.btntxt, { color: theme.s }]}>Add New Card</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Review')} style={[style.btn, { margin: 20 }]}>
                <Text style={[style.btntxt, {}]}>Continue</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}