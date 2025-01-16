import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>index</Text>
      <StatusBar style='auto' />
      <Link href='/profile' style={{color: 'orange'}}>Go to the profile</Link>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})