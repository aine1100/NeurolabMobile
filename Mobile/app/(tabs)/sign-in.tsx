import { SafeAreaView } from "react-native-safe-area-context";
import { View ,Text,Image} from "react-native";
import stars from "../../assets/images/star.png";


export default function signIn(){
    return(
        <SafeAreaView className="h-full bg-background-color flex flex-col justify-start p-10 ">
            <View className="flex flex-row text-white  justify-center pt-10 gap-2" style={{gap:2}}>
                <Image source={stars} className="size-8 -mt-4"/>
                <Text className="font-bold text-2xl text-white">Welcome Back</Text>

            </View>
            <View className="flex flex-row text-white justify-center ">
                <Text className="text-white font-medium p-2 text-xl">Login to access your account</Text>


            </View>

        </SafeAreaView>
    )
}