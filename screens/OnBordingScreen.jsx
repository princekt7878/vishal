// import React, { useState } from 'react'
// import {
//     FlatList,
//     View,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     useColorScheme,

// } from 'react-native';

// import Onboarding from 'react-native-onboarding-swiper';
// import { Picker } from '@react-native-picker/picker';

// import { icons } from "../constants";
// import { COLORS, FONTS, SIZES } from '../constants'
// import { Image } from 'react-native';
// import { TextInput } from 'react-native';


// const DATA = [
//     {
//         id: 1,
//         title: 'Client Meeting',
//         option: 'A',

//     },
//     {
//         id: 2,
//         title: 'Team Meeting',
//         option: 'B'
//     },
//     {
//         id: 3,
//         title: 'Working',
//         option: 'C'
//     },
//     {
//         id: 4,
//         title: 'Chilling',
//         option: 'D'
//     },
// ];
// const Seat = [
//     {
//         id: 1,
//         title: 'Just me',
//         option: 'A',
//     },
//     {
//         id: 2,
//         title: '2',
//         option: 'B'
//     },
//     {
//         id: 3,
//         title: '3',
//         option: 'C'
//     },
//     {
//         id: 4,
//         title: '4',
//         option: 'D'
//     },

// ];
// const Table = [
//     {
//         id: 1,
//         title: 'Elite (100Rs / hour)',
//         option: 'A',
//     },
//     {
//         id: 2,
//         title: '    Premium (75Rs / hour)',
//         option: 'B'
//     },
//     {
//         id: 3,
//         title: '    Standard (50Rs / hour)',
//         option: 'C'
//     },
// ];
// const Engagement = [
//     {
//         id: 1,
//         title: 'Per Hour',
//         option: 'A',
//     },
//     {
//         id: 2,
//         title: 'Per Day (8 hours)',
//         option: 'B'
//     },
//     {
//         id: 3,
//         title: 'Monthly (25 Day)',
//         option: 'C'
//     },
// ];

// const Second = () => {
//     //        const [radioChecked, setRadioChecked] = useState(false);
//     const [secondSelectedId, setSecondSelectedId] = useState(null);
//     const [number, onChangeNumber] = useState(null);

//     const Item = ({ item, onPress }) => (

//         <View style={{
//             flex: 1,
//             width: '55%',
//             height: 50,
//             opacity: 0.8,
//             alignItems: 'center',
//             justifyContent: 'center',
//             borderWidth: 0.6,
//             marginHorizontal: 20,
//             marginVertical: 10,
//             borderRadius: 5,
//             backgroundColor: item.id === secondSelectedId ? COLORS.gray : COLORS.lightGray,

//             borderColor: 'black',
//         }}><TouchableOpacity onPress={onPress} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
//                 <View
//                     style={{
//                         width: 25,
//                         height: 25,
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         backgroundColor: COLORS.black,
//                         marginLeft: 30,
//                         borderColor: COLORS.lightGray,
//                         marginRight: -20,
//                         borderWidth: 0.6,
//                         borderRadius: 5
//                     }}>
//                     <Text style={{ color: COLORS.white }}>{item.option}</Text>
//                 </View>
//                 <View
//                     style={{
//                         flex: 1,
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                     }}>
//                     <Text style={{ color: COLORS.lightGray2 }} >{item.title}</Text>
//                 </View>
//             </TouchableOpacity>
//         </View>
//     );


//     const SecondrenderItem = ({ item }) => {
//         const backgroundColor = item.id === secondSelectedId ? COLORS.lightGray : COLORS.gray;


//         return <Item item={item} onPress={() => setSecondSelectedId(item.id)} style={{ backgroundColor }} />;
//     };

//     return (

//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <Text style={styles.textInput}>How many seats do you want ?</Text>
//                 <View style={{
//                     opacity: 0.7,
//                     width: 195,
//                     height: 50,
//                     borderWidth: 0.6,
//                     marginTop: SIZES.padding2 * 9,
//                     marginHorizontal: SIZES.padding - 30,
//                     marginVertical: 10,
//                     borderRadius: 5,
//                     backgroundColor: secondSelectedId ? COLORS.lightGray : COLORS.gray,

