import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-gifted-charts";

const { width } = Dimensions.get("window");

const LiveEEGChart: React.FC = () => {
  // State to hold chart data
  const [chartData, setChartData] = useState({
    attention: [],
    cognitiveLoad: [],
    mentalFatigue: [],
    relaxation: [],
    labels: [],
  });

  // Maximum number of data points to display (to simulate scrolling)
  const MAX_DATA_POINTS = 20;

  // Function to generate a random value between 0 and 100
  const generateRandomValue = () => Math.floor(Math.random() * 101);

  // Function to generate a new data point with a timestamp
  const generateNewDataPoint = () => {
    const now = new Date();
    const timeLabel = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    return {
      attention: generateRandomValue(),
      cognitiveLoad: generateRandomValue(),
      mentalFatigue: generateRandomValue(),
      relaxation: generateRandomValue(),
      label: timeLabel,
    };
  };

  // Initialize chart data and set up live updates
  useEffect(() => {
    // Initial data
    const initialData = Array.from({ length: MAX_DATA_POINTS }, () => generateNewDataPoint());
    setChartData({
      attention: initialData.map((d) => ({ value: d.attention })),
      cognitiveLoad: initialData.map((d) => ({ value: d.cognitiveLoad })),
      mentalFatigue: initialData.map((d) => ({ value: d.mentalFatigue })),
      relaxation: initialData.map((d) => ({ value: d.relaxation })),
      labels: initialData.map((d) => d.label),
    });

    // Update data every 2 seconds to simulate live updates
    const interval = setInterval(() => {
      setChartData((prevData) => {
        const newDataPoint = generateNewDataPoint();
        const newAttention = [...prevData.attention, { value: newDataPoint.attention }].slice(-MAX_DATA_POINTS);
        const newCognitiveLoad = [...prevData.cognitiveLoad, { value: newDataPoint.cognitiveLoad }].slice(-MAX_DATA_POINTS);
        const newMentalFatigue = [...prevData.mentalFatigue, { value: newDataPoint.mentalFatigue }].slice(-MAX_DATA_POINTS);
        const newRelaxation = [...prevData.relaxation, { value: newDataPoint.relaxation }].slice(-MAX_DATA_POINTS);
        const newLabels = [...prevData.labels, newDataPoint.label].slice(-MAX_DATA_POINTS);

        return {
          attention: newAttention,
          cognitiveLoad: newCognitiveLoad,
          mentalFatigue: newMentalFatigue,
          relaxation: newRelaxation,
          labels: newLabels,
        };
      });
    }, 2000); // Update every 2 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Prepare datasets for the chart
  const datasets = [
    {
      data: chartData.attention,
      color: () => "rgb(75, 192, 192)", // Attention Score
      strokeWidth: 1,
      withDots: true,
      dotColor: "rgb(75, 192, 192)",
    },
    {
      data: chartData.cognitiveLoad,
      color: () => "rgb(255, 99, 132)", // Cognitive Load
      strokeWidth: 1,
      withDots: true,
      dotColor: "rgb(255, 99, 132)",
    },
    {
      data: chartData.mentalFatigue,
      color: () => "rgb(255, 205, 86)", // Mental Fatigue
      strokeWidth: 1,
      withDots: true,
      dotColor: "rgb(255, 205, 86)",
    },
    {
      data: chartData.relaxation,
      color: () => "rgb(54, 162, 235)", // Relaxation Level
      strokeWidth: 1,
      withDots: true,
      dotColor: "rgb(54, 162, 235)",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live EEG Cognitive Metrics</Text>
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: "rgb(75, 192, 192)" }]} />
          <Text style={styles.legendText}>Attention Score (%)</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: "rgb(255, 99, 132)" }]} />
          <Text style={styles.legendText}>Cognitive Load (%)</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: "rgb(255, 205, 86)" }]} />
          <Text style={styles.legendText}>Mental Fatigue (%)</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: "rgb(54, 162, 235)" }]} />
          <Text style={styles.legendText}>Relaxation Level (%)</Text>
        </View>
      </View>
     <View style={{width:"80%", padding:5}}>

     <LineChart
        data={datasets[0].data} // First dataset
        data2={datasets[1].data} // Second dataset
        data3={datasets[2].data} // Third dataset
        data4={datasets[3].data} // Fourth dataset
        color="rgb(75, 192, 192)" // Color for first dataset
        color2="rgb(255, 99, 132)" // Color for second dataset
        color3="rgb(255, 205, 86)" // Color for third dataset
        color4="rgb(54, 162, 235)" // Color for fourth dataset
        strokeWidth={1}
        withDots={true}
        dotColor="rgb(75, 192, 192)" // Dot color for first dataset
        dotColor2="rgb(255, 99, 132)" // Dot color for second dataset
        dotColor3="rgb(255, 205, 86)" // Dot color for third dataset
        dotColor4="rgb(54, 162, 235)" // Dot color for fourth dataset
        width={width -150}
        height={200}
        yAxisLabel="%"
        xAxisLabel="Time"
        xLabels={chartData.labels}
        withShadow={false}
        withHorizontalLines={true}
        yAxisColor="#FFFFFF"
        xAxisColor="#FFFFFF"
        textColor="#FFFFFF"
        maxValue={100}
        minValue={0}
        yAxisTextStyle={{ color: "#FFFFFF" }}
        xAxisTextStyle={{ color: "#FFFFFF" }}
        curved
        curvature={0.1} // Similar to Chart.js tension: 0.4
        initialSpacing={20}
        endSpacing={20}
        backgroundColor="#030833"
        hideRules={false}
        rulesColor="rgba(255, 255, 255, 0.2)"
      />
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#030833",
    borderRadius: 10,
    width:"100%"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 10,
  },
  legend: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 10,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    marginBottom: 5,
  },
  legendColor: {
    width: 20,
    height: 10,
    marginRight: 5,
  },
  legendText: {
    color: "#FFFFFF",
    fontSize: 12,
  },
});

export default LiveEEGChart;