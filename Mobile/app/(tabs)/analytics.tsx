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

export default function Analytics() {
  const [modalVisible, setModalVisible] = useState(false);
  const [userData,setUserData]=useState(null)
  
const fetchRootDirectory = async (): Promise<void> => {
  try {
    const response = await fetch("http://ngrok-domain.com/");
    const data = await response.json();
    console.log("Root Directory Response:", data);
    setUserData(data)
  } catch (error) {
    console.error("Error fetching root directory:", error);
  }
};

  const analysis = [
    {
      aimage: image.heart,
      text: "Stress and Anxiety Levels",
      percentage: 75,
      value: 270,
      color: "red",
    },
    {
      aimage: image.school,
      text: "Mood & Emotional Stability",
      percentage: 8,
      value: 30,
      color: "navy",
    },
    {
      aimage: image.sleep,
      text: "Sleep and Depression",
      percentage: 18,
      value: 100,
      color: "green",
    },
    {
      aimage: image.Handshake,
      text: "Risk Level Summary",
      percentage: 90,
      value: 100,
      color: "blue",
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
            <View style={{ paddingHorizontal: 20, marginBottom: 10, gap: 20 }}>
              <Text style={{ fontSize: 22, fontWeight: "600" }}>Analytics</Text>

              <TouchableOpacity
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
                }}
              >
                <Text
                  style={{ fontSize: 15, fontWeight: "700", marginBottom: 10 }}
                >
                  Mental Health Indicators
                </Text>

                {analysis.map((item, index) => (
                  <View key={index} style={{ width: "100%", marginBottom: 15 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <Image
                        source={item.aimage}
                        style={{ width: 20, height: 20 }}
                        resizeMode="contain"
                      />
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "600",
                          textAlign: "left",
                          flex: 1,
                        }}
                      >
                        {item.text}
                      </Text>
                    </View>

                    {/* Progress Bar */}
                    <View
                      style={{
                        width: "100%",
                        height: 8,
                        backgroundColor: "#E5E7EB",
                        borderRadius: 5,
                        marginTop: 5,
                      }}
                    >
                      <View
                        style={{
                          width: `${item.percentage}%`,
                          height: "100%",
                          backgroundColor: item.color,
                          borderRadius: 5,
                        }}
                      />
                    </View>

                    {/* Percentage & Value */}
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 5,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          fontWeight: "600",
                          color: "gray",
                        }}
                      >
                        {item.percentage}%
                      </Text>
                      <Text
                        style={{
                          fontSize: 10,
                          fontWeight: "600",
                          color: "gray",
                        }}
                      >
                        {item.value}
                      </Text>
                    </View>
                  </View>
                ))}
              </TouchableOpacity>
              <Text style={{ fontSize: 22, fontWeight: "600" }}>Overall Insights</Text>
              <View
                style={{
                  padding: 15,
                  borderRadius: 10,
                  backgroundColor: "#fff",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 3.84,
                  elevation: 5,
                  marginBottom: 10,
                  width: "100%",
                }}
              >
                
              <QuarterCircle/>

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
