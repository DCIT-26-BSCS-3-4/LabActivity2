import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>STUDENT PROFILE</Text>
      </View>

      {/* Profile Window */}
      <View style={styles.window}>
        <View style={styles.sectionTitle}>
          <Text style={styles.titleText}>HELLO!</Text>
        </View>

        {/* Basic Info */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Name: Mary Avril A. Bundal</Text>
          <Text style={styles.infoText}>Age: 20</Text>
          <Text style={styles.infoText}>Course / Year / Section: BSCS 3-4</Text>
        </View>

        {/* About Me */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>ABOUT ME</Text>
          <Text style={styles.sectionText}>
            Currently rethinking all my life choices
          </Text>
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>ACHIEVEMENTS</Text>
          <Text style={styles.sectionText}>Was an honor student once. Then college happened.</Text>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>SKILLS</Text>
          <Text style={styles.sectionText}>Still figuring it out, but confidently.</Text>
         
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>end of profile</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    backgroundColor: '#dcdcdc',
    borderColor: '#000',
    borderWidth: 2,
    width: 400,
    alignItems: 'center',
    paddingVertical: 6,
    borderRadius: 6,
    marginBottom: 12,
  },
  headerText: {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: 15,
  },
  window: {
    width: 400, // narrower box!
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 8,
    padding: 14,
  },
  sectionTitle: {
    borderBottomWidth: 2,
    borderColor: '#000',
    marginBottom: 10,
  },
  titleText: {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
  infoBox: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    marginVertical: 10,
  },
  infoText: {
    fontFamily: 'monospace',
    fontSize: 13,
    marginBottom: 4,
  },
  section: {
    borderTopWidth: 1,
    borderColor: '#000',
    marginTop: 10,
    paddingTop: 6,
  },
  sectionHeader: {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 4,
  },
  sectionText: {
    fontFamily: 'monospace',
    fontSize: 13,
    marginBottom: 2,
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#000',
    marginTop: 10,
    paddingTop: 5,
  },
  footerText: {
    fontFamily: 'monospace',
    textAlign: 'center',
    fontSize: 12,
    color: '#444',
  },
});
