import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { useFonts } from 'expo-font';
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading';

import Cesta from './src/Cesta';
import mock from './src/mocks/mockCesta';

export default function App() {
  
  let [fontsLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden={true} />
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}