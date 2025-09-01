import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import './global.css';
import { useEffect } from "react";

export default function RootLayout() {

  const [fontsLoaded, error] = useFonts({
    "Montserrat-Bold": require('../assets/fonts/Montserrat-Bold.ttf'),
    "Montserrat-ExtraBold": require('../assets/fonts/Montserrat-ExtraBold.ttf'),
    "Montserrat-Light": require('../assets/fonts/Montserrat-Light.ttf'),
    "Montserrat-Medium": require('../assets/fonts/Montserrat-Medium.ttf'),
    "Montserrat-Regular": require('../assets/fonts/Montserrat-Regular.ttf'),
    "Montserrat-SemiBold": require('../assets/fonts/Montserrat-SemiBold.ttf'),
  })

  useEffect(() => {
    if(error) throw error;
  }, [error]);

  if(!fontsLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }}/>;
}
