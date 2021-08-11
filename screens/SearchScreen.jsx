import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    TextInput,
    StyleSheet
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { cafeData } from '../data'
import { userData } from '../data'
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const SearchScreen = ({ navigation }) => {


    





    const [search, setSearch] = useState('');
    const [filteredCafeDataSource, setFilteredCafeDataSource] = useState([]);
    const [masterCafeDataSource, setMasterCafeDataSource] = useState(cafeData);


    useEffect(() => {
    }, []);

    const categoriesData = [
        {
            id: 1,
            categoryName: "Cafe",

        },
        {
            id: 2,
            categoryName: "User",

        },
    ]



    const [categories, setCategories] = React.useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = React.useState(1);

    function renderCategoryHeader() {

        const renderItem = ({ item }) => {
            return (
                <>
                    <View style={{ flex: 1, paddingLeft: SIZES.padding, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <TouchableOpacity
                            style={{ flex: 1, marginRight: SIZES.padding, paddingLeft: SIZES.padding2 }}
                            onPress={() => setSelectedCategory(item.id)}
                        >
                            {
                                selectedCategory == item.id &&
                                <Text style={{ ...FONTS.h2, color: COLORS.white }}>{item.categoryName}</Text>
                            }
                            {
                                selectedCategory != item.id &&
                                <Text style={{ ...FONTS.h2, color: COLORS.lightGray }}>{item.categoryName}</Text>
                            }
                        </TouchableOpacity>
                    </View>
                </>
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

    const ItemView = ({ item }) => {
        return (
            // Flat List Item
            <View style={{ marginVertical: SIZES.base, paddingLeft: SIZES.padding }}>
                <TouchableOpacity
                    style={{ flex: 1, flexDirection: 'row' }}
                    onPress={() => navigation.navigate("CafeDetails", {
                        book: item
                    })}
                >
                    {/* Book Cover */}
                    <Image
                        source={{ uri: item.img }}
                        resizeMode="cover"
                        style={{ width: 100, height: 150, borderRadius: 10 }}
                    />

                    <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                        {/* Book name and location */}
                        <View>
                            <Text style={{ paddingRight: SIZES.padding, ...FONTS.h3, color: COLORS.white }}>{item.name}</Text>
                            <Text style={{ ...FONTS.h4, color: COLORS.lightGray }}>{item.location}</Text>
                        </View>

                        {/* Book Info */}
                        <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
                            <Entypo name="star" size={24} color="gold" />
                            <Entypo name="star" size={24} color="gold" />
                            <Entypo name="star" size={24} color="gold" />
                            <Entypo name="star" size={24} color="gold" />
                            <Entypo name="star" size={24} color="white" />

                        </View>
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

                <TouchableOpacity
                    style={{ position: 'absolute', top: 5, right: 15 }}
                    onPress={() => console.log("Bookmark")}
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


        );
    };






    return (

        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
                {/* <View style={{ height: 100 }}>
                    <TextInput style={{ backgroundColor: COLORS.white, height: SIZES.h1 }} />
                </View> */}
                <View  >
                    <SearchBar
                        round
                        searchIcon={{ size: 24 }}
                        onChangeText={(text) => searchFilterFunction(text)}
                        onClear={(text) => searchFilterFunction('')}
                        placeholder="Type Here..."
                        value={search}
                    >
                        
                    </SearchBar>
                    <View>
                        <FlatList
                            data={filteredCafeDataSource}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={ItemView}
                        />

                    </View>
</View>
                    
                </SafeAreaView>


        </>
    )
}


export default SearchScreen;