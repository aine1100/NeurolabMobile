import { useState } from "react";
import Header from "@/components/header";
import { FlatList, View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Tabslayout from "./_layout";
import * as DocumentPicker from 'expo-document-picker';

export default function Home() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ["text/csv", "application/vnd.ms-excel"],
      });
      if (!result.canceled) {
        console.log(result.assets[0]); // Log the file data to check
        setFile(result.assets[0]);
      }
    } catch (err) {
      console.error(err);
      setError("File selection failed");
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      setError("Please select a file");
      return;
    }

    setLoading(true);
    try {
      const formPayload = new FormData();
      formPayload.append("file", {
        uri: file.uri,
        name: file.name,
        type: "text/csv",  // Ensure the file type matches what the server expects
      });

      const response = await fetch("http://10.11.75.22:8000/upload", {
        method: "POST",
        body: formPayload,
        headers: {
          "Accept": "application/json",
          "Content-Type": "multipart/form-data",
        },
      });

      const responseData = await response.json();
      console.log(responseData);  // Log response data to see what the backend is returning
      if (!response.ok) throw new Error(responseData.message || "Upload failed");

      // If successful, clear form
      setFile(null);
      setError("");
      alert("Data submitted successfully!");
    } catch (error) {
      console.error(error);
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
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
              <TouchableOpacity style={styles.uploadButton} onPress={pickFile}>
                <Text style={styles.uploadButtonText}>
                  {file ? file.name : "Upload CSV File"}
                </Text>
              </TouchableOpacity>

              {error ? <Text style={styles.errorText}>{error}</Text> : null}

              <TouchableOpacity 
                style={[styles.submitButton, loading && styles.disabledButton]}
                onPress={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color="#FFF" />
                ) : (
                  <Text style={styles.submitButtonText}>Submit Data</Text>
                )}
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
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 80,
    paddingBottom: 50,
  },
  submitButton: {
    backgroundColor: "#28a745",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  disabledButton: {
    backgroundColor: "#6c757d",
    opacity: 0.7,
  },
  submitButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  errorText: {
    color: "#dc3545",
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "500",
  },
});
