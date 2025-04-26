import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, TouchableOpacity, TextInput, Alert, ActivityIndicator, StatusBar } from "react-native";
import images from "@/constants/image";
import { Link, router } from "expo-router";
import { useState } from "react";

export default function ResetPassword() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false); // Track loading state

  const dataInputs = [
    { title: "Enter your email", placeholder: "John@gmail.com", key: "email" },
  ];

  // Handle input change
  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // Handle login submission
  const handlePress = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        router.push("/(tabs)/home"); // Redirect to home
      } else {
        Alert.alert("Error", result.message || "Invalid credentials");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to connect to the server");
    }
    setLoading(false); // Stop loading
  };

  return (
    <SafeAreaView className="h-full w-full bg-background-color flex flex-col justify-start px-5 pb-2 gap-5">
       <StatusBar
        barStyle="light-content" // Use "dark-content" if you want dark icons
        backgroundColor="transparent" // Make status bar transparent or set a specific color
        translucent={true} // Allow content with safe area to go under the status bar
      />
      {/* Welcome Message */}
      <View className="flex flex-row justify-center items-center pt-10 gap-2">
        <Text className="font-bold text-2xl text-white">Reset Password</Text>
      </View>

      {/* <View className="flex flex-row justify-center">
        <Text className="text-gray-100 font-medium p-2 text-sm">
          Login  to track your mental health
        </Text>
      </View> */}

      {/* Input Fields */}
      <View className="flex flex-col gap-5 w-full py-2">
        {dataInputs.map((input, index) => (
          <View key={index} className="flex flex-col gap-3 justify-start w-full">
            <Text className="text-white font-medium">{input.title}</Text>
            <TextInput
              placeholder={input.placeholder}
              placeholderTextColor="#FFFFFF"
              className="h-12 bg-[#2C2C4A] w-full px-5 rounded-md placeholder:text-md"
        
              value={formData[input.key]}
              onChangeText={(text) => handleChange(input.key, text)}
            />
          </View>
        ))}
      </View>

      {/* Forgot Password Link */}
   

      {/* Login Button */}
      <View className="flex items-center p-2">
        <TouchableOpacity 
          className={`bg-yellow-500 w-full h-14 rounded-xl flex items-center justify-center ${loading ? "opacity-50" : ""}`}
          onPress={handlePress}
          disabled={loading} // Disable when loading
        >
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <Text className="text-white font-semibold text-xl">Change Password</Text>
          )}
        </TouchableOpacity>
      </View>

      {/* Divider */}
      {/* <View className="flex flex-row items-center justify-center gap-3">
        <View style={{ backgroundColor: "white", height: 2, width: "30%", borderRadius: 50 }} />
        <Text className="text-white font-medium">Or Login With</Text>
        <View style={{ backgroundColor: "white", height: 2, width: "30%", borderRadius: 50 }} />
      </View>

      // {/* Google Sign In Button */}
      {/* // <View className="flex flex-col items-center gap-3">
      //   <TouchableOpacity className="bg-white w-full h-14 rounded-full flex flex-row items-center justify-center gap-3">
      //     <Image source={images.google} className="h-6 w-6" />
      //     <Text className="text-black font-semibold text-xl">Google</Text>
      //   </TouchableOpacity> */}

{/*     
       </View>  */}
            <View className="flex flex-row gap-2 justify-center items-center">
           <Text className="text-white text-base font-medium">Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/pages/signup")}>
             <Text className="text-blue-500 text-base font-semibold">Sign Up</Text>
           </TouchableOpacity>
         </View>
    </SafeAreaView>
  );
}
