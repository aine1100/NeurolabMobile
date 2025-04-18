import { useState } from "react";
import Header from "@/components/header";
import {
  FlatList,
  Alert,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Modal,
  StatusBar, // Import StatusBar
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Tabslayout from "./_layout";
import * as DocumentPicker from "expo-document-picker";
import Box from "@/components/dashboard/box";
import LiveEEGChart from "@/components/dashboard/LiveEegData";

export default function Home() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [response, setResponse] = useState(null);

  const allowedTypes = [".bdf", ".gdf", ".csv", ".edf", ".txt"];

  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: [
          "text/csv",
          "application/vnd.ms-excel",
          "text/plain",
          "application/octet-stream",
          "text/plain",
        ],
      });

      if (!result.canceled) {
        const fileExt = result.assets[0].name.split(".").pop();
        if (!allowedTypes.includes(`.${fileExt}`)) {
          setError("Invalid file type. Only BDF, GDF, CSV, and EDF files are allowed.");
          return;
        }
        setFile(result.assets[0]);
        setError("");
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
        type: file.mimeType || "application/octet-stream",
      });

      const response = await fetch("https://neurai-api.onrender.com/upload", {
        method: "POST",
        body: formPayload,
        headers: { "Content-Type": "multipart/form-data" },
      });

      const textData = await response.text();
      let responseData;

      try {
        responseData = JSON.parse(textData);
      } catch (error) {
        throw new Error("Invalid JSON response: " + textData);
      }

      if (!response.ok) throw new Error(responseData.message || "Upload failed");

      setFile(null);
      setError("");
      setResponse(responseData);
      setModalVisible(true);

      let recommendation = responseData.clinical_recommendations;
      await sendRecommendations(recommendation);

      Alert.alert("Data submitted successfully!");
    } catch (error) {
      console.error(error);
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const sendRecommendations = async (recommendation) => {
    try {
      if (!recommendation) {
        setError("No recommendations found");
        return;
      }

      const formattedRecommendation = Array.isArray(recommendation)
        ? recommendation.join(". ")
        : recommendation;

      console.log(formattedRecommendation);

      const dbResponse = await fetch("http://10.12.74.84:5000/api/eegdata/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recommendation: formattedRecommendation }),
      });

      const dbResponseData = await dbResponse.json();

      if (!dbResponse.ok) {
        throw new Error(dbResponseData.message || "Failed to save recommendations");
      }

      Alert.alert("Recommendations saved successfully!");
    } catch (err) {
      console.log(err);
      setError(err.message || "An error occurred while saving recommendations");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Add StatusBar to control its appearance */}
      <StatusBar
        barStyle="light-content" // Use "dark-content" if you want dark icons
        backgroundColor="transparent" // Make status bar transparent or set a specific color
        translucent={true} // Allow content with safe area to go under the status bar
      />
      <Header />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome Back</Text>

        {/* <TouchableOpacity style={styles.uploadButton} onPress={pickFile}>
          <Text style={styles.uploadButtonText}>{file ? file.name : "Upload File"}</Text>
        </TouchableOpacity>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity
          style={[styles.submitButton, loading && styles.disabledButton]}
          onPress={handleSubmit}
          disabled={loading}
        >
          {loading ? <ActivityIndicator color="#FFF" /> : <Text style={styles.submitButtonText}>Submit Data</Text>}
        </TouchableOpacity>

        {loading && <ActivityIndicator size="large" color="blue" />} */}
     <View style={styles.container2}>
      <Box title="Total Reports" data="100" />
      <Box title="Total Reports" data="100" />
    </View>
    <LiveEEGChart/>
        {response && (
          <Modal transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
            <View style={styles.modalOverlay}>
              <View style={styles.modal}>
                <Text style={styles.title}>Clinical Recommendations</Text>
                {response.clinical_recommendations?.length ? (
                  response.clinical_recommendations.map((rec, index) => (
                    <Text key={index} style={{ marginBottom: 5 }}>{rec}</Text>
                  ))
                ) : (
                  <Text>No recommendations available</Text>
                )}

                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.submitButton}>
                  <Text style={styles.submitButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}
      </View>
      <Tabslayout />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container2: {
    flexDirection: "row", // Tailwind's flex + flexDirection: "row"
    // flexWrap: "wrap", // flexWrap: "wrap"
    justifyContent: "center", // Tailwind's justify-center
    alignItems: "center", // Tailwind's items-center
    padding: 20, // padding: 20
    marginBottom: 10, // marginBottom: 10
    columnGap: 10, // Inline gap: 10 (or use 20 for Tailwind's gap-5)
    rowGap: 10, // Inline gap: 10 (for wrapped rows)
  },
  container: {
    flex: 1,
    backgroundColor: "#000026",
    // Remove paddingTop since StatusBar is translucent
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFF",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  uploadButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#28a745",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15,
  },
  disabledButton: {
    backgroundColor: "#6c757d",
    opacity: 0.7,
  },
  submitButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  errorText: {
    color: "#dc3545",
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "500",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
});