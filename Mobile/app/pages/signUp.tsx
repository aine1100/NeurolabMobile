import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, TouchableOpacity, TextInput, Alert, ActivityIndicator } from "react-native";
import images from "@/constants/image";
import { Link, router } from "expo-router";
import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // 👈 New loading state

  const dataInputs = [
    { title: "Full Names", placeholder: "John Kalisa", key: "name" },
    { title: "Email", placeholder: "John@gmail.com", key: "email" },
    { title: "Password", placeholder: "********", key: "password" },
  ];

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true); // 👈 Start loading
    try {
      const response = await fetch("http://192.168.179.69:5000/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        Alert.alert("Success", "Account created successfully!");
        router.push("/pages/login");
      } else {
        Alert.alert("Error", result.message || "Something went wrong");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to connect to the server");
    } finally {
      setLoading(false); // 👈 Stop loading after response
    }
  };

  return (
    <SafeAreaView className="h-full w-full bg-background-color flex flex-col justify-start px-5 pb-2 gap-5">
      {/* Welcome Message */}
      <View className="flex flex-row justify-center items-center pt-10 gap-2">
        <Image source={images.stars} className="h-8 w-8 -mt-4" />
        <Text className="font-bold text-2xl text-white">Welcome To NeuroLab</Text>
      </View>

      <View className="flex flex-row justify-center">
        <Text className="text-gray-100 font-medium p-2 text-sm">
          Sign up to track your mental health
        </Text>
      </View>

      {/* Input Fields */}
      <View className="flex flex-col gap-5  py-2 w-full">
        {dataInputs.map((input, index) => (
          <View className="flex flex-col gap-3 justify-start w-full" key={index}>
            <Text className="text-white font-medium">{input.title}</Text>
            <TextInput
              placeholder={input.placeholder}
              placeholderTextColor="#FFFFFF"
              className="h-12 bg-[#2C2C4A] w-full px-5 rounded-md placeholder:text-md"
              secureTextEntry={input.key === "password"}
              value={formData[input.key]}
              onChangeText={(text) => handleChange(input.key, text)}
            />
          </View>
        ))}
        <TouchableOpacity onPress={()=>{ router.push('/pages/resetPassword') }} className="flex flex-row justify-end items-center w-full">
          <Text className="text-gray-100 font-medium text-sm text-right">
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up Button with Loading */}
      <View className="flex items-center p-2">
        <TouchableOpacity 
          className={`bg-yellow-500 w-full h-14 rounded-xl flex items-center justify-center ${loading ? "opacity-50" : ""}`}
          onPress={handleSubmit}
          disabled={loading} // 👈 Disable button while loading
        >
          {loading ? (
            <ActivityIndicator size="small" color="#ffffff" /> // 👈 Show loader
          ) : (
            <Text className="text-white font-semibold text-xl">Sign Up</Text>
          )}
        </TouchableOpacity>
      </View>

      {/* Already Have an Account */}
      <View className="flex flex-row gap-2 items-center justify-center">
        <Text className="text-white text-base font-medium">
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => router.push("/pages/login")}>
          <Text className="text-blue-500 text-base font-semibold">Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
