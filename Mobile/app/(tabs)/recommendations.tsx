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

export default function Recommendations() {
  const [modalVisible, setModalVisible] = useState(false);

  const recommendations = [
    {
      title: "Maintain Mental Well-being:",
      rec: [
        "Practice mindfulness, meditation, or deep breathing to reduce stress.",
        "Engage in activities that bring joy and fulfillment, like hobbies or creative pursuits",
      ],
    },
    {
      title: "Maintain Mental Well-being:",
      rec: [
        "Practice mindfulness, meditation, or deep breathing to reduce stress.",
        "Engage in activities that bring joy and fulfillment, like hobbies or creative pursuits",
      ],
    },
    {
      title: "Maintain Mental Well-being:",
      rec: [
        "Practice mindfulness, meditation, or deep breathing to reduce stress.",
        "Engage in activities that bring joy and fulfillment, like hobbies or creative pursuits",
      ],
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
          <View style={{ paddingBottom: 20 }}>
            <View style={{ paddingHorizontal: 20, marginBottom: 10, gap: 10 }}>
              <Text style={{ fontSize: 22, fontWeight: "600" }}>
                Recommendations
              </Text>
              <Text
                style={{ fontSize: 15, fontWeight: "700", marginBottom: 10 }}
              >
                Based on detected results, you are suggested to follow the
                measures below:
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
                      borderRadius: 10,
                      backgroundColor: "#fff",
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.2,
                      shadowRadius: 3.84,
                      elevation: 5,
                      marginBottom: 10,
                      width: "100%",
                      gap: 3,
                    }}
                  >
                    <Text className="text-md font-semibold text-background-color">
                      {item.title}
                    </Text>
                    {item.rec.map((recommendation, recIndex) => (
                      <Text key={recIndex} style={{ marginTop: 5 }}>
                         {recommendation}
                      </Text>
                    ))}
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
