import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import Routes from './src/routes/Routes'

export default function App() {
  return <SafeAreaView style={styles.container}>
    <StatusBar style="light" backgroundColor="#80cd76" />
    <Routes />
  </SafeAreaView>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});