import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const DATA = {
  name: 'Gwyneth Anne A. Gorion',
  age: '20 Years Old',
  course: 'BS Computer Science',
  about: 'Big fan of manga, movies, anime, and cats.',
  achievements: [
    'Managed to reach 3rd year of college',
  ],
  skills: ['Procrastinator'],

  photo: require('./assets/profile.jpeg'),
  iconAbout: require('./assets/about_icon.png'),
  iconAchieve: require('./assets/achieve_icon.png'),
  iconSkills: require('./assets/skills_icon.png'),
};

export default function StudentProfile() {
  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={{ paddingBottom: 60, alignItems: 'center' }}
    >
      <Header />
      <ProfileCard />
      <AboutSection />
      <AchievementsSection />
      <SkillsSection />
    </ScrollView>
  );
}

// Header
function Header() {
  return (
    <View style={styles.headerWrap}>
      <Text style={styles.headerText}>Student Profile</Text>
    </View>
  );
}

// Profile
function ProfileCard() {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.photoWrap}>
          <Image source={DATA.photo} style={styles.photo} />
        </View>
        <View style={styles.basicInfo}>
          <Text style={styles.name}>{DATA.name}</Text>
          <Text style={styles.muted}>{DATA.age}</Text>
          <Text style={styles.muted}>{DATA.course}</Text>
        </View>
      </View>
    </View>
  );
}

// About
function AboutSection() {
  return (
    <Section
      title="About Me"
      icon={DATA.iconAbout}
      content={<Text style={styles.contentText}>{DATA.about}</Text>}
    />
  );
}

// Achievements
function AchievementsSection() {
  return (
    <Section
      title="Achievements"
      icon={DATA.iconAchieve}
      content={
        <View style={{ marginTop: 4 }}>
          {DATA.achievements.map((a, i) => (
            <Text key={i} style={styles.contentText}>
              {'\u2022'} {a}
            </Text>
          ))}
        </View>
      }
    />
  );
}

// Skills
function SkillsSection() {
  return (
    <Section
      title="Skills"
      icon={DATA.iconSkills}
      content={
        <View style={styles.skillsWrap}>
          {DATA.skills.map((s, i) => (
            <View key={i} style={styles.skillChip}>
              <Text style={styles.skillText}>{s}</Text>
            </View>
          ))}
        </View>
      }
    />
  );
}

function Section({ title, icon, content }) {
  return (
    <View style={styles.card}>
      <View style={styles.sectionHeader}>
        <View style={styles.titleRow}>
          <Image source={icon} style={styles.sectionIcon} />
          <Text style={styles.sectionTitle}>{title}</Text>
        </View>
      </View>
      <View style={styles.sectionBody}>{content}</View>
    </View>
  );
}

// Styles (using Lab 3’s color theme)
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#f8f3f2',
    paddingVertical: 30,
  },

  headerWrap: {
    alignItems: 'center',
    marginBottom: 15,
  },
  headerText: {
    color: '#a11212',
    fontSize: 26,
    fontWeight: '900',
    borderBottomWidth: 3,
    borderColor: '#1a1a1a',
    paddingBottom: 5,
  },

  card: {
    backgroundColor: '#fff4f3',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1.5,
    borderColor: '#a11212',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 18,
    width: '90%',
    alignSelf: 'center',
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  photoWrap: {
    width: 110,
    height: 110,
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#a11212',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  basicInfo: { flex: 1 },
  name: {
    fontSize: 19,
    fontWeight: '800',
    marginBottom: 4,
    color: '#1a1a1a',
  },
  muted: {
    color: '#333',
    fontWeight: '600',
    marginBottom: 2,
  },

  sectionHeader: { paddingBottom: 6 },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  sectionIcon: { width: 22, height: 22, resizeMode: 'contain' },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#a11212',
  },
  sectionBody: { marginTop: 8 },

  contentText: { fontSize: 15, color: '#111', lineHeight: 22 },

  skillsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillChip: {
    backgroundColor: '#a11212',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  skillText: { color: '#fff', fontWeight: '700', fontSize: 13 },
});
