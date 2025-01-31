import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import image from "@/constants/image";
import { router } from "expo-router";

// Get the screen width dynamically
const screenWidth = Dimensions.get("window").width;

export default function QuestionHeader({ title, percentage, content }: { title: string; percentage: number; content: string }) {
    return (
        <View style={styles.container}>
            {/* Header Row */}
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Image source={image.back} resizeMode="contain" style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
            </View>

           
            <View style={{ paddingHorizontal: 10, gap: 10, width: "100%" }}>
                <View style={styles.progressBarBackground}>
                    <View
                        style={[styles.progressBarFill, { width: `${percentage}%` }]} // Dynamic width
                    />
                </View>
                <View style={styles.yellowStripContainer}>
                    <View style={styles.yellowStrip} />
                    <Text style={styles.content}>{content}</Text>
                </View>
            </View>
        </View>
    );
}

// External StyleSheet
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        gap: 16,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingVertical: 8, // Ensure padding inside the container
        width: "100%", // Container width limited to the screen width
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12, // Space between items
    },
    backButton: {
        padding: 8, // Similar to className="p-2"
    },
    backIcon: {
        height: 20,
        width: 20,
    },
    title: {
        fontSize: 16, // Equal to text-xl
        fontWeight: "500", // Equal to font-medium
        color: "#4B5563", // Equal to text-gray-600
    },
    progressBarBackground: {
        width: screenWidth - 64, // Screen width minus padding (16px on each side)
        height: 8,
        backgroundColor: "#E5E7EB", // Equal to bg-gray-200
        borderRadius: 9999, // Equal to rounded-full
        overflow: "hidden",
        alignSelf: "center", // Center the progress bar
    },
    progressBarFill: {
        height: "100%",
        backgroundColor: "#6B21A8", // Equal to bg-purple-800
        borderRadius: 9999, // Equal to rounded-full
    },
    yellowStripContainer: {
        flexDirection: "row", // Align yellow strip and content horizontally
        alignItems: "center", // Align items vertically centered
        gap: 8, // Space between the yellow strip and text
      
    },
    yellowStrip: {
        backgroundColor: "#FFD500",
        height: 70, // Adjust height to fit content
        width: 8, // Width of the yellow strip
        borderRadius: 16,
    },
    content: {
        fontSize: 16, 
        fontWeight: "400", // Bold text
        color: "#000023", // Text color
        flexWrap: "wrap", // Ensure text wraps if it's too long
    },
});
