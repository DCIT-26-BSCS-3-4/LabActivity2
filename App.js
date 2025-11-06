import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Student Profile</Text>

        <View style={styles.box1}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.info}>Billie T Villanueva</Text>
        </View>

        <View style={styles.box2}>
          <Text style={styles.label}>Age:</Text>
          <Text style={styles.info}>21</Text>
        </View>

        <View style={styles.box3}>
          <Text style={styles.label}>Course/Year/Section:</Text>
          <Text style={styles.info}>BSCS 3-4</Text>
        </View>

        <View style={styles.box4}>
          <Text style={styles.label}>About Me:</Text>
          <Text style={styles.info}>
            I am a student trying to learn everyday and trying my best always.
          </Text>
        </View>

        <View style={styles.box5}>
          <Text style={styles.label}>Achievements:</Text>
          <Text style={styles.info}>
            • Graduated SHS{'\n'}
            • Grown a sunflower
          </Text>
        </View>

        <View style={styles.box6}>
          <Text style={styles.label}>Skills:</Text>
          <Text style={styles.info}>
            • Strategy games{'\n'}
            • Ragebait{'\n'}
            • Lying
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cbf2e4',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2c3e50',
  },
  box1: {
    backgroundColor: '#f2f0cb',
    borderRadius: 20,
    padding: 15,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#020202',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
    box2: {
    backgroundColor: '#f2cbec',
    borderRadius: 20,
    padding: 15,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#020202',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
    box3: {
    backgroundColor: '#d2cbf2',
    borderRadius: 20,
    padding: 15,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#020202',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
    box4: {
    backgroundColor: '#f2dacb',
    borderRadius: 20,
    padding: 15,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#020202',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
    box5: {
    backgroundColor: '#e4ac88',
    borderRadius: 20,
    padding: 15,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#020202',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
    box6: {
    backgroundColor: '#89C2FA',
    borderRadius: 20,
    padding: 15,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#020202',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 6,
  },
  info: {
    fontSize: 16,
    color: '#2c3e50',
    lineHeight: 22,
  },
});
