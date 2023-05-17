import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.block}>It is super fun!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  block: {
    backgroundColor: 'black',
    color: 'white',
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 80,
  },
});
