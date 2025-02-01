import { FlatList, View, Text, SafeAreaView,StyleSheet } from "react-native";
import SelectorQuestion from "@/components/selectorQuestion";
import QuestionHeader from "@/components/questionHeader";
import { useState } from "react";
import { QuestionButton,ButtonOne } from "@/components/button";
import { useRouter } from "expo-router"; // Correct way to import router

export default function QuestionOne() {
  // Array of text values for each selector block
  const questions = [
    "Well-rested (7–9 hours of sleep)",
    "Slightly tired (5–6 hours of sleep)",
    "Tired (3–4 hours of sleep)",
    "Very tired (Less than 3 hours of sleep)"
  ];

  // Set the default selected index
  const [selected, setSelected] = useState(0);

  // Initialize the router hook
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={questions}
        renderItem={({ item, index }) => (
          <View className="w-full px-7 py-2 rounded-md " style={{ paddingHorizontal: 5 }}>
            <SelectorQuestion
              text={item}
              selected={selected === index} // Pass selected state to SelectorQuestion
              onSelect={() => setSelected(index)} // Set selected index on press
            />
          </View>
        )}
        ListHeaderComponent={
          <View className="py-2 px-5">
            <QuestionHeader
              title="SLEEP AND REST"
              percentage={20}
              content="Did you get enough sleep last night, or have you experienced any sleep deprivation recently?"
            />
          </View>
        }
        ListFooterComponent={
          <View className="w-full gap-8 flex items-center justify-center px-5 py-4">
            {/* Ensure `handleFront` is properly passed */}
             <View className="w-full flex gap-5 flex-row justify-center items-center">
                              <ButtonOne
                                style={styles.buttonYes}
                                text="Back"
                                onPress={() => router.back()} // Navigate back
                                classname="bg-yellow-500 w-20 h-7 rounded-full"
                                textstyle={styles.textOne}
                              />
                              <ButtonOne
                                style={styles.buttonNo}
                                text="Next"
                                onPress={()=> router.push("/steps/screen4")} // Trigger navigation to the next screen
                                classname="bg-white w-20 h-7 rounded-full"
                                textstyle={styles.textBlack}
                              />
                            </View>
              
           
            <Text className="text-gray-600 font-bold text-md">QUESTION 1 OF 5</Text>
          </View>
        }
        keyExtractor={(item, index) => index.toString()} // Unique key for each item
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonYes: {
    backgroundColor: "white",
    width: 120,
    height: 50,
    borderWidth: 3,
    borderColor: "#111171",
  },
  buttonNo: {
    backgroundColor: "#111171",
    borderWidth: 1,
    borderColor: "#111171",
    width: 120,
    height: 50,
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 10,
    flexWrap:"wrap",
  },
  textBlack: {
    color: "white",
  },
  textOne: {
    color: "#111171",
  },
});
