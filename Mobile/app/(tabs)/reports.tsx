import { useState } from "react";
import Header from "@/components/header";
import {
  FlatList,
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Tabslayout from "./_layout";
import image from "@/constants/image";
import CustomPieChart from "@/components/chart";
import CustomDoughnutChart from "@/components/chart";
import QuarterCircle from "@/components/chart";

export default function Reports() {
  const [modalVisible, setModalVisible] = useState(false);

  const recommendations = [
    {
      title: "Maintain Mental Well-being:",
      rec: [
        "Practice mindfulness, meditation, or deep breathing to reduce stress.",
      ],
      duration:"2 days ago",
    },
    {
      title: "Maintain Mental Well-being:",
      rec: [
        "Practice mindfulness, meditation, or deep breathing to reduce stress.",
       
      ],
      duration:"2 days ago",
    },
    {
      title: "Maintain Mental Well-being:",
      rec: [
        "Practice mindfulness, meditation, or deep breathing to reduce stress.",
       
      ],
      duration:"2 days ago"

    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* Fixed Header */}
      <View
        style={{ position: "absolute", top: 20, left: 0, right: 0, zIndex: 10 }}
      >
        <Header />
      </View>

      {/* Scrollable Content */}
      <FlatList
        data={[]}
        renderItem={() => null}
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={
          <View style={{ paddingBottom: 20 ,width:"100%"}}>
            <View style={{ paddingHorizontal: 20, marginBottom: 10, gap: 10,width:"100%" }}>
              <Text style={{ fontSize: 22, fontWeight: "600" }}>
               Recent Report
              </Text>

              <View
                style={{ display: "flex", flexDirection: "column", gap: 5 }}
              >
                {recommendations.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      padding: 15,
                      alignItems: "flex-start",
                      borderRadius: 4,
                      backgroundColor: "#fff",
                      shadowColor: "#000",
                      marginBottom: 10,
                      width: "100%",
                      gap: 3,
                      borderLeftColor:index %2==0 ? "#FFCD29":"#010159",
                      borderLeftWidth:6,
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.2,
                      shadowRadius: 3.84,
                      elevation: 5,
                      
                    }}
                  >
                    <Text className="text-md font-semibold text-background-color">
                      {item.title}
                    </Text>
                    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",alignItems:"center",gap:5}}>
                    {item.rec.map((recommendation, recIndex) => (
                      <Text key={recIndex} style={{ marginTop: 5,fontSize:10,width:240 }}>
                         {recommendation}
                      </Text>
                    ))}
                    <View className="flex flex-row gap-2 items-center justify-center">
                        <Text className="text-sm text-yellow-600" style={{fontSize:8}}>{item.duration}</Text>
                    </View>



                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <Tabslayout />
          </View>
        }
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: 80,
          paddingBottom: 50,
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
