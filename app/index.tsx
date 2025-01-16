import { Text, View } from 'react-native'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <View className='flex-1 items-center justify-center bg-gray-500'>
      <Text>index</Text>
      <StatusBar style='auto' />
      <Link href='/profile' className='text-xl text-white'>Go to the profile</Link>
    </View>
  )
}

export default App 