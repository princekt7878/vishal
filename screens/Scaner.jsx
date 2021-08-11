import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, Button, Image } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scanner({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        navigation.navigate('ChatScreen')
    };


    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={[StyleSheet.absoluteFill, styles.container]}>

                <MaterialIcons onPress={() => navigation.pop()}
                    style={styles.cancel} name="cancel" color="black" />

            </BarCodeScanner>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    qr: {
        marginTop: '20%',
        marginBottom: '20%',
        width: SIZES.width * 0.7,
        height: SIZES.width * 0.7,
    },
    description: {
        fontSize: SIZES.width * 0.09,
        marginTop: '10%',
        textAlign: 'center',
        width: '70%',
        color: 'white',
    },
    cancel: {
        fontSize: SIZES.width * 0.10,
        textAlign: 'center',
        marginTop: '180%',
        width: '70%',
        color: 'white',
    },
});
