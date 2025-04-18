import { useState, useEffect } from "react";
import Header from "@/components/header";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Tabslayout from "./_layout";

export default function Recommendations() {
  const [recommendations, setRecommendations] = useState<any[]>([]);

  const getRecommendations = async () => {
    try {
      const response = await fetch(
        "http://10.12.74.84:5000/api/eegdata/patient",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setRecommendations(data);
        console.log("Recommendations got successfully", data);
      } else {
        console.log("Failed to get Recommendations");
      }
    } catch (err) {
      console.log("Error fetching recommendations:", err);
    }
  };

  // Fetch recommendations when the component mounts
  useEffect(() => {
    getRecommendations();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{ position: "absolute", top: 20, left: 0, right: 0, zIndex: 10 }}
      >
        <Header />
      </View>

      <FlatList
        data={recommendations}
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
                {recommendations.length > 0 ? (
                  recommendations.map((item, index) => (
                    <TouchableOpacity
                      key={index}
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
                      <Text style={{ fontSize: 16, fontWeight: "600" }}>
                        {item.recommendation}
                      </Text>
                    </TouchableOpacity>
                  ))
                ) : (
                  <Text
                    style={{ textAlign: "center", marginTop: 20, fontSize: 16 }}
                  >
                    No Recommendations Found
                  </Text>
                )}
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
