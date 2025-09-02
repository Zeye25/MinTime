import { images } from "@/constants";
import { Image, Text, View } from "react-native";
 
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-dark-100">
      <Text className="text-xl font-montserrat text-primary-100">
        Welcome to Nativewind!
      </Text>
      <Image source={images.timer} className="size-8" resizeMode="contain"/>
    </View>
  );
}