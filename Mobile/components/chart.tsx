import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Svg, { Circle, G } from "react-native-svg";

const screenWidth = Dimensions.get("window").width;
const radius = 50;
const strokeWidth = 15;
const centerX = 60;
const centerY = 60;

const sections = [
  { percentage: 35, color: "#0C0C57", name: "Emotional Balance" }, // Dark Blue
  { percentage: 25, color: "#6665A8", name: "Cognitive Function" }, // Purple
  { percentage: 30, color: "#FFD237", name: "Stress Resilience" }, // Yellow
  { percentage: 10, color: "#D3D3D3", name: "Other" }, // Grey
];

const circumference = 2 * Math.PI * radius;
let startAngle = -90; // Start from the top

const FullDoughnutChart = () => {
  let cumulativePercentage = 0;

  return (
    <View style={styles.container}>
 
      <View style={styles.chartContainer}>
        <Svg width={210} height={210} viewBox="0 0 140 140">
          <G rotation={0} origin={`${centerX}, ${centerY}`}>
            {sections.map((section, index) => {
              const strokeDasharray = circumference;
              const strokeDashoffset =
                circumference - (circumference * section.percentage) / 100;

              const strokeColor = section.color;
              const circleProps = {
                cx: centerX,
                cy: centerY,
                r: radius,
                stroke: strokeColor,
                strokeWidth,
                strokeLinecap: "round",
                fill: "none",
                strokeDasharray,
                strokeDashoffset,
                transform: `rotate(${cumulativePercentage * 3.6} ${centerX} ${centerY})`,
              };

              cumulativePercentage += section.percentage;
              return <Circle key={index} {...circleProps} />;
            })}
          </G>
        </Svg>

        <View style={styles.textContainer}>
          <Text style={styles.percentage}>70%</Text>
          <Text style={styles.label}>Wellness</Text>
        </View>
      </View>

      <View style={styles.legendContainer}>
        {sections.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: item.color }]} />
            <Text style={styles.legendText}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", backgroundColor: "#fff", padding: 10,width:"100%",display:"flex",flexDirection:"row",alignContent:"center",justifyContent:"center" },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  chartContainer: { alignItems: "center", justifyContent: "center", position: "relative" },
  textContainer: { position: "absolute", alignItems: "center",top:60,left:60 },
  percentage: { fontSize: 20, fontWeight: "bold", color: "#000" },
  label: { fontSize: 16, color: "#000" },
  legendContainer: { marginTop: 10 },
  legendItem: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
  legendColor: { width: 12, height: 12, borderRadius: 6, marginRight: 5 },
  legendText: { fontSize: 10 },
});

export default FullDoughnutChart;
