import { View,Text, TouchableOpacity, Image } from "react-native";
import image from "@/constants/image";
import { router } from "expo-router";

export default function Header(){

    return(
        <View className="bg-background-color w-full flex flex-row justify-between items-center p-1  " style={{padding:15}}>
            <View className="flex flex-row items-center justify-center gap-3 ">
               <Image source={image.logoIcon} className="h-10 w-10" resizeMode="contain"/>
               <Text className="text-white font-semibold">NeurAi</Text>

            </View>
            <View className="flex flex-row items-center justify-center gap-3 self-end ">
            <Image source={image.person} className="h-10 w-10" resizeMode="contain"/>


               
                
            </View>
        </View>
    )
}