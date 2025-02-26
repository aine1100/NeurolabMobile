import { SafeAreaView } from "react-native-safe-area-context";
import { View,Text, TouchableOpacity } from "react-native";
import image from "@/constants/image";
import { Image } from "react-native";
import { router } from "expo-router";

export default function OnBoarding(){
    const steps=[
        {
            images:image.bulb,
            text:"Wrap your muse headband very well on your head as shown above."
        },
        {
            images:image.hand,
            text:"Turn on your device by pressing the power button."
        },
    ]
    return(
        <SafeAreaView className="flex flex-1 items-start px-10  gap-8 justify-center bg-background-color">
            <View className="flex gap-3 flex-row items-start">
                <View style={{height:50,width:10}} className="rounded-md rotate-6 bg-yellow-500">

                </View>
                <View>
                    <Text className="text-xl font-semibold text-white">To Get Started Follow The following <Text className="text-yellow-500">Instructions</Text></Text>
                </View>


            </View>
            <View className="flex gap-3 flex-col">
                {
                    steps.map((item,index)=>(
                        <View key={index} className="flex flex-row gap-3 items-start justify-center px-3">
                            <Image source={item.images} alt="Images" className="size-11" />
                            <Text className="text-xl font-semibold text-white">{item.text}</Text>

                        </View>
                    ))
                }

            </View>
            <TouchableOpacity className="flex flex-row gap-3 items-center justify-center" onPress={()=>router.push("/pages/steps/deviceConnection")}>
                <Image source={image.next} className="size-8"/>
                <Text className="text-md font-semibold text-white">Continue With Further Steps</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}