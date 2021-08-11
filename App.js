import React, { useEffect } from 'react';
import * as Font from 'expo-font'
import RootStack from './navigation/RootStack';
import { View, StatusBar } from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from './constants';

export default function App() {
  useEffect(() => {

  }, [])

  return (
    <>
      <StatusBar backgroundColor={COLORS.black} barStyle="light-content" />
      <RootStack />
    </>
  );
}

