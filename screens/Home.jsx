import React, { useContext, useEffect, useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    LogBox,
    StatusBar
} from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { SearchBar } from 'react-native-elements';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import { cafeData } from "../data";
import { SliderBox } from "react-native-image-slider-box";

import Swiper from 'react-native-swiper';







const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 18 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1 }}></View>
        </View>
    )
}

const Home = ({ route, navigation }) => {






    const profileData = {
        name: 'Yash Rabari',
        point: 200
    }

    const MAM = {
        id: 1,
        name: "The Project Cafe",
        bookFrontCover: images.manharModi,
        money: 50,
        latitude: 23.018950,
        longitude: 72.541510,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
        rating: 4.5,
        coordinate: {
            latitude: 23.018950,
            longitude: 72.541510,
        },
        language: "Guj",
        author: "Manhar Modi",
        facilities: [
            "ac", "parking", "printer", "wifi"
        ],
        description: "This is a place where you can be seen as she really is.",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000",
        images: [
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?girl",
            "https://source.unsplash.com/1024x768/?tree",
        ]
    }

    const bookTheMetropolis = {
        id: 2,
        name: "Cafe Coffee Day",
        bookFrontCover: images.theMetropolist,
        money: 100,
        latitude: 23.076789,
        longitude: 72.539063,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
        coordinate: {
            latitude: 23.076789,
            longitude: 72.539063,
        },
        rating: 4.1,
        language: "Eng",
        author: "Seith Fried",
        facilities: [
            "ac", "parking", "plug"
        ],
        description: "The dream of the great American city has been achieved.",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#000",
        images: [
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?girl",
            "https://source.unsplash.com/1024x768/?tree",
        ]
    }

    const bookTheTinyDragon = {
        id: 3,
        name: "Shambhus",
        bookFrontCover: images.theTinyDragon,
        money: 150,
        latitude: 23.039947,
        longitude: 72.531363,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
        coordinate: {
            latitude: 23.039947,
            longitude: 72.531363,
        },

        rating: 3.5,
        language: "Eng",
        author: "Ana C Bouvier",
        facilities: [
            "ac", "parking", "printer"
        ],
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills!",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF",
        images: [
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?girl",
            "https://source.unsplash.com/1024x768/?tree",
        ]
    }

    const myBooksData = [
        MAM, bookTheMetropolis, bookTheTinyDragon,
    ]

    const categoriesData = [
        {
            id: 1,
            categoryName: "All",
            books: [
                MAM, bookTheMetropolis, bookTheTinyDragon
            ]
        },
        {
            id: 2,
            categoryName: "Co-Working",
            books: [
                bookTheMetropolis
            ]
        },
        {
            id: 3,
            categoryName: "Cafes",
            books: [
                bookTheTinyDragon
            ]
        },
    ]

    const [profile, setProfile] = React.useState(profileData);
    const [myBooks, setMyBooks] = React.useState(cafeData);
    const [categories, setCategories] = React.useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = React.useState(1);

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])


    async function scanQR(params) {
        navigation.navigate('Scanner')
    }


    function renderHeader(profile) {
        return (
            <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: SIZES.padding, alignItems: 'center' }}>
                {/* Greetings */}
                <View style={{ flex: 1 }}>
                    <View style={{ marginRight: SIZES.padding }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>Map</Text>
                    </View>
                </View>

                {/* Points */}
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.darkBlue,
                        height: 50,
                        paddingLeft: 3,
                        paddingRight: SIZES.radius,
                        shadowColor: COLORS.white,
                        borderRadius: 25
                    }}
                    onPress={() => { navigation.navigate("Filter") }}
                >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 35, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                            <Image
                                source={icons.plus_icon}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25
                                }}
                            />
                        </View>
                        <View>
                            <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.body3 }}>{profile.name}</Text>
                            <Text style={{ marginLeft: SIZES.padding2, color: COLORS.white, ...FONTS.body3 }}>{profile.point}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    function renderButtonSection() {
        const [search, setSearch] = useState('');
    const [filteredCafeDataSource, setFilteredCafeDataSource] = useState([]);
    const [masterCafeDataSource, setMasterCafeDataSource] = useState(cafeData);


        const searchFilterFunction = (text) => {
            if (text) {
                const newData = masterCafeDataSource.filter(function (item) {
                    const itemData = item.name
                        ? item.name.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
                setFilteredCafeDataSource(newData);
                setSearch(text);
            } else {
                setFilteredCafeDataSource([]);
                setSearch(text);
            }
        };
        return (
            <>
                <View >
                <SearchBar
                        round
                        searchIcon={{ size: 24 }}
                        onChangeText={(text) => searchFilterFunction(text)}
                        onClear={(text) => searchFilterFunction('')}
                        placeholder="Type Here..."
                        value={search}
                    >
                        
                    </SearchBar>
                </View>
            </>
        )
    }

    // function renderMyBookSection(myBooks) {


    //     const renderItem = ({ item, index }) => {
    //         return (
    //             <TouchableOpacity
    //                 style={{
    //                     flex: 1,
    //                     marginLeft: index == 0 ? SIZES.padding : 0,
    //                     marginRight: SIZES.radius
    //                 }}
    //                 onPress={() => navigation.navigate("CafeDetails", {
    //                     book: item
    //                 })}
    //             >
    //                 {/* Book Cover */}
    //                 <Image
    //                     source={{ uri: item.img }}
    //                     resizeMode="cover"
    //                     style={{
    //                         width: 180,
    //                         height: 250,
    //                         borderRadius: 20
    //                     }}
    //                 />

    //                 {/* Book Info */}
    //                 <View style={{ marginTop: SIZES.radius, flexDirection: 'row', alignItems: 'center' }}>

    //                     <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}>{item.name}</Text>


    //                 </View>
    //             </TouchableOpacity>
    //         )
    //     }

    //     return (
    //         <View style={{ flex: 1 }}>
    //             {/* Header */}
    //             {/* <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
    //                 <Text style={{ ...FONTS.h2, color: COLORS.white }}>Cafes</Text>

    //                 <TouchableOpacity
    //                     onPress={() => navigation.navigate('Search')}
    //                 >
    //                     <Text style={{ ...FONTS.body3, color: COLORS.lightGray, alignSelf: 'flex-start', textDecorationLine: 'underline' }}>see more</Text>
    //                 </TouchableOpacity>
    //             </View>

    //             {/* Books 
    //             <View style={{ flex: 1, marginTop: SIZES.padding }}>
    //                 <FlatList
    //                     data={myBooks}
    //                     renderItem={renderItem}
    //                     keyExtractor={item => `${item.id}`}
    //                     horizontal
    //                     showsHorizontalScrollIndicator={false}
    //                 />
    //             </View> */}
    //         </View>
    //     )
    // }

    // function renderBookInfoSection() {
    //     return (
    //         <View style={{ flex: 1 }}>

    //             <View style={{
    //                 height: 150,
    //                 width: '90%',
    //                 justifyContent: 'center',
    //                 alignSelf: 'center',
    //                 borderRadius: 8,
    //                 elevation: 20,
    //             }}>
    //                 <Swiper height={150} autoplay={true} autoplayTimeout={3}  >

    //                     <View style={{
    //                         flex: 1,
    //                         justifyContent: 'center',
    //                         backgroundColor: 'transparent',
    //                         borderRadius: 8,
    //                     }}>
    //                         <Image
    //                             source={require("../assets/images/manharModi.png",)}
    //                             resizeMode="cover"
    //                             style={{
    //                                 height: '100%',
    //                                 width: '100%',
    //                                 alignSelf: 'center',
    //                                 borderRadius: 10,
    //                             }}
    //                         />
    //                     </View>
    //                     <View style={{
    //                         flex: 1,
    //                         justifyContent: 'center',
    //                         backgroundColor: 'transparent',
    //                         borderRadius: 8,

    //                     }}>
    //                         <Image
    //                             source={require("../assets/images/other_words_for_home.jpg",)}
    //                             resizeMode="cover"
    //                             style={{
    //                                 height: '100%',
    //                                 width: '100%',
    //                                 alignSelf: 'center',
    //                                 borderRadius: 10,
    //                             }}
    //                         />
    //                     </View>

    //                     <View style={{
    //                         flex: 1,
    //                         justifyContent: 'center',
    //                         backgroundColor: 'transparent',
    //                         borderRadius: 8,
    //                     }}>
    //                         <Image
    //                             source={require("../assets/images/the_tiny_dragon.jpg",)}
    //                             resizeMode="cover"
    //                             style={{
    //                                 height: '100%',
    //                                 width: '100%',
    //                                 alignSelf: 'center',
    //                                 borderRadius: 10,
    //                             }}
    //                         />
    //                     </View>
    //                     <View style={{
    //                         flex: 1,
    //                         justifyContent: 'center',
    //                         backgroundColor: 'transparent',
    //                         borderRadius: 8,
    //                     }}>
    //                         <Image
    //                             source={require("../assets/images/manharModi.png",)}
    //                             resizeMode="cover"
    //                             style={{
    //                                 height: '100%',
    //                                 width: '100%',
    //                                 alignSelf: 'center',
    //                                 borderRadius: 10,
    //                             }}
    //                         />
    //                     </View>
    //                 </Swiper>
    //             </View>
    //         </View>
    //     )
    // }

    function renderCategoryHeader() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        flex: 1, marginRight: SIZES.padding / 3,
                    }}
                    onPress={() => setSelectedCategory(item.id)}
                >
                    {
                        selectedCategory == item.id &&
                        <View style={{
                            width: 120,
                            height: 50,
                            backgroundColor: COLORS.gray1,
                            borderColor: COLORS.gray1,
                            marginHorizontal: SIZES.padding2 / 100,
                            borderWidth: 0.5,
                            borderRadius: SIZES.radius * 5,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{ ...FONTS.h2 / 0.5, color: COLORS.white }}>{item.categoryName}</Text>
                        </View>
                    }
                    {
                        selectedCategory != item.id &&
                        <View style={{
                            width: 120,
                            height: 50,
                            backgroundColor: COLORS.gray1,
                            borderColor: COLORS.gray1,
                            borderWidth: 0.5,
                            borderRadius: SIZES.radius * 5,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>

                            <Text style={{ ...FONTS.h2 / 2, color: COLORS.lightGray }}>{item.categoryName}</Text>
                        </View>
                    }
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
                <FlatList
                    data={categories}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                />
            </View>
        )
    }

    function renderCategoryData() {
        var books = []

        let selectedCategoryBooks = categories.filter(a => a.id == selectedCategory)

        if (selectedCategoryBooks.length > 0) {
            books = selectedCategoryBooks[0].books
        }

        const renderItem = ({ item }) => {
            return (
                <View style={{ marginVertical: SIZES.base, borderWidth: 1, borderColor: COLORS.black }}>
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row' }}
                        onPress={() => navigation.navigate("CafeDetails", {
                            book: item
                        })}
                    >
                        {/* Book Cover */}
                        <Image
                            source={item.bookFrontCover}
                            resizeMode="cover"
                            style={{ width: 100, height: 150, borderRadius: 10 }}
                        />

                        <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                            {/* Book name and author */}
                            <View>
                                <Text style={{ paddingRight: SIZES.padding, ...FONTS.h3, paddingTop: 2, color: COLORS.white }}>{item.name}</Text>
                                <Text style={{ ...FONTS.h4, color: COLORS.lightGray }}>{item.author}</Text>
                            </View>
                            {/* Book Info */}
                            <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
                                <Entypo name="star" size={24} color="gold" />
                                <Entypo name="star" size={24} color="gold" />
                                <Entypo name="star" size={24} color="gold" />
                                <Entypo name="star" size={24} color="gold" />
                                <Entypo name="star" size={24} color="white" />
                                {/* <Image
                                    source={icons.page_filled_icon}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                                <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.pageNo}</Text>

                                <Image
                                    source={icons.read_icon}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                                <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.readed}</Text> */}



                            </View>

                            {/* facilities */}
                            <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
                                {
                                    item.facilities.includes("ac") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                                        <Image
                                            source={icons.ac}
                                            resizeMode="contain"
                                            style={{
                                                width: 25,
                                                height: 25,
                                                tintColor: COLORS.white
                                            }}
                                        />
                                    </View>
                                }
                                {
                                    item.facilities.includes("wifi") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkRed, height: 40, borderRadius: SIZES.radius }}>
                                        <Image
                                            source={icons.wifi}
                                            resizeMode="contain"
                                            style={{
                                                width: 25,
                                                height: 25,
                                                tintColor: COLORS.white
                                            }}
                                        />
                                    </View>
                                }
                                {
                                    item.facilities.includes("parking") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Image
                                            source={icons.parking}
                                            resizeMode="contain"
                                            style={{
                                                width: 25,
                                                height: 25,
                                                tintColor: COLORS.white
                                            }}
                                        />
                                    </View>
                                }
                                {
                                    item.facilities.includes("plug") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Image
                                            source={icons.outlet}
                                            resizeMode="contain"
                                            style={{
                                                width: 25,
                                                height: 25,
                                                tintColor: COLORS.white
                                            }}
                                        />
                                    </View>
                                }
                                {
                                    item.facilities.includes("printer") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Image
                                            source={icons.printer}
                                            resizeMode="contain"
                                            style={{
                                                width: 25,
                                                height: 25,
                                                tintColor: COLORS.white
                                            }}
                                        />
                                    </View>
                                }
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* Bookmark Button */}
                    <TouchableOpacity
                        style={{ position: 'absolute', top: 10, right: 15 }}
                        onPress={() => navigation.navigate('otp')}
                    >
                        <Image
                            source={icons.bookmark_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.lightGray
                            }}
                        />
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <View style={{ flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding }}>
                <FlatList
                    data={books}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>

                {/* Header Section */}
                <View style={{ height: 200 }}>
                    {renderHeader(profile)}
                    {renderButtonSection()}
                </View>

                {/* Body Section */}
                <ScrollView style={{ marginTop: SIZES.radius }}>
                    {/* Books Section */}
                    {/* <View>
                        {/* {renderMyBookSection(myBooks)} 
                        {renderBookInfoSection()}
                    </View> */}

                    {/* Categories Section */}
                    <View style={{ marginTop: SIZES.padding }}>
                        <View>
                            {renderCategoryHeader()}
                        </View>

                        <View>
                            {renderCategoryData()}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Home;