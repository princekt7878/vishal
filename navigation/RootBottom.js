import React from "react";
import {
    TouchableOpacity,
    View,
    Image
} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/";
import Profile from "../screens/Profile";
import ChatScreen from "../screens/ChatScreen";
import { icons, COLORS } from "../constants";
import SearchScreen from "../screens/SearchScreen";
import Scanner from "../screens/Scaner";
import RewardScreen from "../screens/RewardScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();


const customTabBarStyle = {
    showLabel: false,
    style: {
        height: "10%",
        backgroundColor: COLORS.black
    }
}
const RootBottomTabs = () => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.white : COLORS.gray;

                    switch (route.name) {
                        case "Home":
                            return (
                                <Image
                                    source={icons.menu}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "wallet":
                            return (
                                <Image
                                    source={icons.medal}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Chat":
                            return (
                                <Image
                                    source={icons.chat}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Profile":
                            return (
                                <Image
                                    source={icons.menu_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )
                    }
                }
            })}

            tabBarOptions={customTabBarStyle}
            >
            <Tab.Screen
                name="Home"
                component={Home} />

            <Tab.Screen
                name="wallet"
                component={RewardScreen} />
            <Tab.Screen
                name="Chat"
                component={ChatScreen} />
            <Tab.Screen
                name="Profile"
                component={Profile} />
        </Tab.Navigator>
    )
};
export default RootBottomTabs;