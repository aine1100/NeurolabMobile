import { useState, useEffect } from "react";
import Header from "@/components/header";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Tabslayout from "./_layout";

interface Report {
  title: string;
  rec: string[];
  duration: string;
}

export default function Reports() {
  const [modalVisible, setModalVisible] = useState(false);
  const [reports, setReports] = useState<Report[]>([]); // Set type for reports state

  // Function to fetch reports from the backend
  const getReports = async () => {
    try {
      const response = await fetch("https://ngrok.domain.com/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data: Report[] = await response.json();
        setReports(data);
        console.log(data);
        console.log("Reports fetched successfully");
      } else {
        console.log("Failed to fetch reports");
      }
    } catch (err) {
      console.log("Error fetching reports:", err);
    
    }
  };

  // Fetch reports when the component mounts
  useEffect(() => {
    getReports();
  }, []);

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
        data={reports}
        renderItem={({ item, index }) => (
          <View key={index} style={{ width: "100%", marginBottom: 15 }}>
            <TouchableOpacity
              style={{
                padding: 15,
                alignItems: "flex-start",
                borderRadius: 4,
                backgroundColor: "#fff",
                shadowColor: "#000",
                marginBottom: 10,
                width: "100%",
                gap: 3,
                borderLeftColor: index % 2 === 0 ? "#FFCD29" : "#010159",
                borderLeftWidth: 6,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                {item.title}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                {item.rec.map((recommendation, recIndex) => (
                  <Text key={recIndex} style={{ fontSize: 10, width: 240 }}>
                    {recommendation}
                  </Text>
                ))}
                <Text style={{ fontSize: 8, color: "#F59E0B" }}>
                  {item.duration}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={
          <View style={{ paddingBottom: 20, width: "100%" }}>
            <View style={{ paddingHorizontal: 20, marginBottom: 10, gap: 10, width: "100%" }}>
              <Text style={{ fontSize: 22, fontWeight: "600" }}>Recent Reports</Text>
            </View>
            <Tabslayout />
          </View>
        }
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: 80,
          paddingBottom: 50,
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              No Reports found
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}
