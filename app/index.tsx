import { Text, View } from "react-native";
 
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-montserrat text-primary-100">
        Welcome to Nativewind!
      </Text>
      <Text className="text-xl font-montserrat-extrabold text-primary-200">
        Welcome to Nativewind!
      </Text>
      <Text className="text-xl font-montserrat-light text-primary-300">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}