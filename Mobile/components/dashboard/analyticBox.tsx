import { View, Text, StyleSheet } from "react-native";

export default function AnalyticBox({
  title,
  data,
  percentage,
  answerResult,
}: any) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{title || "No Title"}</Text>
      </View>
      <View></View>
      <View style={styles.dataContainer}>
        <Text style={styles.result}>{data || "No Data"}</Text>
        <Text style={styles.result}>{percentage || "100%"}</Text>
      </View>
      <Text style={styles.resultAnswer}>{answerResult || "No result"}</Text>
      <View style={styles.progressBarBackground}>
        <View
          style={[styles.progressBarFill, { width: `${80}%` }]} // Dynamic width
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingVertical: 15, // Tailwind's py-2 (8px)
    paddingHorizontal: 10, // Tailwind's px-3 (12px)
    borderWidth: 1,
    borderColor: "#1D4FD7",
    borderRadius: 10,
    gap: 10, // Tailwind's gap-3 (12px)
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 12, // Tailwind's gap-3 (3 * 4px = 12px)
  },
  dataContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 12, // Tailwind's gap-3 (3 * 4px = 12px)
  },
  text: {
    color: "#FFFFFF", // Tailwind's text-white
    fontWeight: "600", // Tailwind's font-semibold
  },
  result: {
    color: "green",
  },
  resultAnswer: {
    color: "white",
    textAlign: "center",
    width: "100%",
    fontSize: 15,
  },
  progressBarBackground: {
    
    width: 300 - 64, // Screen width minus padding (16px on each side)
    height: 8,
    backgroundColor: "#030833", // Equal to bg-gray-200
    borderRadius: 9999, // Equal to rounded-full
    overflow: "hidden",
    alignSelf: "center", // Center the progress bar
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#00A66C", // Equal to bg-purple-800
    borderRadius: 9999, // Equal to rounded-full
  },
});
