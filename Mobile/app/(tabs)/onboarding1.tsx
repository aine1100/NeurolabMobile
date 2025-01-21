import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, Text, TouchableOpacity } from "react-native";
import logo from "../../assets/images/logo.png";
import OnboardingText from "@/components/onboardingText";
import { router } from "expo-router";

export default function Onboarding() {
  function handlePress(){
    router.push("/(tabs)/sign-in")
  }
  return (
    <SafeAreaView className="bg-background-color h-full flex flex-col items-center justify-center gap-20 p-10">
      {/* Logo Section */}
      <View className="flex flex-row items-center justify-center pt-10">
        <Image source={logo} alt="Logo" className="size-20" />
        <Text className="text-white font-semibold text-xl ml-2">Neurolab</Text>
      </View>

      {/* Onboarding Text Section */}
      <View className="flex flex-1 items-center justify-center">
        <OnboardingText />
      </View>

      {/* Get Started Button */}
      <View className="flex items-center pb-10">
        <TouchableOpacity className="bg-yellow-500  w-[400px] h-16 rounded-full flex items-center justify-center" onPress={handlePress}>
          <Text className="text-white font-semibold text-lg">Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
