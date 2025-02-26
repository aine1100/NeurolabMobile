import { FlatList, View, Text, SafeAreaView,StyleSheet } from "react-native";
import SelectorQuestion from "@/components/selectorQuestion";
import QuestionHeader from "@/components/questionHeader";
import { useState } from "react";
import { QuestionButton,ButtonOne } from "@/components/button";
import { router } from "expo-router";

export default function QuestionThree() {
  // Array of text values for each selector block
  const questions = [
    "Consumed caffeine",
    "Consumed alcohol",
    "Used recreational drugs or stimulants",
    "Took prescribed medications"
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
              title="SUBSTANCE USE"
              percentage={60}
              content="Have you consumed any caffeine, alcohol, or taken any medications or recreational drugs in the past 24 hours?"
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
                    onPress={()=> router.push("/pages/steps/screen5")} // Trigger navigation to the next screen
                    classname="bg-white w-20 h-8 rounded-full"
                    textstyle={styles.textBlack}
                  />
                </View>
            <Text className="text-gray-600 font-bold text-md">QUESTION 3 OF 5</Text>

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

