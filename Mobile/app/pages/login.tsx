import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import images from "@/constants/image";
import { Link, router } from "expo-router";

export default function Login() {
  const dataInputs = [
    // {
    //   title: "Full Names",
    //   placeholder: "John Kalisa",
    // },
    {
      title: "Email",
      placeholder: "John@gmail.com",
    },
    {
      title: "Password",
      placeholder: "",
    },
  ];

  function handlePress() {
    router.push("/pages/steps/screen1");
  }

  return (
    <SafeAreaView className="h-full w-full bg-background-color flex flex-col justify-start px-5 pb-2 gap-5">
      {/* Welcome Message */}
      <View className="flex flex-row justify-center items-center pt-10 gap-2">
        <Image source={images.stars} className="h-8 w-8 -mt-4" />
        <Text className="font-bold text-2xl text-white">
          Login To Your Account
        </Text>
      </View>

      <View className="flex flex-row justify-center">
        <Text className="text-gray-100 font-medium p-2 text-sm">
          Sign up to track your mental health
        </Text>
      </View>

      {/* Input Fields */}
      <View className="flex flex-col gap-5 w-full">
        {dataInputs.map((input, index) => (
          <View
            className="flex flex-col gap-3 justify-start w-full"
            key={index}
          >
            <Text className="text-white font-medium">{input.title}</Text>
            <TextInput
              placeholder={input.placeholder}
              placeholderTextColor="#A9A9A9"
              className="h-12 bg-gray-300 w-full px-5 rounded-full placeholder:text-md"
            />
          </View>
        ))}
      </View>

      {/* Forgot Password Link */}
      <View className="flex items-end">
        <Link href="/" className="text-white text-right mr-5">
          Forgot Password?
        </Link>
      </View>

      {/* Sign Up Button */}
      <View className="flex items-center">
        <TouchableOpacity className="bg-yellow-500 w-full h-14 rounded-xl flex items-center justify-center">
          <Text className="text-white font-semibold text-xl" onPress={handlePress}>
            Login
          </Text>
        </TouchableOpacity>
      </View>

      {/* Divider with "Or Sign In With" */}
      <View className="flex flex-row items-center justify-center gap-3 ">
        <View
          style={{
            backgroundColor: "white",
            height: 2,
            width: "30%",
            borderRadius: 50,
          }}
        />
        <Text className="text-white font-medium">Or Login With</Text>
        <View
          style={{
            backgroundColor: "white",
            height: 2,
            width: "30%",
            borderRadius: 50,
          }}
        />
      </View>

      {/* Google Sign In Button */}
      <View className="flex flex-col items-center gap-3  ">
        <TouchableOpacity className="bg-white w-full h-14 rounded-full flex flex-row items-center justify-center gap-3">
          <Image source={images.google} className="h-6 w-6" />
          <Text className="text-black font-semibold text-xl">Google</Text>
        </TouchableOpacity>

        {/* Already Have an Account */}
        <View className="flex flex-row gap-2 items-center">
          <Text className="text-white text-base font-medium">
            Don't have an account
          </Text>
          <TouchableOpacity onPress={handlePress}>
            <Text className="text-blue-500 text-base font-semibold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
