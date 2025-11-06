import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import Studentpic from './components/Studentpic';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
      
          <View style={styles.topcontainer}>
              <Text style={styles.headerrtext}>My Student Profile</Text>
          </View>
          <View syle={styles.bottomcontainer}>
            <Studentpic />
            <View style={styles.textcontainer}><Text style={styles.paragraph}>Name: Dale Barro</Text></View>
            <View style={styles.textcontainer}><Text style={styles.paragraph}>Age: 20</Text></View>
            <View style={styles.textcontainer}><Text style={styles.paragraph}>Course/Year/Section: BSCS 3-4</Text></View>
            <View style={styles.textcontainer}><Text style={styles.paragraph}>About me: An inspiring game developer</Text></View>
            <View style={styles.textcontainer}><Text style={styles.paragraph}>
              Achievements: Secret
            </Text></View>
            <View style={styles.textcontainer}><Text style={styles.paragraph}>Skills: Play Game</Text></View>
            
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex',
    backgroundColor: '#A4ADBD',
    padding: 5,
    borderColor: '#8992A1',
    borderWidth: 5,
  },
  container2: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FEBF93ff',
    borderColor: '#8992A1',
    borderWidth: 5,
  },
  paragraph: {
    margin: 5,
    fontSize: 15,
    textAlign: 'center',
    color: '#44302Eff',
    fontWeight: 'bold',
    fontFamily: 'Georgia',
    textShadowRadius:15,
    textShadowColor:"white",
  },
  topcontainer: {
    backgroundColor: '#6AACC1ff',
    padding: 15,
  },
  headerrtext: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Georgia',
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowRadius:15,
  }, 
  textcontainer:{
    backgroundColor: "white",
    padding:7,
    width:"90%",
    margin: 'auto',
    marginBottom: 10,
    borderRadius:10
  },
});
