import { FlatList, View, Text, SafeAreaView,StyleSheet } from "react-native";
import SelectorQuestion from "@/components/selectorQuestion";
import QuestionHeader from "@/components/questionHeader";
import { useState } from "react";
import { QuestionButton ,ButtonOne} from "@/components/button";
import { router } from "expo-router";

export default function QuestionFive() {
  // Array of text values for each selector block
  const questions = [
    "Well-rested (7–9 hours of sleep)",
    "Partially rested (4–6 hours of sleep)",
    "Sleep-deprived (less than 4 hours)",
    "Unusual sleep pattern (e.g., interrupted or overslept)"
  ];

  // Set the default selected index
  const [selected, setSelected] = useState(0);

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
              title="MENTAL AND ENV’T FACTORS"
              percentage={100}
              content="Did you watch any stimulating content, like a movie or video game, or were you exposed to bright lights or loud sounds before this test?"
            />
          </View>
        }
        ListFooterComponent={
          <View className="w-full gap-8 flex items-center justify-center px-5 py-4">
             <View className="w-full flex gap-5 flex-row justify-center items-center">
                                          <ButtonOne
                                            style={styles.buttonYes}
                                            text="Back"
                                            onPress={() => router.back()} // Navigate back
                                            classname="bg-yellow-500 w-20 h-8 rounded-full"
                                            textstyle={styles.textOne}
                                          />
                                          <ButtonOne
                                            style={styles.buttonNo}
                                            text="Next"
                                            onPress={()=> router.push("/pages/steps/onboarding")} // Trigger navigation to the next screen
                                            classname="bg-white w-20 h-8 rounded-full"
                                            textstyle={styles.textBlack}
                                          />
                                        </View>
          
            <Text className="text-gray-600 font-bold text-md">QUESTION 5 OF 5</Text>

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
    flexWrap:"wrap",
    fontSize: 10,
  },
  textBlack: {
    color: "white",
  },
  textOne: {
    color: "#111171",
  },
});

