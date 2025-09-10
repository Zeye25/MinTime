import CustomButton from "@/components/CustomButton";
import WorkoutSelection from "@/components/WorkoutSelection";
import { images } from "@/constants";
import { useState } from "react";
import { Image, Modal, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-dark-100">
      <View className="flex-row justify-start gap-3 py-8 px-5">
        <Text className="text-3xl font-montserrat-bold text-white-default">
          Workouts
        </Text>
        <CustomButton 
          imgSource={images.add} 
          onPress={() => { }} 
          style="py-1" 
        />
      </View>
      <WorkoutSelection />
    </SafeAreaView>

  );
}