//                     borderColor: 'black',
//                 }}>


//                     <TextInput
//                         placeholder='How Many'
//                         placeholderTextColor={COLORS.white}
//                         onChangeText={onChangeNumber}
//                         value={number}
//                         keyboardType='numeric'
//                         style={{
//                             flex: 1,
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             marginLeft: SIZES.padding2 * 1.5,
//                             color: COLORS.white
//                         }}
//                     />


//                 </View>
//             </View>
//             <FlatList
//                 data={Seat}
//                 renderItem={SecondrenderItem}
//                 keyExtractor={item => item.id}
//                 extraData={secondSelectedId}
//             />

//         </View>
//     );
// };

// const Three = () => {
//     //        const [radioChecked, setRadioChecked] = useState(false);
//     const [threeSelectedId, setThreeSelectedId] = useState(null);
//     const Item = ({ item, onPress }) => (

//         <View style={{
//             flex: 1,
//             width: '55%',
//             height: 50,
//             opacity: 0.8,
//             alignItems: 'center',
//             justifyContent: 'center',
//             borderWidth: 0.6,
//             marginHorizontal: 20,
//             marginVertical: 10,
//             borderRadius: 5,
//             backgroundColor: item.id === threeSelectedId ? COLORS.gray : COLORS.lightGray,

//             borderColor: 'black',
//         }}><TouchableOpacity onPress={onPress} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
//                 <View
//                     style={{
//                         width: 25,
//                         height: 25,
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         backgroundColor: COLORS.black,
//                         marginLeft: 30,
//                         borderColor: COLORS.lightGray,
//                         marginRight: -20,
//                         borderWidth: 0.6,
//                         borderRadius: 5
//                     }}>
//                     <Text style={{ color: COLORS.white }}>{item.option}</Text>
//                 </View>
//                 <View
//                     style={{
//                         flex: 1,
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                     }}>
//                     <Text style={{ color: COLORS.lightGray2 }} >{item.title}</Text>
//                 </View>
//             </TouchableOpacity>
//         </View>
//     );


//     const threerenderItem = ({ item }) => {
//         const backgroundColor = item.id === threeSelectedId ? COLORS.lightGray : COLORS.gray;


//         return <Item item={item} onPress={() => setThreeSelectedId(item.id)} style={{ backgroundColor }} />;
//     };

//     return (

//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <Text style={styles.textInput}>Which class of table would you like?</Text>
//             </View>
//             <FlatList
//                 data={Table}
//                 renderItem={threerenderItem}
//                 keyExtractor={item => item.id}
//                 extraData={threeSelectedId}
//             />

//         </View>
//     );
// };

// const Four = () => {
//     //        const [radioChecked, setRadioChecked] = useState(false);
//     const [fourSelectedId, setFourSelectedId] = useState(null);
//     const Item = ({ item, onPress }) => (

//         <View style={{
//             flex: 1,
//             width: '55%',
//             height: 50,
//             opacity: 0.8,
//             alignItems: 'center',
//             justifyContent: 'center',
//             borderWidth: 0.6,
//             marginHorizontal: 20,
//             marginVertical: 10,
//             borderRadius: 5,
//             backgroundColor: item.id === fourSelectedId ? COLORS.gray : COLORS.lightGray,

//             borderColor: 'black',
//         }}><TouchableOpacity onPress={onPress} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
//                 <View
//                     style={{
//                         width: 25,
//                         height: 25,
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         backgroundColor: COLORS.black,
//                         marginLeft: 30,
//                         borderColor: COLORS.lightGray,
//                         marginRight: -20,
//                         borderWidth: 0.6,
//                         borderRadius: 5
//                     }}>
//                     <Text style={{ color: COLORS.white }}>{item.option}</Text>
//                 </View>
//                 <View
//                     style={{
//                         flex: 1,
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                     }}>
//                     <Text style={{ color: COLORS.lightGray2 }} >{item.title}</Text>
//                 </View>
//             </TouchableOpacity>
//         </View>
//     );


