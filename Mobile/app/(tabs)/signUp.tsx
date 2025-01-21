import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import stars from "../../assets/images/star.png";
import google from "../../assets/images/google.png";
import { Link, router } from "expo-router";

export default function SignUp() {
  const dataInputs = [
    {
      title: "Full Names",
      placeholder: "John Kalisa",
    },
    {
      title: "Email",
      placeholder: "John@gmail.com",
    },
    {
      title: "Password",
      placeholder: "",
    },
  ];
   function handlePress(){
      router.push("/(tabs)/login")
    }
  return (
    <SafeAreaView className="h-full bg-background-color flex flex-col justify-start p-10 gap-5 ">
      <View
        className="flex flex-row text-white  justify-center pt-10 gap-2"
        style={{ gap: 2 }}
      >
        <Image source={stars} className="size-8 -mt-4" />
        <Text className="font-bold text-2xl text-white">Welcome To NeuroLab</Text>
      </View>
      <View className="flex flex-row text-white justify-center ">
        <Text className="text-gray-100 font-medium p-2 text-[13px] ">
          Sign up to track your mental health
        </Text>
      </View>
      <View className="flex items-start flex-col gap-5">
        {dataInputs.map((index, item) => (
          <View
            className="flex items-start flex-col gap-3 justify-start"
            key={item}
          >
            <Text className="text-white font-medium ">{index.title}</Text>
            <TextInput
              placeholder={index.placeholder}
              className="h-14 bg-gray-300 w-[400px] px-5 rounded-full placeholder:text-md"
            />
          </View>
        ))}
      </View>
      <View className="flex items-end">
        <Link href="/" className="text-white text-right mr-5">
          Forgot Password ?
        </Link>
      </View>
      <View className="flex items-center pb-10">
        <TouchableOpacity className="bg-yellow-500  w-[400px] h-16 rounded-xl flex items-center justify-center">
          <Text className="text-white font-semibold text-xl" onPress={handlePress}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View className="flex items-center flex-row gap-3">
        <View
          style={{
            backgroundColor: "white",
            height: 3,
            width: 150,
            borderRadius: 50,
          }}
          className=""
        ></View>
        <Text className="text-white font-medium">Or Sign In With</Text>
          <View
          style={{
            backgroundColor: "white",
            height: 3,
            width: 150,
            borderRadius: 50,
          }}
          className=""
        ></View>
      </View>
      <View className="flex flex-col items-center pb-10 gap-5">
        <TouchableOpacity className="bg-white  w-[400px] h-16 rounded-full gap-5 flex flex-row items-center justify-center">
        <Image source={google} className="size-8 " />
          <Text className="text-black font-semibold text-xl">Google</Text>
        </TouchableOpacity>
        <View className="flex flex-row gap-8 items-center justify-center text-white">
        <Text className="text-white text-xl font-medium">Already have an account</Text>
        <Text className="text-[#283FB1] text-xl font-semibold">Sign Up</Text>
      </View>
      </View>
     
    </SafeAreaView>
  );
}
