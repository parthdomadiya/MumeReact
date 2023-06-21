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
import DateTimePickerModal from "react-native-modal-datetime-picker";

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function AddCard() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [checked, setChecked] = useState(false);

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
    const [selectDate, setSelectDate] = useState('Select Date');
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const dt = new Date(date);
        const x = dt.toISOString().split('T');
        const x1 = x[0].split('-');
        setSelectDate(x1[2] + '/' + x1[1] + '/' + x1[0]);
        hideDatePicker();
    };
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{flex:1}}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 10 }]}>
                <AppBar
                    color={theme.bg}
                    title='Add New Card'
                    titleStyle={[style.apptitle, { color: theme.txt }]}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('PaymentMethod')}>
                        <Icons name="arrow-left" color={theme.txt} size={30} />
                    </TouchableOpacity>
                    }
                    trailing={<TouchableOpacity>
                        <Icons name="line-scan" color={theme.txt} size={20} />
                    </TouchableOpacity>
                    }
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={require('../../assets/image/s65.png')} style={{ height: height / 4.2, width: width - 40, resizeMode: 'stretch', marginTop: 15 }} />
                    <View style={[style.divider, { backgroundColor: theme.border, marginTop: 15 }]}></View>
                    <Text style={[style.b18, { color: theme.txt, marginTop: 15 }]}>Card Name</Text>
                    <View style={[style.txtinput, { backgroundColor: theme.input, marginTop: 10 }]}>
                        <TextInput placeholder='Enter Card Name' placeholderTextColor={theme.disable}
                            selectionColor={Colors.primary}
                            style={[style.s14, { color: theme.txt }]}
                        />
                    </View>
                    <Text style={[style.b18, { color: theme.txt, marginTop: 15 }]}>Card Number</Text>
                    <View style={[style.txtinput, { backgroundColor: theme.input, marginTop: 10 }]}>
                        <TextInput placeholder='Enter Card Number' placeholderTextColor={theme.disable}
                            selectionColor={Colors.primary}
                            style={[style.s14, { color: theme.txt }]}
                            keyboardType='phone-pad'
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Expiry Date</Text>
                            <View style={[style.txtinput, { backgroundColor: theme.input, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }]}>
                                <TextInput 
                                    selectionColor={Colors.primary}
                                    style={[style.s14, { color: theme.txt }]}
                                    value={selectDate}
                                />
                                <TouchableOpacity onPress={showDatePicker}  >
                                    <DateTimePickerModal
                                        isVisible={isDatePickerVisible}
                                        mode="date"
                                        onConfirm={handleConfirm}
                                        onCancel={hideDatePicker}

                                    />
                                    <Icons name='calendar-month-outline' color={theme.disable} size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 5 }}></View>
                        <View style={{ flex: 1 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>CVV</Text>
                            <View style={[style.txtinput, { backgroundColor: theme.input, marginTop: 10 }]}>
                                <TextInput placeholder='CVV' placeholderTextColor={theme.disable}
                                    selectionColor={Colors.primary}
                                    style={[style.s14, { color: theme.txt }]}
                                    keyboardType='phone-pad'
                                />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('PaymentMethod2')} style={[style.btn, {marginVertical:20}]}>
                        <Text style={[style.btntxt, {}]}>Add</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}