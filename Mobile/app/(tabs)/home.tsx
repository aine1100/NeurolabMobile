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
import LandingStatusInfo from "@/components/status";
import NearbyHospitals from "@/components/hospitals";
import ReportsRecent from "@/components/reports";
import { BlurView } from "expo-blur";
import image from "@/constants/image";
import { router } from "expo-router";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);

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
            <View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
              <Text style={{ fontSize: 22, fontWeight: "600" }}>Home</Text>
              <Text style={{ fontSize: 16 }}>
                Here is today’s capture results!
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "500", marginTop: 10 }}>
                Daily Status
              </Text>
            </View>
            <LandingStatusInfo />
            <NearbyHospitals setModalVisible={setModalVisible} />
            <ReportsRecent />
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

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <BlurView
          intensity={100}
          tint="dark"
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <View className="w-8/12 max-w-md p-6 flex items-start bg-white rounded-xl shadow-lg gap-4">
            <TouchableOpacity
              className="flex self-end"
              onPress={() => setModalVisible(false)}
            >
              <Image source={image.close} className="size-3" />
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                gap: 15,
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity>
                <Image
                  source={image.backarrow}
                  style={{ width: 12, height: 12 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "column",
                  gap: 2,
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Text className="text-gray-700 text-center">
                  Muhima Hospital
                </Text>
                <View style={{display:"flex",flexDirection:"row",gap:2,alignItems:"center",justifyContent:"center"}}>
                <Image
                  source={image.location}
                  style={{ height: 15, width: 15 }}
                  resizeMode="contain"
                />
                <Text style={{ fontSize: 10 }}>KN 13 St.Kigali</Text>

                </View>
               
              </View>
            </View>
            <Image source={image.muhima} style={{height:180,width:200,borderRadius:10}} resizeMode="contain"/>
          </View>
        </BlurView>
      </Modal>
    </SafeAreaView>
  );
}
