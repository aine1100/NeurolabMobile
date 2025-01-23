import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { RadioButton } from 'react-native-paper';

export default function SelectorQuestion({ text, selected, onSelect }: { text: string, selected: boolean, onSelect: () => void }) {

  return (
    <SafeAreaView
      style={[styles.container, selected ? styles.selected : styles.unselected]}
    >
      <View style={styles.content}>
        <RadioButton
          value="first"
          status={selected ? 'checked' : 'unchecked'}
          onPress={onSelect} // Trigger the onSelect function passed from parent
        />
        <Text style={selected ? styles.selectedText : styles.unselectedText}>
          {text}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    borderRadius: 10,
    
  },
  content: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
  },
  unselected: {
    backgroundColor: "#F1F1F8",
  },
  selected: {
    backgroundColor: "rgba(187, 187, 222, 0.5)",
  },
  selectedText: {
    color: "#111171", // Adjust the text color as needed
  },
  unselectedText: {
    color: "white",
  },
});
