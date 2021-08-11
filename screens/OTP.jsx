import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

import firebaseApp from '../utils/config'

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: 50,
        height: 50,
        lineHeight: 38,
        color: COLORS.white,
        fontSize: 24,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: COLORS.lightGray2,
        textAlign: 'center',

    },
    focusCell: {
        borderColor: COLORS.primary,

    },
});

const CELL_COUNT = 4;

const OTP = ({ route: { params: { number } }, navigation }) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const [timer, setTimer] = useState(60)
    const [timeOver, setTimeOver] = React.useState(false)
    const [submittingOtp, setSubmittingOtp] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [confirm, setConfirm] = useState(null);

    const intervalRef = React.useRef([]);

    useEffect(() => {
        var time = timer;
        if (time > 0) {
            const id = setInterval(() => {
                time = time - 1
                setTimer(time)
                if (time <= 0) {
                    setTimeOver(true)
                    intervalRef.current.map((id) => {
                        clearInterval(id)
                    })
                }
            }, 1000);
            intervalRef.current.push(id);
        }
    }, [])

    useEffect(() => {
        signInWithPhoneNumber();
    }, [number])


    const signInWithPhoneNumber = async () => {
        try {
            const verify = firebaseApp.auth().RecaptchaVerifier(
                "recaptcha-container", {
                size: "invisible"
            }
            );
            const confirmation = await firebaseApp.auth().signInWithPhoneNumber(number, verify);
            setConfirm(confirmation);
        } catch (e) {
            console.log('====================================');
            console.log(JSON.stringify(e));
            console.log('====================================');
            alert(JSON.stringify(e));
        }
    }



    async function confirmCode() {
        try {

            const response = await confirm.confirm(value);
            if (response) {
            }
        } catch (e) {
            alert(JSON.stringify(e));
        }
    }




    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        return ` ${getMinutes} : ${getSeconds}`
    }


    const handleSubmit = async () => {
        if (number && number.length > 4) {
            navigation.navigate('Home', { number });
        }
        else
            alert("Please enter valid verification code");
    }




    return (
        <>
            <StatusBar barStyle='default' />
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
                <View style={{ flexDirection: 'row', marginVertical: SIZES.padding2, paddingHorizontal: SIZES.radius, height: 50, alignItems: 'center', justifyContent: 'center' }}>

                    <Text style={{ ...FONTS.h1, color: COLORS.white }}>Verification</Text>
                </View>

                <View
                    style={{ paddingHorizontal: SIZES.padding2, }}>
                    <CodeField
                        ref={ref}
                        {...props}
                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (

                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>

                        )}
                    />
                </View>
                <View style={{ marginVertical: SIZES.padding2, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <Text style={{ ...FONTS.h3, color: COLORS.white }}>{formatTime()}</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <Text style={{ ...FONTS.h3, color: COLORS.white }}>Didn't recive the code ? </Text>
                    <TouchableOpacity
                        disabled={true}
                        style={{ marginLeft: SIZES.base }}
                        onPress={() => alert("gand maray loda tara bap navro betho che")}
                    >
                        <Text style={{ ...FONTS.h3, color: COLORS.lightRed }}>Resend Code</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ flex: 1, alignItems: 'center' }}>
                    {/* Start Reading */}
                    <TouchableOpacity
                        style={{
                            width: 200,
                            height: 50,
                            backgroundColor: COLORS.gray1,
                            marginHorizontal: SIZES.padding2,
                            marginTop: 100,
                            borderRadius: SIZES.radius,
                            elevation: 20,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => handleSubmit()}
                    >
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>continue</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </>
    );
};

export default OTP;

// confirmCode()