import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function DailyStatus() {
  const screenWidth = Dimensions.get("window").width;

  // Sample data for the line chart
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50],
        strokeWidth: 2, // optional
      },
    ],
  };

  // Chart configuration settings
  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    decimalPlaces: 0, // optional, defaults to 2 decimals
    style: {
      borderRadius: 16,
    },
  };

  return (
    <View className="flex flex-1 gap-2 p-4">
      <Text className="text-xl font-semibold">Daily Status</Text>
      <LineChart
        data={data}
        width={screenWidth - 32} // adjust for your padding/margin
        height={220}
        chartConfig={chartConfig}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}
