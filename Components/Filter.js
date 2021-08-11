import React, { useState } from 'react'
import { StyleSheet, CheckBox, Text, View, SafeAreaView, ScrollView } from 'react-native'
import Slider from '@react-native-community/slider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, SIZES, FONTS } from '../constants';

const Filter = ({ navigation }) => {

    const [number, setNumber] = useState(0);
    const [noNumber, setNoNumber] = useState(1);
    const [no, setNo] = useState(50);
    const [num, setNum] = useState(1);
    const [isSelected, setIsSelected] = useState(false);
    const [selection, setSelection] = useState(false);
    const [selected, setSelected] = useState(false);
    const [isSelection, setIsSelection] = useState(false);


    const handleSubmit = async () => {
       
            navigation.navigate('Home', { number, noNumber,no,num,isSelected,selection,selected,isSelection });
        console.log( number, noNumber,no,num,isSelected,selection,selected,isSelection);

    }


    return (
        <SafeAreaView style={{ backgroundColor: COLORS.black, flex: 1 }}>

            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: SIZES.padding2/3 }}>
                    <View>
                        <Text style={{ color: COLORS.white, fontSize: SIZES.h2 }}>Most Happening</Text>
                    </View>
                    <View style={{ marginLeft: 10, marginTop: 5 }}>
                        <Slider
                            style={{
                                width: 180,
                                height: 20,
                                overflow: 'hidden',
                            }}
                            minimumValue={0}
                            step={10}
                            maximumValue={100}
                            value={number}
                            onValueChange={number => { setNumber(number) }}
                            thumbTintColor={COLORS.primary}
                            minimumTrackTintColor={COLORS.white}
                            maximumTrackTintColor={COLORS.lightGray2}

                        />
                        <View style={styles.textCon}>
                            <Text style={styles.colorGrey}>5 km</Text>
                            <Text style={styles.colorYellow}>
                                {number + 'km'}
                            </Text>
                            <Text style={styles.colorGrey}>100 km</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: SIZES.padding2 }}>
                    <View>
                        <Text style={{ color: COLORS.white, fontSize: SIZES.h2 }}>Nearest</Text>
                    </View>
                    <View style={{ marginHorizontal: SIZES.padding2 * 2.65, marginTop: 5 }}>
                        <Slider
                            style={{
                                width: 180,
                                height: 20,
                                overflow: 'hidden',
                            }}
                            minimumValue={1}
                            step={5}
                            maximumValue={100}
                            value={noNumber}
                            onValueChange={noNumber => { setNoNumber(noNumber) }}
                            thumbTintColor={COLORS.primary}
                            minimumTrackTintColor={COLORS.white}
                            maximumTrackTintColor={COLORS.lightGray2}

                        />
                        <View style={styles.textCon}>
                            <Text style={styles.colorGrey}>1 km</Text>
                            <Text style={styles.colorYellow}>
                                {noNumber + 'km'}
                            </Text>
                            <Text style={styles.colorGrey}>100 km</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: SIZES.padding2 }}>
                    <View>
                        <Text style={{ color: COLORS.white, fontSize: SIZES.h2 }}>Pricing </Text>
                    </View>
                    <View style={{ marginHorizontal: SIZES.padding2 * 2.75, marginTop: 5 }}>
                        <Slider
                            style={{
                                width: 180,
                                height: 20,
                                overflow: 'hidden',
                            }}
                            minimumValue={50}
                            step={5}
                            maximumValue={100}
                            value={no}
                            onValueChange={no => { setNo(no) }}
                            thumbTintColor={COLORS.primary}
                            minimumTrackTintColor={COLORS.white}
                            maximumTrackTintColor={COLORS.lightGray2}

                        />
                        <View style={styles.textCon}>
                            <Text style={styles.colorGrey}>  50  </Text>
                            <Text style={styles.colorYellow}>
                                {no}
                            </Text>
                            <Text style={styles.colorGrey}>500 </Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: SIZES.padding2 }}>
                    <View>
                        <Text style={{ color: COLORS.white, fontSize: SIZES.h2 }}>Seats    </Text>
                    </View>
                    <View style={{ marginHorizontal: SIZES.padding2 * 2.7, marginTop: 5 }}>
                        <Slider
                            style={{
                                width: 180,
                                height: 20,
                                overflow: 'hidden',
                            }}
                            minimumValue={1}
                            step={5}
                            maximumValue={100}
                            value={num}
                            onValueChange={num => { setNum(num) }}
                            thumbTintColor={COLORS.primary}
                            minimumTrackTintColor={COLORS.white}
                            maximumTrackTintColor={COLORS.lightGray2}

                        />
                        <View style={styles.textCon}>
                            <Text style={styles.colorGrey}>   1 </Text>
                            <Text style={styles.colorYellow}>
                                {num}
                            </Text>
                            <Text style={styles.colorGrey}>100  </Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: SIZES.padding / 2 }}>
                    <View>
                        <Text style={{ color: COLORS.white, fontSize: SIZES.h2 }}>Best For</Text>
                    </View>
                    <View style={{ marginHorizontal: SIZES.padding2 * 2.7, marginTop: 5 }}>
                        <View style={styles.checkboxInput}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setIsSelected}
                                style={styles.checkbox}

                            />
                            <Text style={styles.label}>Clint meet</Text>
                        </View>
                        <View style={styles.checkboxInput}>
                            <CheckBox
                                value={selection}
                                onValueChange={setSelection}
                                style={styles.checkbox}
                            />
                            <Text style={styles.label}>Team meet</Text>
                        </View>
                        <View style={styles.checkboxInput}>
                            <CheckBox
                                value={selected}
                                onValueChange={setSelected}
                                style={styles.checkbox}
                            />
                            <Text style={styles.label}>Working</Text>
                        </View>
                        <View style={styles.checkboxInput}>
                            <CheckBox
                                value={isSelection}
                                onValueChange={setIsSelection}
                                style={styles.checkbox}
                            />
                            <Text style={styles.label}>Chilling</Text>
                        </View>

                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        style={{
                            height: 60,
                            backgroundColor: COLORS.primary,
                            marginHorizontal: SIZES.base,
                            marginVertical: SIZES.base,
                            borderRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        // onPress={toggleBottomNavigationView}

                        onPress={() => handleSubmit()}
                    >

                        <Text style={{ ...FONTS.h3, color: COLORS.white }}> Book Now</Text>
                    </TouchableOpacity>

                </View>
            </View>


        </SafeAreaView>



    )
}

