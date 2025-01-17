import { Text, View } from 'react-native'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <View className='flex-1 items-center justify-center bg-gray-500'>
      <Text className='text-3xl font-pop-blk'>index....</Text>
      <StatusBar style='auto' />
      <Link href='/home' className='text-xl text-white'>Go to the Home</Link>
    </View>
  )
}

export default App  