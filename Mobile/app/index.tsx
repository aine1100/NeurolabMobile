import { useEffect } from "react"
import "./global.css"
import { router } from "expo-router"
import { View,Image,Text } from "react-native"
import images from "@/constants/image"
import { SafeAreaView } from "react-native-safe-area-context"

export default function SplashScreen(){
    useEffect(()=>{
        const timer=setTimeout(()=>{
            router.push("/(tabs)/onboarding1")
        },3000)
        return () => clearTimeout(timer);
    })

    return(
     <SafeAreaView>
           <View className="bg-background-color flex flex-col h-full gap-4 items-center justify-center">
            <Image source={images.logo} alt="Logo" className="size-36"  />
            <Text className="text-white font-bold text-2xl">Neurolab</Text>
            <Text className="text-text-color font-medium text-xl">Healthy Minds ,Strong Society</Text>
        


        </View>
     </SafeAreaView>
    )
}