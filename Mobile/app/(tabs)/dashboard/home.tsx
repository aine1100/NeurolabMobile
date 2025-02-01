import Header from "@/components/header";
import DailyStatus from "@/components/status";
import { FlatList, View,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home(){
    return(
        <FlatList data={[]} renderItem={({item})=><View/>}
        ListHeaderComponent={
            <SafeAreaView className="bg-white flex flex-1 gap-4">
                <Header/>
                <View className="flex items-start justify-start gap-2 px-10 ">
                    <Text className="text-xl font-medium">Home</Text>
                    <Text className="text-md">Here is today captures results!</Text>
                    <DailyStatus/>

                </View>

            </SafeAreaView>

        }
        />
    )
}