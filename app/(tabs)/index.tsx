import CustomButton from "@/components/CustomButton";
import { images } from "@/constants";
import { useState } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";

export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-dark-100">
      <View className="flex-row justify-start gap-3 py-8 px-10">
        <Text className="text-3xl font-montserrat-bold text-white-default">
          Workouts
        </Text>
        <CustomButton 
          imgSource={images.add} 
          onPress={() => { }} 
          style="py-1" 
        />
      </View>
    </SafeAreaView>

  );
}