export default Filter

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.black,
    },
    textCon: {
        width: 180,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    colorGrey: {
        color: '#d3d3d3'
    },
    colorYellow: {
        color: COLORS.lightGray4
    },
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    profileImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    searchInputContainer: {
        height: 50,
        backgroundColor: COLORS.light,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 12,
    },
    sortBtn: {
        backgroundColor: COLORS.dark,
        height: 50,
        width: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    checkboxInput: {
        flexDirection: "row",
        marginBottom: 10,

    },
    label: {
        margin: 8,
        color: COLORS.lightGray3
    },
    optionsCard: {
        height: 210,
        width: 250,
        elevation: 15,
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 20,
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    optionsCardImage: {
        height: 140,
        borderRadius: 10,
        width: '100%',
    },
    optionListsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    categoryListText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 5,
        color: COLORS.gray,
    },
    activeCategoryListText: {
        color: COLORS.dark,
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
    categoryListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        paddingHorizontal: 40,
    },
    card: {
        height: 250,
        backgroundColor: COLORS.white,
        elevation: 10,
        width: 150,
        marginRight: 20,
        padding: 15,
        borderRadius: 20,
    },
    cardImage: {
        width: '100%',
        height: 120,
        borderRadius: 15,
    },
    facility: { flexDirection: 'row', marginRight: 15 },
    facilityText: { marginLeft: 5, color: COLORS.gray },
})
