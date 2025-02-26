import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, Text, TouchableOpacity } from "react-native";

import OnboardingText from "@/components/onboardingText";
import { router } from "expo-router";
import images from "@/constants/image"
 
export default function Onboarding() {
  function handlePress(){
    router.push("/pages/signUp")
  }
  return (
    <SafeAreaView className="bg-background-color h-full flex flex-col items-center justify-center gap-20 p-10">
      {/* Logo Section */}
      <View className="flex flex-row items-center justify-center pt-10">
        <Image source={images.logo} alt="Logo" className="size-20" />
        <Text className="text-white font-semibold text-xl ml-2">Neurolab</Text>
      </View>

      {/* Onboarding Text Section */}
      <View className="flex flex-1 items-center justify-center">
        <OnboardingText />
      </View>

      {/* Get Started Button */}
      <View className="flex w-full items-center pb-10">
        <TouchableOpacity className="bg-yellow-500  w-full h-16 rounded-full flex items-center justify-center" onPress={handlePress}>
          <Text className="text-white font-semibold text-lg">Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