//     const fourrenderItem = ({ item }) => {
//         const backgroundColor = item.id === fourSelectedId ? COLORS.lightGray : COLORS.gray;


//         return <Item item={item} onPress={() => setFourSelectedId(item.id)} style={{ backgroundColor }} />;
//     };

//     return (

//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <Text style={styles.textInput}>What is your type of engagement?</Text>
//             </View>
//             <FlatList
//                 data={Engagement}
//                 renderItem={fourrenderItem}
//                 keyExtractor={item => item.id}
//                 extraData={fourSelectedId}
//             />

//         </View>
//     );
// };


// const Fisrt = () => {
//     //        const [radioChecked, setRadioChecked] = useState(false);
//     const [selectedId, setSelectedId] = useState(null);
//     const [selectedValue, setSelectedValue] = useState(null);
//     const [choosenLabel, setChoosenLabel] = useState('Other');
//     const [choosenIndex, setChoosenIndex] = useState('2');

//     const Item = ({ item, onPress }) => (
//         <>
//             <View style={{
//                 flex: 1,
//                 width: '65%',
//                 opacity: 0.8,
//                 height: 50,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 borderWidth: 0.6,
//                 marginVertical: 10,
//                 borderRadius: 5,
//                 backgroundColor: item.id === selectedId ? COLORS.gray : COLORS.lightGray4,

//                 borderColor: 'black',
//             }}><TouchableOpacity onPress={onPress} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
//                     <View
//                         style={{
//                             width: 25,
//                             height: 25,
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             backgroundColor: COLORS.black,
//                             marginLeft: 30,
//                             borderColor: COLORS.lightGray,
//                             marginRight: -20,
//                             borderWidth: 0.6,
//                             borderRadius: 5
//                         }}>
//                         <Text style={{ color: COLORS.white }}>{item.option}</Text>
//                     </View>
//                     <View
//                         style={{
//                             flex: 1,
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                         }}>
//                         <Text style={{ color: COLORS.lightGray2 }} >{item.title}</Text>
//                     </View>
//                 </TouchableOpacity>

//             </View>

//         </>
//     );


//     const renderItem = ({ item }) => {
//         const backgroundColor = item.id === selectedId ? COLORS.lightGray2 : COLORS.gray;


//         return <Item item={item} onPress={() => setSelectedId(item.id)} style={{ backgroundColor }} />;
//     };

//     return (

//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <Text style={styles.textInput}>What are you up to today ?</Text>
//                 <View style={{
//                     opacity: 0.7,
//                     width: 200,
//                     height: 50,
//                     borderWidth: 0.6,
//                     marginTop: SIZES.padding2 * 9,
//                     marginHorizontal: -SIZES.base * 3,
//                     marginVertical: 10,
//                     borderRadius: 5,
//                     backgroundColor: selectedValue ? COLORS.lightGray4 : COLORS.gray,

//                     borderColor: 'black',
//                 }}>

//                     <Picker
//                         style={{ backgroundColor: selectedValue ? COLORS.black : COLORS.lightGray4, color: COLORS.white }}
//                         selectedValue={choosenLabel}
//                         mode='dropdown'
//                         onValueChange={(itemValue, itemIndex) => {
//                             setChoosenLabel(itemValue);
//                             setChoosenIndex(itemIndex);
//                         }}>
//                         <Picker.Item label="Others" value="Others" />
//                         <Picker.Item label="Conference" value="Conference" />
//                         <Picker.Item label="Employee Engagement" value="Employee Engagement" />
//                         <Picker.Item label="Event" value="Event" />
//                     </Picker>

//                 </View>
//             </View>
//             <FlatList
//                 data={DATA}
//                 renderItem={renderItem}
//                 keyExtractor={item => item.id}
//                 extraData={selectedId}
//             />


//         </View>
//     );
// };


// const OnBordingScreen = ({ navigation }) => {





//     return (
//         <>
//             <Onboarding
//                 onSkip={() => navigation.navigate('Home')}
//                 onDone={() => navigation.navigate('Home')}

