import { useRouter } from "expo-router"; // Use the correct hook for routing
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export function ButtonOne({
  text,
  onPress,
  classname,
  style,
  textstyle,
}: {
  text: string;
  onPress:any;
  classname: string;
  textstyle: any;
  style: any;
}) {
  return (
    <TouchableOpacity
      className={classname}
      onPress={onPress}
      style={[styles.button, style]} // Combine default and custom styles
    >
      <Text style={[styles.text, textstyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

export function QuestionButton({ handleFront }: { handleFront: any }) {
  const router = useRouter(); // Initialize the router hook

  return (
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
        onPress={handleFront} // Trigger navigation to the next screen
        classname="bg-white w-20 h-8 rounded-full"
        textstyle={styles.textBlack}
      />
    </View>
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
    fontSize: 16,
  },
  textBlack: {
    color: "white",
  },
  textOne: {
    color: "#111171",
  },
});
