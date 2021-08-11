import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';


export default function Profile({ item, navigation }) {
    const [image, setImage] = useState("https://source.unsplash.com/1024x768/?girl");

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    return (
        <>

            <SafeAreaView style={{
                flex: 1,
                backgroundColor: COLORS.black

            }}>
                <ScrollView>
                    {/* <Image source={{ uri: image }} style={{ width: 200, height: 200 }}/> */}
                    <View style={{ paddingTop: 15 }}>
                        <View style={{ alignSelf: "center" }}>
                            <View style={{
                                width: 130,
                                height: 150,
                            }}>
                                {image &&
                                    <Image source={{ uri: image }} style={{
                                        flex: 1,
                                        height: 150,
                                        width: 130,
                                        borderRadius: 50
                                    }} resizeMode="center"></Image>}
                            </View>
                            <View style={{
                                backgroundColor: "#41444B",
                                position: "absolute",
                                top: 15,
                                left: -10,
                                width: 30,
                                height: 30,
                                borderRadius: 20,
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <TouchableOpacity onPress={() => navigation.navigate("Message", { screen: item })}>

                                    <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                backgroundColor: "#41444B",
                                position: "absolute",
                                bottom: 10,
                                right: -10,
                                width: 40,
                                height: 40,
                                borderRadius: 30,
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <TouchableOpacity onPress={pickImage}>
                                    <Ionicons name="camera-outline" size={24} color="#DFD8C8" style={{ marginLeft: 2 }} />
                                    {/* <Ionicons name="ios-add" size={30} color="#DFD8C8" style={{ marginLeft: 2 }}></Ionicons> */}
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{
                            alignSelf: "center",
                            alignItems: "center",
                            marginTop: 16
                        }}>

                            <Text style={{
                                fontWeight: "200", fontSize: 36, color: "#52575D"
                            }}>Yash Rabari</Text>
                            <Text style={{
                                color: "#AEB5BC", fontSize: 14, color: "#52575D"
                            }}>full stack Devloper</Text>
                        </View>

                        <View style={{
                            flexDirection: "row",
                            alignSelf: "center",
                            marginTop: 32
                        }}>
                            <View style={{
                                alignItems: "center",
                                flex: 1
                            }}>
                                <Text style={{
                                    fontSize: 24, color: "#52575D"
                                }}>483</Text>
                                <Text style={{
                                    fontSize: 12,
                                    color: "#AEB5BC",
                                    textTransform: "uppercase",
                                    fontWeight: "500",
                                    color: "#52575D"
                                }}>Posts</Text>
                            </View>
                            <View style={{
                                alignItems: "center",
                                flex: 1,
                                borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1
                            }}>
                                <Text style={{
                                    fontSize: 24, color: "#52575D"
                                }}>45,844</Text>
                                <Text style={{
                                    fontSize: 12,
                                    color: "#AEB5BC",
                                    textTransform: "uppercase",
                                    fontWeight: "500",

                                    color: "#52575D"
                                }}>Followers</Text>
                            </View>
                            <View style={{
                                alignItems: "center",
                                flex: 1
                            }}>
                                <Text style={{
                                    fontSize: 24, color: "#52575D"
                                }}>302</Text>
                                <Text style={{
                                    fontSize: 12,
                                    color: "#AEB5BC",
                                    textTransform: "uppercase",
                                    fontWeight: "500",

                                    color: "#52575D"
                                }}>Following</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 32 }}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{
                                    width: 180,
                                    height: 200,
                                    borderRadius: 12,
                                    overflow: "hidden",
                                    marginHorizontal: 10
                                }}>
                                    <Image source={require("../assets/images/manharModi.png")} style={{
                                        flex: 1,
                                        height: undefined,
                                        width: undefined
                                    }} resizeMode="cover"></Image>
                                </View>
                                <View style={{
                                    width: 180,
                                    height: 200,
                                    borderRadius: 12,
                                    overflow: "hidden",
                                    marginHorizontal: 10
                                }}>
                                    <Image source={require("../assets/images/manharModi.png")} style={{
                                        flex: 1,
                                        height: undefined,
                                        width: undefined
                                    }} resizeMode="cover"></Image>
                                </View>
                                <View style={{
                                    width: 180,
                                    height: 200,
                                    borderRadius: 12,
                                    overflow: "hidden",
                                    marginHorizontal: 10
                                }}>
                                    <Image source={require("../assets/images/manharModi.png")} style={{
                                        flex: 1,
                                        height: undefined,
                                        width: undefined
                                    }} resizeMode="cover"></Image>
                                </View>
                            </ScrollView>
                            <View style={{
                                backgroundColor: "#41444B",
                                position: "absolute",
                                top: "50%",
                                marginTop: -50,
                                marginLeft: 30,
                                width: 80,
                                height: 80,
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 12,
                                shadowColor: "rgba(0, 0, 0, 0.38)",
                                shadowOffset: { width: 0, height: 10 },
                                shadowRadius: 20,
                                shadowOpacity: 1
                            }}>
                                <TouchableOpacity onPress={() => alert('show all media')}>
                                    <Text style={{ fontSize: 24, color: "#DFD8C8", fontWeight: "300" }}>70</Text>
                                    <Text style={{ fontSize: 12, color: "#DFD8C8", textTransform: "uppercase" }}>Media</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={{
                            fontSize: 12,
                            color: "#AEB5BC",
                            textTransform: "uppercase",
                            fontWeight: "500",
                            marginLeft: 30,
                            marginTop: 32,
                            marginBottom: 15,
                            fontSize: 20
                        }}>Recent Activity</Text>
                        <View style={{ alignItems: "center" }}>
                            <View style={{
                                flexDirection: "row",
                                alignItems: "flex-start",
                                marginBottom: 16
                            }}>
                                <View style={{
                                    backgroundColor: "#CABFAB",
                                    padding: 4,
                                    height: 12,
                                    width: 12,
                                    borderRadius: 6,
                                    marginTop: 3,
                                    marginRight: 20
                                }}></View>
                                <View style={{ width: 250 }}>
                                    <Text style={{ color: "#41444B", fontWeight: "300" }}>
                                        Started following Yash Rabari for more like this.
                                    </Text>
                                </View>
                            </View>

                            <View style={{
                                flexDirection: "row",
                                alignItems: "flex-start",
                                marginBottom: 16
                            }}>
                                <View style={{
                                    backgroundColor: "#CABFAB",
                                    padding: 4,
                                    height: 12,
                                    width: 12,
                                    borderRadius: 6,
                                    marginTop: 3,
                                    marginRight: 20
                                }}></View>
                                <View style={{ width: 250 }}>
                                    <Text style={{ color: "#41444B", fontWeight: "300" }}>
                                        Yashrabari9998@gmail.com
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}