//                 pages={[
//                     {
//                         backgroundColor: COLORS.black,
//                         title: Fisrt(),
//                         image: <Image source={require('../assets/icons/login_bro.png')} style={{ width: "100%", height: 450 }} />,


//                     },
//                     {
//                         backgroundColor: COLORS.black,
//                         image: <Image source={require('../assets/icons/login_bro.png')} style={{ width: "100%", height: 450 }} />,
//                         //<Image source={require('../assets/images/manharModi.png')} />,
//                         title: Second(),
//                         subtitle: false,
//                     },
//                     {
//                         backgroundColor: COLORS.black,
//                         image: <Image source={require('../assets/icons/login_bro.png')} style={{ width: "100%", height: 450 }} />,
//                         //<Image source={require('../assets/images/the_tiny_dragon.jpg')} />,
//                         title: Three(),
//                         subtitle: false,
//                     },
//                     {
//                         backgroundColor: COLORS.black,
//                         image: <Image source={require('../assets/icons/login_bro.png')} style={{ width: "100%", height: 450 }} />,
//                         //<Image source={require('../assets/images/underland.jpg')} />,
//                         title: Four(),
//                         subtitle: false,
//                     },

//                 ]}
//             />

//         </>
//     )
// }

// export default OnBordingScreen

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         position: 'absolute',
//         top: SIZES.padding2 * 2,
//     },

//     header: {
//         height: 40,
//         marginHorizontal: SIZES.base * 3
//     },


//     textInput: {
//         marginTop: -20,
//         fontSize: SIZES.h2,
//         color: COLORS.white,
//     },
// });


// import React, { useState } from 'react';
// import {
//     Animated,
//     Image,
//     SafeAreaView,
//     StyleSheet,
//     View,
//     Text,
//     TouchableOpacity
// } from 'react-native';
// // constants
// import { theme, icons } from "../constants";
// const { login_bro, reward, Wallet_amico, Work_chat_amico } = icons;
// import { Picker } from '@react-native-picker/picker';

// // theme
// const { COLORS, FONTS, SIZES } = theme;

// const onBoardings = [
//     {
//         title: "What are you up to today ?",
//         description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
//         img: login_bro
//     },
//     {
//         title: "How many seats do you want ?",
//         description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
//         img: login_bro
//     },
//     {
//         title: "Which class of table would you like?",
//         description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
//         img: login_bro
//     },
//     {
//         title: "What is your type of engagement?",
//         description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
//         img: login_bro
//     }
// ];

// const OnBoarding = ({ navigation }) => {
//     const [completed, setCompleted] = React.useState(false);

//     const scrollX = new Animated.Value(0);

//     React.useEffect(() => {
//         scrollX.addListener(({ value }) => {
//             if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
//                 setCompleted(true);
//             }
//         });

//         return () => scrollX.removeListener();
//     }, []);

//     // Render

//     function renderContent() {
//         const [selectedId, setSelectedId] = useState(null);
//         const [selectedValue, setSelectedValue] = useState(null);

//         return (
//             <Animated.ScrollView
//                 horizontal
//                 pagingEnabled
//                 scrollEnabled
//                 decelerationRate={0}
//                 scrollEventThrottle={16}
//                 snapToAlignment="center"
//                 showsHorizontalScrollIndicator={false}
//                 onScroll={Animated.event([
//                     { nativeEvent: { contentOffset: { x: scrollX } } },
//                 ], { useNativeDriver: false })}
//             >
//                 {onBoardings.map((item, index) => (
//                     <View
//                         //center
//                         //bottom
//                         key={`img-${index}`}
//                         style={styles.imageAndTextContainer}
//                     >
//                         <View style={{ flex: 2, alignItems: 'center', top: "13%" }}>
//                             <Image
//                                 source={item.img}
//                                 resizeMode="cover"
//                                 style={{
//                                     width: "100%",
//                                     height: "50%",
//                                 }}
//                             />
//                         </View>
//                         <View
//                             style={{
//                                 position: 'absolute',
//                                 bottom: "23%",
//                                 left: 20,
//                                 right: 20
//                             }}
//                         >
//                             <Text style={{
//                                 ...FONTS.h2,
//                                 color: COLORS.white,
//                                 textAlign: 'center',
//                             }}
//                             >
//                                 {item.title}
//                             </Text>

