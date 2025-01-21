import { Image, ScrollView, Text, View } from 'react-native'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants'

const App = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className='w-full justify-center items-center h-full px-4'>
          <Image className='w-[130px] h-[100px]' source={images.logo}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App  