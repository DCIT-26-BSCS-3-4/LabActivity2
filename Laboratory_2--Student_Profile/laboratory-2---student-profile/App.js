import { StyleSheet, Text, View, Image} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}> 
        Student Profile
      </Text>

      <Card style={styles.card}>
        <Image
          source={require('./assets/picture.png')}
           style={styles.image}
        />
        <Text style={styles.text}> 
          Richard Aaron A. Nerpio
        </Text>
        <Text style={styles.text}>
          21 Years Old
        </Text>
      </Card>

      <View>
        <Card style={styles.card}>
          <Text style={styles.subHeader}> 
            Course/Year/Section
          </Text>

          <Text style={styles.text}> 
            Bachelor of Science in Computer Science 
            {'\n'}
            3 - 1
          </Text>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.subHeader}> 
            About me
          </Text>

          <Text style={styles.text}> 
            I am currently studying in Cavite State University to pursue my dream
            of Game Development
          </Text>
        </Card>
      </View>

      <Card style={styles.card}>
        <Text style={styles.subHeader}> 
          Achievements
        </Text>

        <Text style={styles.text}> 
          Built a multi-purpose flashlight for our senior high school research
        </Text>
      </Card>

      <Card style={styles.card}>
        <Text style={styles.subHeader}> 
          Skills
        </Text>

        <Text style={styles.text}> 
          Java, Python, C#, HTML, CSS
        </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#0E0E0E',
  },

  mainHeader: {
    fontWeight: 700,
    fontSize: 20,
    color: '#7D0633',
    marginTop: 10,
    marginHorizontal: 8,
  },

  subHeader: {
    fontSize: 18,
    fontWeight: 600,
    color: '#7D0633',
    marginBottom: 10,
  },

  card: { 
    textAlign: 'center',
    padding: 10,
    marginTop: 15,
    marginHorizontal: 8,
    backgroundColor: '#1A1A1A',
  },

  text: {
    color: '#E5E5E5',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 3,
  },

  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 5,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ffffff',
  }
});