//                             <Picker
//                                 selectedValue={selectedValue}
//                                 mode='dropdown'
//                                 dropdownIconColor={COLORS.gray}

//                                 style={{
//                                     height: 50, width: "80%",
//                                     ...FONTS.body3,
//                                     textAlign: 'center',
//                                     position:'relative',
//                                     left:40,
//                                     bottom:-20,
//                                     backgroundColor: COLORS.gray,
//                                     color: COLORS.white,
//                                 }}
//                                 onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
//                                 <Picker.Item label="Others" value="" />
//                                 <Picker.Item label="Conference" value="Conference" />
//                                 <Picker.Item label="Employee Engagement" value="Employee Engagement" />
//                                 <Picker.Item label="Event" value="Event" />
//                             </Picker>
//                         </View>
//                         {/* Button */}
//                         <TouchableOpacity
//                             style={{
//                                 position: 'absolute',
//                                 right: 0,
//                                 bottom: 0,

//                                 width: 100,
//                                 height: 50,
//                                 paddingLeft: 20,
//                                 justifyContent: 'center',
//                                 borderTopLeftRadius: 30,
//                                 borderBottomLeftRadius: 30,
//                                 borderBottomRightRadius: 0,
//                                 borderTopRightRadius: 0,
//                                 backgroundColor: COLORS.primary
//                             }}
//                             onPress={() => { navigation.navigate("Home") }}
//                         >
//                             <Text style={{ ...FONTS.h1, color: COLORS.white }}>{completed ? "Done" : "Skip"}</Text>
//                         </TouchableOpacity>
//                     </View>
//                 ))}
//             </Animated.ScrollView>
//         );
//     }

//     function renderDots() {

//         const dotPosition = Animated.divide(scrollX, SIZES.width);

//         return (
//             <View style={styles.dotsContainer}>
//                 {onBoardings.map((item, index) => {
//                     const opacity = dotPosition.interpolate({
//                         inputRange: [index - 1, index, index + 1],
//                         outputRange: [0.3, 1, 0.3],
//                         extrapolate: "extend"
//                     });

//                     const dotSize = dotPosition.interpolate({
//                         inputRange: [index - 1, index, index + 1],
//                         outputRange: [SIZES.base, 12, SIZES.base],
//                         extrapolate: "extend"
//                     });

//                     return (
//                         <Animated.View
//                             key={`dot-${index}`}
//                             opacity={opacity}
//                             style={[styles.dot, { width: dotSize, height: dotSize, }]}
//                         />
//                     );
//                 })}
//             </View>
//         );
//     }

//     return (
//         <SafeAreaView style={styles.container}>
//             <View >
//                 {renderContent()}
//             </View>
//             <View style={styles.dotsRootContainer}>
//                 {renderDots()}
//             </View>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: COLORS.black
//     },
//     imageAndTextContainer: {
//         width: SIZES.width,
//         marginTop: -SIZES.padding2 * 2
//     },
//     dotsRootContainer: {
//         position: 'absolute',
//         bottom: SIZES.height > "80%" ? '20%' : '16%',
//     },
//     dotsContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginBottom: SIZES.padding * 6.5,

//     },
//     dot: {
//         borderRadius: SIZES.radius * 5,
//         backgroundColor: COLORS.white,
//         marginHorizontal: SIZES.radius / 2
//     }
// });

// export default OnBoarding;



