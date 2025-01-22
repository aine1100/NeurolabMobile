import CategoryCards from "@/components/categoryCards";
import image from "@/constants/image";
import { router } from "expo-router";
import { FlatList, Image, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Greeting() {
  function handlePress(){
    router.push("/(tabs)/steps/screen2")
  }
  return (
    <SafeAreaView className="bg-white h-full w-full">
      <FlatList
        data={[]} // Placeholder for data
        renderItem={({ item }) => <CategoryCards />}
        ListHeaderComponent={
         <View>
           <View className="px-10 py-5 flex items-start gap-10">
            {/* Greeting Section */}
            <View className="flex gap-5">
              <Text className="text-2xl font-bold">👋</Text>
              <Text className="text-3xl font-bold text-background-color">
                Hello <Text className="text-yellow-500">Mr. Tom</Text>, how are you feeling today?
              </Text>
              <Text className="text-gray-700 text-xl">
                Before we check your mental status, you have to first answer a couple of questions to get accurate results.
              </Text>
            </View>

            {/* Categories Section */}
            <View className="flex gap-5">
              <Text className="text-3xl font-bold text-background-color">Categories</Text>
              
              
             
            </View>
            <CategoryCards />

           
            
          </View>
          <View className="flex items-end justify-end">
             
             <TouchableOpacity className="rounded-full flex items-end justify-end px-10 " onPress={handlePress}>
                 <Image source={image.next} className="size-12" resizeMode="contain"/>
                 
               </TouchableOpacity>
           
           </View>
          
         </View>
        }
      />
    </SafeAreaView>
  );
}
