import { StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'

// or any files within the Snack
import * as StudentProfileComponents from './components/StudentProfile';

export default function App() {
  return (
    <SafeAreaProvider> 
      <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <StudentProfileComponents.Header />  
          <StudentProfileComponents.BasicInfo />
          <StudentProfileComponents.AboutMe />
          <StudentProfileComponents.Achievements />
          <StudentProfileComponents.Skills />
        </View>
      </ScrollView>
        
        
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 30,
    flex: 1,
    padding: 8,
    gap: 10,
    width: '100%',
    maxWidth: 800,
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fcefc7',
  },


  
});
