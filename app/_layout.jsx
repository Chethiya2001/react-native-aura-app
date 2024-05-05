import { Slot,SplashScreen,Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();


const RootLayout = () => {
  //access fonts
  const [fontsLoaded, error] = useFonts({
  "Poppins-Black":require("../assets/fonts/Poppins-Black.ttf"),
  "Poppins-Black":require("../assets/fonts/Poppins-Black.ttf"),
  "Poppins-Black":require("../assets/fonts/Poppins-Black.ttf"),
  "Poppins-Black":require("../assets/fonts/Poppins-Black.ttf"),
  "Poppins-Black":require("../assets/fonts/Poppins-Black.ttf"),
  "Poppins-Black":require("../assets/fonts/Poppins-Black.ttf"),
  "Poppins-Black":require("../assets/fonts/Poppins-Black.ttf"),
  });

  useEffect(()=> {
    if (error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  },[fontsLoaded,error])

  if(!fontsLoaded && !error) return null;

  return (
    <Stack>
     <Stack.Screen name="index"  options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout

