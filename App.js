import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profileBox}>
        <Text style={styles.header}>Student Profile</Text>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>Pegenia, Roi Bryle Theo</Text>

        <Text style={styles.label}>Age:</Text>
        <Text style={styles.info}>20 years old</Text>

        <Text style={styles.label}>Course/Year/Section:</Text>
        <Text style={styles.info}>BSCS 3-4</Text>

        <Text style={styles.label}>About Me:</Text>
        <Text style={styles.info}>
          A normal guy who likes to explore random stuff...
        </Text>

        <Text style={styles.label}>Achievements:</Text>
        <Text style={styles.info}>
          • Member of AWS LC - SPADE (Marketing){'\n'}
          • Member of CSSO Committee (COEXA)
        </Text>

        <Text style={styles.label}>Skills:</Text>
        <View style={styles.skillsRow}>
          <View style={styles.column}>
            <Text style={styles.info}>• HTML</Text>
            <Text style={styles.info}>• CSS</Text>
            <Text style={styles.info}>• React</Text>
            <Text style={styles.info}>• Java</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.info}>• JavaScript</Text>
            <Text style={styles.info}>• Node</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#37353E',
    padding: 20,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color:'white'
  },
  profileBox: {
    backgroundColor: '#6B4E9C',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    borderColor:'white',
    borderWidth:2
  },
  label: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 12,
    color: 'white'
  },
  info: {
    fontSize: 12,
    marginLeft: 10,
    color:'white'
  },
  skillsRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginLeft: 10,
  marginTop: 5,
  },
  column: {
  flex: 1,
  },
});
