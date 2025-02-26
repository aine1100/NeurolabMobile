import { View,Text, TouchableOpacity, Image } from "react-native";
import image from "@/constants/image";
import { router } from "expo-router";

export default function Header(){
    const actions=[
        {
            icon:image.search,
            location:"/home/",
        },
        {
            icon:image.notification,
            location:"/hello/",
        }
    ]
    return(
        <View className="bg-background-color w-full flex flex-row justify-between items-center p-2  " style={{padding:15}}>
            <View className="flex flex-row items-center justify-center gap-3 ">
                 <Text className="text-2xl font-bold">👋</Text>
                              <Text className="text-md font-bold text-white ">
                                Hi,Mr <Text className="text-yellow-500">Tom</Text>
                              </Text>

            </View>
            <View className="flex flex-row items-center justify-center gap-3 self-end ">
               {
                actions.map((item,index)=>(
                    <TouchableOpacity className="flex flex-row" onPress={()=>router.push(item.location as any)} key={index}>
                        <Image source={item.icon}  style={{width:24,height:28}} resizeMode="contain"/>


                    </TouchableOpacity>
                ))
               }
                
            </View>
        </View>
    )
}