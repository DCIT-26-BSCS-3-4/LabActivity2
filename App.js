import React from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Image } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Image
            source={require('./assets/school_1x1.png')}
            style={styles.avatar}
          />

          <Text style={styles.name}>Jiroh Reinier R. Carpio</Text>
          <Text style={styles.info}>AGE: 20</Text>
          <Text style={styles.info}>COURSE/YEAR/SECTION: BSCS 3 - 4</Text>

          <View style={styles.section}>
            <Text style={styles.heading}>About me</Text>
            <Text style={styles.body}>
              I’m Jiroh Carpio, a Computer Science student at Cavite State University - Indang, passionate about programming, software development, and
              data analysis. I aim to become a software engineer or data scientist and continuously seek opportunities to learn, grow, and contribute tO 
              impactful tech projects.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>Achievements</Text>
            <Text style={styles.body}>• With High Honors High School Graduate</Text>
            <Text style={styles.body}>• Most recent GWA: 1.15</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>Skills</Text>
            <Text style={styles.body}>• JavaScript</Text>
            <Text style={styles.body}>• React Native</Text>
            <Text style={styles.body}>• Git / GitHub</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f2f6ff" },
  container: { padding: 20, alignItems: "center" },
  card: {
    width: "100%",
    maxWidth: 600,
    backgroundColor: "white",
    borderRadius: 14,
    padding: 20,
    shadowColor: "#000",
    elevation: 3
  },
  avatar: { width: 200, height: 200, borderRadius: 100, marginBottom: 12, alignSelf: "center" },
  name: { fontSize: 20, fontWeight: "700", textAlign: "center", marginBottom: 6 },
  info: { fontSize: 14, textAlign: "center", color: "#333", marginBottom: 4 },
  section: { marginTop: 12 },
  heading: { fontSize: 16, fontWeight: "600", marginBottom: 6 },
  body: { fontSize: 14, color: "#444", marginBottom: 4 }
});