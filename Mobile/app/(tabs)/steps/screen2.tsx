import { FlatList, View,Image,Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "@/constants/image";
import questionHeader from '../../../components/questionHeader';
import QuestionHeader from "../../../components/questionHeader";
export default function QuestionOne(){
    return(
        <SafeAreaView className="h-full bg-white flex ">
            <FlatList data={[]} renderItem={({item})=><View/>} ListHeaderComponent={
                <View className=" py-5 flex items-start px-5 ">
                   <View className="flex  ">
                   <QuestionHeader title="SLEEP AND REST" percentage={25} content="Did you get enough sleep last night, or have you experienced any sleep deprivation recently?" />

                   </View>
                </View>
            } />
        </SafeAreaView>
    )
}