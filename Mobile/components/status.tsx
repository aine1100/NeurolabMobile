import { View,Text } from "react-native";
import { Image } from "react-native";
import image from "@/constants/image";
export default function LandingStatusInfo(){
  return(
   <View className="flex flex-row gap-6 items-center justify-center" style={{paddingLeft:5,paddingBottom:2}}>
    <View  style={{backgroundColor:"#C2E4E7",width:150,height:240,justifyContent:"center",alignItems:"center",borderBottomWidth:3,borderColor:"#3C787E",padding:5,gap:5}}>
      <Image source={image.risk} className="size-7" resizeMode="contain"  style={{height:20,width:20}}/>
      <Text style={{fontSize:12,textAlign:"center"}}>Risk Assessment and Recommendations</Text>

    </View>
    <View className="flex flex-col gap-2">
    <View  style={{backgroundColor:"#EFDDDB",height:115,width:150,justifyContent:"center",alignItems:"center",borderBottomWidth:3,borderColor:"#B3262C",padding:5,gap:5}}>
    <Image source={image.insight} className="size-7" resizeMode="contain"  style={{height:20,width:20}}/>
      <Text style={{fontSize:12,textAlign:"center"}}>Diagnostic insights</Text>

    </View>
    <View  style={{backgroundColor:"#A9EDB5",height:115,width:150,justifyContent:"center",alignItems:"center",borderBottomWidth:3,borderColor:"#2F863E",padding:5,gap:5}}>
    <Image source={image.chart} className="size-7" resizeMode="contain" style={{height:20,width:20}}/>

      <Text style={{fontSize:12,textAlign:"center"}}>Visualization and Summary</Text>

    </View>

    </View>

   </View>
  )
}