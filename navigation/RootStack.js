import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';

import SearchScreen from '../screens/SearchScreen';
import { CafeDetails } from "../screens/";
import RootBottomTabs from "./RootBottom";
import Scanner from '../screens/Scaner'
import OTP from '../screens/OTP';
import Message from '../screens/Message';
import SignIn from '../screens/SignIn';
import ChatScreen from '../screens/ChatScreen';
import Card from '../Components/Card';
import OnBordingScreen from '../screens/OnBordingScreen';
import Filter from '../Components/Filter';

const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? ''
    // const routeName = route.state
    // ? route.state.routes[route.state.index].name
    //: '';

    if (routeName == 'Message') {
        return false;
    }

    return true;
}


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator

            >

                {/* Tabs */}
                {/* Tabs */}
                {/* <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="Card" component={Card} options={{ headerShown: false }} />*/}
                <Stack.Screen name="OnBordingScreen" component={OnBordingScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={RootBottomTabs} options={{ headerShown: false }} />

                {/* Screens */}
                <Stack.Screen name="Message" component={Message} options={({ route }) => ({
                    title: route.params.userName,
                    tabBarVisible: getTabBarVisibility(route),
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: COLORS.black,
                        elevation: 5,
                    },
                    headerTintColor: '#FFF',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 18,
                    },
                    headerRight: () => (
                        <TouchableOpacity onPress={() => alert("ahiya have su karvu che bol")} >
                            <Entypo name="dots-three-vertical" size={20} color={COLORS.white} style={{ marginRight: 20 }} />
                        </TouchableOpacity>
                    ),

                })
                } />
                <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Filter" component={Filter} options={{ headerShown: false }} />
                <Stack.Screen name="CafeDetails" component={CafeDetails} options={{ headerShown: false }} />
                <Stack.Screen name="Scanner" component={Scanner} options={{ headerShown: false }} />
                <Stack.Screen name="otp" component={OTP} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;