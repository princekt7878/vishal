import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    CheckBox,
    StyleSheet
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const Signin = ({ props, navigation }) => {


    const [number, setNumber] = useState();
    const [isSelected, setSelection] = useState(false);
    const [name, setName] = useState();




    const handleSubmit = async () => {
        if (number && number.length > 9 && name && name.length > 0) {
            navigation.navigate('otp', { number, name });
        }
        else
            alert("Please enter vaild details");

    }


    const Nuro = ({ children, size, style }) => {
        return (
            <>
            <View style={styles.topShadow}>
                    <View style={styles.bottomShadow}>
                        <View style={[styles.inner, { width: 200, height: size || 40, borderRadius: size / 2 || 40 / 2 },style]}>
                            {children}
                        </View>
                    </View>

                </View>

            </>
        )
    }





    return (

        <>
            <SafeAreaView style={{ flex: 1, backgroundColor:COLORS.black}}>
                <View style={{ flex: 1, height: 200 }}>

                    <Text style={styles.text}>Please verify your Mobile Number.</Text>
                    <View style={{ flex: 1, paddingHorizontal: SIZES.padding2 }}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="+91-12345-6789"
                            placeholderTextColor={COLORS.lightGray}
                            keyboardType="numeric"
                            value={number}
                            maxLength={10}
                            onChangeText={(number) => { setNumber(number) }}
                            secureTextEntry={false}
                        />
                    </View>
                    <Text style={styles.text1}>Please enter your Name.</Text>
                    <View style={{ flex: 1, paddingHorizontal: SIZES.padding2 }}>
                        <TextInput
                            style={{
                                borderBottomWidth: 1,
                                borderBottomColor: COLORS.lightGray4,
                                fontSize: SIZES.h2,
                                height: 50,
                                color: COLORS.white
                            }}
                            placeholder="Name"
                            placeholderTextColor={COLORS.lightGray}
                            keyboardType='Text'
                            value={name}
                            maxLength={25}
                            onChangeText={(Name) => { setName(Name) }}
                            secureTextEntry={false}
                        />
                    </View>
                    <View style={{
                        flex: 1,
                        padding: SIZES.padding,
                        marginVertical: SIZES.padding ,
                        
                        flexDirection: 'row'
                    }}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}

                        />
                        <Text style={styles.text2}>By Clicking This Button You Agree Our T&C, And We Give You Otp On This Number  </Text>

                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        {/* Start Reading */}
                        <Nuro size={50}>
                            <TouchableOpacity
                                onPress={() => handleSubmit()}
                            >
                                <Text style={{ ...FONTS.h3, color: "#767A7F" }}>Agree & Continue</Text>
                            </TouchableOpacity>
                        </Nuro>
                    </View>

                </View>
            </SafeAreaView>
        </>
    )




}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: COLORS.black,
        opacity: 0.2
    },
    text: {
        fontSize: SIZES.h2,
        color: COLORS.lightGray4,
        marginVertical: SIZES.padding,
        marginHorizontal: SIZES.padding2,
    },

    text1: {
        fontSize: SIZES.h2,
        color: COLORS.lightGray4,
        marginHorizontal: SIZES.padding2,
        paddingTop: SIZES.padding2
    },

    text2: {
        fontSize: SIZES.h3,
        color: COLORS.lightGray4,
        paddingHorizontal: SIZES.padding
    },
    TextInput: {
        fontSize: SIZES.h2,
        height: 50,
        color: COLORS.white,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray4
    },
    inner:{
        backgroundColor:"#000111",
        alignItems:'center',
        
        justifyContent:'center',
        borderWidth:1,
        elevation:5,
        borderColor:"#141414",
    },
    topShadow:{
        shadowOffset:{
            width:-6,
            height:-6,
        },
        shadowOpacity:1,
        shadowRadius:6,
        shadowColor:"#fbffff"
    },
    bottomShadow:{
        shadowOffset:{
            width:6,
            height:6,
        },
        shadowOpacity:1,
        shadowRadius:6,
        
        shadowColor:"#b7c4dd"
        
    }
})
export default Signin