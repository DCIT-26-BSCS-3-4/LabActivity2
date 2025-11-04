import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <LinearGradient
      colors={['#c8a2ff', '#e8c5ff', '#ffffff']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Header */}
        <View style={styles.profileCard}>
          <Image
            source={{
              uri: 'https://scontent.fmnl25-4.fna.fbcdn.net/v/t39.30808-6/548103921_2241750612959646_5346671892559294876_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGFvZSaoTXtTZ6uUp3rryYZLAgBT3z5QXQsCAFPfPlBdMSU123voL6-XdzsFegAjlWIV4_6tfj38KOM8CHU6kBt&_nc_ohc=ptX409FdKXUQ7kNvwG7hvRE&_nc_oc=AdnHquFgGehfBzFLQaJ-XMSwRGswfOiwb1TQA2NyzccsEr0O2okAWI9o8aXs3W0b7uU&_nc_zt=23&_nc_ht=scontent.fmnl25-4.fna&_nc_gid=rz97NJR7UVV4KTqm9F6VRw&oh=00_Afi-QAZgUS7JnxzVhYkfkNPnVE99Y8d05mOHTaxnNvGUng&oe=690E0740',
            }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Michelle Domingo</Text>
          <Text style={styles.section}>BS in Computer Science</Text>
        </View>

        {/* Student Info */}
        <View style={styles.infoCard}>
          <Text style={styles.title}>🌸 Student Profile 🌸</Text>

          <View style={styles.infoRow}>
            <Ionicons name="person-circle-outline" size={20} color="#9b5de5" />
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>Michelle M. Domingo</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="calendar-outline" size={20} color="#9b5de5" />
            <Text style={styles.label}>Age:</Text>
            <Text style={styles.value}>20</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="school-outline" size={20} color="#9b5de5" />
            <Text style={styles.label}>Course/Year/Section:</Text>
            <Text style={styles.value}>BSCS 3-4</Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.subtitle}>💬 About Me</Text>
          <Text style={styles.paragraph}>
            I’m passionate about designing and building websites that are both
            beautiful and user-friendly. I enjoy experimenting with layouts,
            color palettes, and modern trends to create aesthetic and engaging
            online experiences.
          </Text>
          <Text> </Text>
          <Text style={styles.subtitle}>🏆 Achievements</Text>
          <View style={styles.achievementList}>
            <Text style={styles.achievement}> • With High Honors (2021)</Text>
            <Text style={styles.achievement}> • With High Honors (2022)</Text>
            <Text style={styles.achievement}> • CSSO 6th GAWAD DURUNGAWAN (2024)</Text>
            <Text style={styles.achievement}> • TMC Scholar (2023 - Present)</Text>
          </View>
          <Text> </Text>
          <Text style={styles.subtitle}>💻 Skills</Text>
          <View style={styles.skillContainer}>
            {[
              'HTML & CSS',
              'JavaScript',
              'Python',
              'Java',
              'PHP',
              'Web Design',
            ].map((skill, i) => (
              <View key={i} style={styles.skillTag}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 60,
  },
  profileCard: {
    alignItems: 'center',
    marginVertical: 25,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#e0b3ff',
    shadowColor: '#d1a4ff',
    shadowOpacity: 0.5,
    shadowRadius: 12,
  },
  name: {
    fontSize: 28,
    color: '#5b2a86',
    fontWeight: 'bold',
    marginTop: 10,
  },
  section: {
    fontSize: 16,
    color: '#7a4cc2',
    marginBottom: 5,
  },
  infoCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#b48efc',
    shadowOpacity: 0.4,
    shadowRadius: 12,
    borderWidth: 1,
    borderColor: '#e8d1ff',
  },
  title: {
    fontSize: 24,
    color: '#8a2be2',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  label: {
    fontSize: 16,
    color: '#7a4cc2',
    fontWeight: '600',
    marginLeft: 6,
  },
  value: {
    fontSize: 16,
    color: '#4b3c72',
    marginLeft: 4,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: '#e5c8ff',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#5b2a86',
    fontWeight: 'bold',
    marginTop: 10,
  },
  paragraph: {
    fontSize: 15,
    color: '#4b3c72',
    lineHeight: 22,
    marginTop: 6,
  },
  achievementList: {
    marginTop: 6,
  },
  achievement: {
    fontSize: 15,
    color: '#6b3b91',
    marginVertical: 2,
  },
  skillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  skillTag: {
    backgroundColor: '#e9d5ff',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    margin: 4,
  },
  skillText: {
    color: '#5b2a86',
    fontWeight: '600',
  },
});
