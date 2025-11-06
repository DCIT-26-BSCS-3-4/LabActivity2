import {View, StyleSheet, Image} from 'react-native';


export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/studentpic.jpg')} resizeMode='cover' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,

  },
  logo: {
    height: 120,
    width: 120,
    borderColor: '#CAC4C8ff',
    borderWidth:5,
    borderRadius: 20
  }
});
