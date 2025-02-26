import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, Image, Modal, ImageBase } from "react-native";
import { BlurView } from "expo-blur";
import image from "@/constants/image";
import { router } from "expo-router";

export default function DeviceConn() {
  const [modalVisible, setModalVisible] = useState(false);
  const batteryPercent = 10;

  return (
    <SafeAreaView  className="flex-1 px-5 py-5 gap-5 w-full items-start bg-white">
      {/* Header Section */}
      <View className="flex flex-row w-full items-center justify-center gap-16">
        <Text className="text-black text-md font-semibold">
          Muse Brain Sensing HeadBand
        </Text>
        <View className="flex flex-row items-center gap-3">
          <Image source={image.battery} className="h-5 w-5" />
          <Text className="font-semibold text-black text-xl">
            {batteryPercent}%
          </Text>
        </View>
      </View>

      {/* Image Section */}
      <View className="w-full flex items-center justify-center rounded-md bg-gray-50">
        <Image
          source={image.muse}
          className="size-8/12 rounded-md"
          resizeMode="cover"
        />
      </View>

      {/* Buttons Section */}
      <View className="flex-col gap-4 w-full">
        <TouchableOpacity className="w-full bg-[#667DFA] flex-row items-center justify-between p-5 rounded-lg">
          <Image source={image.left} className="w-5 h-5" />
          <Text className="text-md font-medium text-white">Disconnect Device</Text>
          <Image source={image.bluetooth} className="w-5 h-5" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          className="w-full bg-yellow-500 flex-row items-center justify-center gap-6 p-5 rounded-lg"
        >
          <Text className="text-md font-medium text-white">Continue</Text>
          <Image source={image.right} className="w-5 h-5" />
        </TouchableOpacity>
      </View>

      {/* Modal Popup with Blur Background */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <BlurView
          intensity={100}
          tint="dark"
          style={{ flex: 1, justifyContent: "center", alignItems: "center",gap:5 }}
        >
          <View className="w-8/12 max-w-md p-6 flex items-center bg-white rounded-xl shadow-lg gap-4">
          <TouchableOpacity className="flex self-end " onPress={()=>setModalVisible(false)}>
            <Image source={image.close} className="size-3"/>

          </TouchableOpacity>
         
            <Text className="text-gray-700  text-center">
            You will soon be notified of your mental health status
            </Text>
          <TouchableOpacity onPress={()=>{router.back()}}>
          <Image source={image.not} className="size-6"/>
          </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/home")}
              className="bg-background-color items-center justify-center rounded-lg py-4 w-full"
            >
              <Text className="text-white text-sm font-medium">View Dashboard</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </Modal>
    </SafeAreaView>
  );
}
