import { FlatList, View, Text, SafeAreaView } from "react-native";
import SelectorQuestion from "@/components/selectorQuestion";
import QuestionHeader from "@/components/questionHeader";
import { useState } from "react";
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

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={questions}
        renderItem={({ item, index }) => (
          <View className="w-full px-3 py-2 rounded-md " style={{paddingHorizontal:5}}>
            <SelectorQuestion 
              text={item}
              selected={selected === index} // Pass selected state to SelectorQuestion
              onSelect={() => setSelected(index)} 
              // Set selected index on press
            />
          </View>
        )}
        ListHeaderComponent={
          <View className="py-5 px-5">
            <QuestionHeader
              title="SLEEP AND REST"
              percentage={25}
              content="Did you get enough sleep last night, or have you experienced any sleep deprivation recently?"
            />
          </View>
        }
        keyExtractor={(item, index) => index.toString()} // Unique key for each item
      />
    </SafeAreaView>
  );
}
