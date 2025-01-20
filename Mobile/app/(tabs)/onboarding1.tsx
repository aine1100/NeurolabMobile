import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, Text } from "react-native";
import logo from "../../assets/images/logo.png";

export default function Onboarding() {
  return (
    <SafeAreaView className="bg-background-color h-full flex flex-1 gap-10 items-center justify-center ">
      <View className="flex  items-center justify-center gap-5">
       <Image source={logo} alt="Logo" className="size-36 mr-16"  />
        <Text className="text-white font-semibold text-2xl ">
          Neurolab
        </Text>
      </View>
      <View className="flex p-10 items-center justify-center">
        <Text className="text-white text-2xl ">Welcome</Text>

      </View>
    </SafeAreaView>
  );
}
