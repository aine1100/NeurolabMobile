import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/image";

export default function CategoryCards() {
  const cards = [
    {
      title: "Sleep and Rest",
      status: {
        title: "Done",
        icon: images.done,
      },
    },
    {
      title: "Substance Use",
      status: {
        title: "Done",
        icon: images.done,
      },
    },
    {
      title: "Physical Activity",
      status: {
        title: "To Do",
        icon: images.todo,
      },
    },
    {
      title: "Mental And Environmental Factors",
      status: {
        title: "To Do",
        icon: images.todo,
      },
    },
  ];

  return (
    <SafeAreaView style={styles.container} className="w-full">
      {cards.map((card, index) => (
        <View style={styles.cardContainer} key={index} className="w-full">
          {/* Yellow Vertical Strip */}
          <View style={styles.yellowStrip}></View>

          {/* Card Content */}
          <View style={styles.content}>
            {/* Title */}
            <Text style={styles.title}>{card.title}</Text>

            {/* Status */}
            <View style={styles.statusContainer}>
              <Image
                source={card.status.icon}
                style={styles.statusIcon}
                resizeMode="contain"
              />
              <Text
                style={[
                  styles.statusText,
                  card.status.title === "To Do" ? styles.statusTextToDo : null,
                ]}
              >
                {card.status.title}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: "#0F0F20",
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4, 
  },
  yellowStrip: {
    backgroundColor: "#FFD500",
    height: 80,
    width: 8,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    gap:5,
    marginBottom:30
  },
  statusIcon: {
    width: 16,
    height: 16,
   
  },
  statusText: {
    color: "#22C55E", // Default green color for "Done"
    fontSize: 10,
    fontWeight: "500",
  },
  statusTextToDo: {
    color: "#EF4444", // Red color for "To Do"
  },
});
