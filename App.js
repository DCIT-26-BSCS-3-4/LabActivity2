import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.secondCon}>
        <Text style={styles.title}>Student Profile</Text>

        <Text style={styles.label}>Name: </Text>
        <Text style={styles.info}>Gallardo Charlson A</Text>

        <Text style={styles.label}>Age: </Text>
        <Text style={styles.info}>21</Text>

        <Text style={styles.label}>Course/Year/Section: </Text>
        <Text style={styles.info}>BS Computer Science 3-4</Text>

        <Text style={styles.label}>About Me: </Text>
        <Text style={styles.info}>Im passionate about technology and app development</Text>

        <Text style={styles.label}>Achievements: </Text>
        <Text style={styles.info}>nothing</Text>

        <Text style={styles.label}>Skills: </Text>
        <Text style={styles.info}>Java, Python, Web Development</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6F0FA",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  secondCon: {
    borderRadius: 25,
    backgroundColor: "#e0f7fa",
    borderWidth: 2,
    borderColor: "#cfd8dc",
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#00796b",
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#C0C0C0"
  },
  info: {
    borderWidth: 1,
    textAlign: "center",
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    color: "#708090",
    borderColor: "#DCDCDC"
  },
});