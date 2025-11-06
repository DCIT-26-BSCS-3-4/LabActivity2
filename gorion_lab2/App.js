import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import StudentProfile from './Profile';

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.wrapper}>
          <StudentProfile />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f7f3ee' },
  scroll: { padding: 16, alignItems: 'center' },
  wrapper: { width: '100%', maxWidth: 700 },
});