import * as React from 'react';
import { FlatList, Animated, Text, Image, View, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('screen');
// constants
import { theme, icons } from "../constants";
const { login_bro, reward, Wallet_amico, Work_chat_amico } = icons;
import { Picker } from '@react-native-picker/picker';

// theme
const { COLORS, FONTS, SIZES } = theme;

// https://www.flaticon.com/packs/retro-wave
// inspiration: https://dribbble.com/shots/11164698-Onboarding-screens-animation
// https://twitter.com/mironcatalin/status/1321180191935373312

const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];
const DATA = [
    {
        "key": "3571572",
        "title": "Multi-lateral intermediate moratorium",
        "description": "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
        "image": "<Image source={require('../assets/icons/login_bro.png')} />",
    },
    {
        "key": "3571747",
        "title": "Automated radical data-warehouse",
        "description": "Use the optical SAS system, then you can navigate the auxiliary alarm!",
        "image": "https://image.flaticon.com/icons/png/256/3571/3571747.png"
    },
    {
        "key": "3571680",
        "title": "Inverse attitude-oriented system engine",
        "description": "The ADP array is down, compress the online sensor so we can input the HTTP panel!",
        "image": "https://image.flaticon.com/icons/png/256/3571/3571680.png"
    },
    {
        "key": "3571603",
        "title": "Monitored global data-warehouse",
        "description": "We need to program the open-source IB interface!",
        "image": "https://image.flaticon.com/icons/png/256/3571/3571603.png"
    }
]

const Indicator = ({ scrollX }) => {
    return (
        <View style={{ position: 'absolute', flexDirection: 'row', bottom: 100 }}>
            {DATA.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.8, 1.4, 0.8],
                    extrapolate: 'clamp',
                });
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.6, 0.9, 0.6],
                    extrapolate: 'clamp',
                });
                return (
                    <Animated.View
                        key={'indicator-${i}'}
                        style={{
                            height: 10,
                            width: 10,
                            borderRadius: 5,
                            backgroundColor: COLORS.white,
                            margin: 5,
                            opacity,
                            transform: [
                                {
                                    scale,
                                },
                            ]
                        }}
                    />)
            })}
        </View>
    )
}

const Backdrop = ({ scrollX }) => {

    const backgroundColor = scrollX.interpolate({
        inputRange: bgs.map((_, i) => i * width),
        outputRange: bgs.map((bg) => bg)
    });
    return (
        <Animated.View
            style={[
                StyleSheet.absoluteFillObject,
                {
                    backgroundColor,
                }
            ]}
        />
    )
}

const Square = ({ scrollX }) => {
    const YOLO = Animated.modulo(Animated.divide(
        Animated.modulo(scrollX, width),
        new Animated.Value(width)
    ),
        1
    );
    const rotate = YOLO.interpolate({
        inputRange:[0,0.5,1],
        outputRange:['35deg','0deg','35deg']
    });
    
    const translateX = YOLO.interpolate({
        inputRange:[0,0.5,1],
        outputRange:[0,-height,0]
    });
    return (
        <Animated.View
            style={{
                width: height,
                height: height,
                backgroundColor: COLORS.white,
                borderRadius: 85,
                position: 'absolute',
                top: -height * 0.6,
                left: -height * 0.3,
                transform: [
                    {
                        rotate
                    },
                    {
                        translateX
                    },
                ]
            }}

        />
    )
}
export default function OnBordingScreen() {

    const scrollX = React.useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.container}>
            <Backdrop scrollX={scrollX} />
            <Square scrollX={scrollX} />
            <Animated.FlatList
                data={DATA}
                keyExtractor={item => item.key}
                horizontal
                pagingEnabled
                scrollEventThrottle={32}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                contentContainerStyle={{ paddingBottom: 100 }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width, alignItems: 'center' }}>
                            <View style={{ flex: 0.7, padding: 20, justifyContent: 'center' }}>
                                <Image source={require('../assets/icons/login_bro.png')}
                                    style={{
                                        width: width / 2,
                                        height: width / 2,
                                        resizeMode: 'contain'
                                    }}
                                />
                            </View>
                            <View style={{ flex: 0.3 }}>
                                <Text style={{
                                    fontSize: SIZES.h2,
                                    marginHorizontal: SIZES.base * 2,
                                    marginVertical: SIZES.base * 1.5,
                                    color: COLORS.white,
                                    fontWeight: '800'
                                }}>
                                    {item.title}
                                </Text>
                                <Text style={{
                                    color: COLORS.lightGray3,
                                    marginHorizontal: SIZES.padding2,
                                }}>
                                    {item.description}
                                </Text>
                            </View>
                        </View>
                    )
                }}
            />
            <Indicator
                scrollX={scrollX}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});