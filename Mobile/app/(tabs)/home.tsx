import  { useState } from "react";
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import * as DocumentPicker from 'expo-document-picker';
import Header from "@/components/header";
import Tabslayout from "./_layout";

export default function Home() {
  const [formData, setFormData] = useState({
    patientName: "",
    patientAge: "",
  });
  const [file, setFile] = useState(null);

  const userInput = [
    { name: "Patient Name", key: "patientName" },
    { name: "Patient Age", key: "patientAge" },
  ];

  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ["text/csv", "application/vnd.ms-excel"],
      });
      if (result.type === 'success') {
        setFile(result);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (key: keyof typeof formData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.patientName || !formData.patientAge || !file) {
      alert("Please fill out all fields and upload a file.");
      return;
    }

    const data = new FormData();
    data.append('patientName', formData.patientName);
    data.append('patientAge', formData.patientAge);
    data.append('file', {
      uri: file.uri,
      name: file.name,
      type: file.mimeType || 'text/csv',
    });

    try {
      const response = await fetch("http://localhost:5000/api/patient", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: data,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        alert("Uploaded successfully");
      } else {
        alert("Upload failed");
      }
    } catch (err) {
      alert("Failed to add data");
      console.error(err);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <View style={styles.headerContainer}>
        <Header />
      </View>

      <FlatList
        data={[]}
        renderItem={() => null}
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.subtitle}>Enter Your Personal Data for Analysis</Text>

            <View style={styles.inputContainer}>
              {userInput.map((input) => (
                <View style={styles.inputWrapper} key={input.key as string}>
                  <Text style={styles.label}>{input.name}</Text>
                  <TextInput
                  
                    placeholder={input.name}
                    mode="outlined"
                    style={styles.textInput}
                    value={formData[input.key]}
                    onChangeText={(value) => handleInputChange(input.key, value)}
                  />
                </View>
              ))}

              <TouchableOpacity style={styles.uploadButton} onPress={pickFile}>
                <Text style={styles.uploadButtonText}>
                  {file ? file.name : "Upload CSV File"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>

            <Tabslayout />
          </View>
        }
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  contentContainer: {
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  inputContainer: {
    gap: 10,
  },
  inputWrapper: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  textInput: {
    backgroundColor: "#FFF",
    borderRadius: 8,
  },
  uploadButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  uploadButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#28A745",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 80,
    paddingBottom: 50,
  },
});
