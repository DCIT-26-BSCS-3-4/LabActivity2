import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/bg3.jpg')} // Add the path to your uploaded image
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>STUDENT PROFILE</Text>
      </View>

      {/* Profile Image */}
      <View style={styles.imageContainer}>
        <Image source={require('./assets/PONCIANO-1x1.png')} style={styles.profileImage} />
      </View>

      {/* Name and Info */}
      <Text style={styles.name}>Christine May Ponciano</Text>
      <Text style={styles.info}>19 years old | BSCS 3-4</Text>

      {/* About Me Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>ABOUT ME</Text>
        </View>
        <Text style={styles.sectionText}>
          I study in Cavite State University with a proven track record of leadership in academic settings.
          As a finance officer of AWSUG BuildHers+ Philippines, I am also a proactive volunteer in tech-related events.
        </Text>
      </View>

      {/* Achievements Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>ACHIEVEMENTS</Text>
        </View>
        <Text style={styles.sectionText}>
          • 3rd place in Startup Hackathon by DOST-START{'\n'}
          • Participant in BPI Data Wave Hackathon 2025{'\n'}
          • DOST-SEI Undergraduate Scholar Batch 2023{'\n'}
          • Received Introduction to Cybersecurity Badge from Cisco on October 2024
        </Text>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>SKILLS</Text>
        </View>
        <Text style={styles.sectionText}>
          • Confident in UI/UX Design{'\n'}
          • Experienced in TypeScript, Python, and Java{'\n'}
          • Knowledgeable in React and Tailwind{'\n'}
          • Introductory level in Cybersecurity{'\n'}
          • Capable in JavaScript frameworks
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#AEF2BD',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20
  },
  header: {
    backgroundColor: '#6cad6c',
    width: '100%',
    alignItems: 'center',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    paddingVertical: 30,
    paddingHorizontal: -20,
    paddingBottom: 80,
    marginLeft: 0,
    marginBottom: -55,
  },
  headerText: {
    fontSize: 25,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 1.5,
    textShadowColor: '#487348', // Black shadow
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset of 2px horizontally and vertically
    textShadowRadius: 5, // 5px blur radius
  },
  imageContainer: {
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 12,
    marginBottom: 10,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#3C3C3C',
  },
  info: {
    fontSize: 14,
    color: '#3C3C3C',
    marginBottom: 20,
  },
  section: {
    backgroundColor: '#D9F2D9',
    borderRadius: 10,
    padding: 15,
    width: '100%',
    marginBottom: 15,
    elevation: 3
  },
  sectionHeader: {
    backgroundColor: '#7EC97E',
    alignSelf: 'flex-start',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
  sectionText: {
    fontSize: 13,
    color: '#333',
    lineHeight: 18,
  },
});
