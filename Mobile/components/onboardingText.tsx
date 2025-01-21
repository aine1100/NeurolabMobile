import { useState, useEffect } from "react";
import { View, Text } from "react-native";

export default function OnboardingText() {
  const userText = [
    {
      text1: "Track Your",
      text2: "Mental Health Status",
      text3: "With ease",
    },
    {
        text1: "Track Your",
        text2: "Mental Health Status",
        text3: "With ease",
      },
      {
        text1: "Track Your",
        text2: "Mental Health Status",
        text3: "With ease",
      },
  ];
  
  const [active, setActive] = useState(0); // Tracks active text index
  const statusLinks = [1, 2, 3]; // Dots for indicator

  // Cycle through text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % userText.length); // Loop through text
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <View className="flex flex-col items-center justify-center h-full bg-background-color gap-5" style={{gap:14}}>
      <Text className="text-lg text-white">Welcome,</Text>

      {/* Display active text content */}
      <View style={{gap:5}} className="flex items-center justify-center gap-3 text-center">
        <Text className="text-2xl font-semibold text-white p-2">{userText[active].text1}</Text>
        <Text className="text-2xl font-semibold text-white p-2">{userText[active].text2}</Text>
        <Text className="text-2xl font-semibold text-white p-2">{userText[active].text3}</Text>
      </View>

      {/* Status Links (Dots) */}
      <View className="flex flex-row justify-center gap-10"  style={{gap:10}}>
        {statusLinks.map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: active === index ? "white" : "gray",
              height: 5,
              width: 50,
              borderRadius: 50,
            }} className=""
          ></View>
        ))}
      </View>
    </View>
  );
}
