
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import myPhoto from './assets/profile-pic.jpg';


export default function App() {
  const Card = ({ label, color, children }) => (
    <View style={styles.cardWrapper}>
      <View style={[styles.card, { borderColor: color }]}>
        <View style={[styles.labelHeader, { backgroundColor: color }]}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
        <View style={styles.cardContent}>{children}</View>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}> 
      <Text style={styles.header}>Student Profile</Text>

      <Image
        source={myPhoto} style={styles.profilePic}
      />

      <Card label="Name" color="#317f99">
        <Text style={styles.info}>Marvey Joshua Mecua</Text>
      </Card>

      <Card label="Age" color="#718a72">
        <Text style={styles.info}>20</Text>
      </Card>

      <Card label="Course / Year / Section" color="#997bab">
        <Text style={styles.info}>BSCS 3-4</Text>
      </Card>

      <Card label="About Me" color="#e6b863">
        <Text style={styles.info}>
          I’m a CS student who loves gaming and aspires to become a software
          developer.
        </Text>
      </Card>

      <Card label="Achievements" color="#e91e63">
        <Text style={styles.info}>
          Won an award in EngFilSciMatory Quiz Bee (Elementary)
        </Text>
      </Card>

      <Card label="Skills" color="#12dbb6">
        <Text style={styles.info}>
          • Python{'\n'}• Java{'\n'}• HTML/CSS{'\n'}• JavaScript
        </Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#132d40',
    alignItems: 'center',
    padding: 20
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#779e99',
    marginTop: 30,
    marginBottom: 20,
    fontFamily: 'monospace'
  },
  profilePic: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: '#d3ebca',
    marginBottom: 25
  },
  cardWrapper: {
    marginBottom: 20,
    width: '90%'
  },
  card: {
    backgroundColor: '#dae8e5',
    borderRadius: 20,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden'
  },
  labelHeader: {
    paddingVertical: 6,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  labelText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Courier new'
  },
  cardContent: {
    padding: 15,
  },
  info: {
    fontSize: 16,
    color: '#424242',
    textAlign: 'center',
    lineHeight: 22,
    fontFamily: 'Roboto'
  },

});
