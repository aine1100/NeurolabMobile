import { View, Text, StyleSheet } from "react-native";

export default function Box({ title, data }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{title || "No Title"}</Text>
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.text}>{data || "No Data"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"55%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15, // Tailwind's py-2 (8px)
    paddingHorizontal: 10, // Tailwind's px-3 (12px)
    borderWidth: 1,
    borderColor: "#1D4FD7",
    borderRadius:10,
    gap: 5, // Tailwind's gap-3 (12px)
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 12, // Tailwind's gap-3 (3 * 4px = 12px)
  },
  dataContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 12, // Tailwind's gap-3 (3 * 4px = 12px)
  },
  text: {
    color: "#FFFFFF", // Tailwind's text-white
    fontWeight: "600", // Tailwind's font-semibold
  },
});