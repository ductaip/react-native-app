import {  FlatList, Image, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import SearchInput from '@/components/SearchInput'
import Trending from '@/components/Trending'
import EmptyState from '@/components/EmptyState'

const Home = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        data={[{$id: 1}, {$id: 2}, {$id: 3}]}
        keyExtractor={(item) => item.$id.toString()}
        renderItem={({item}) => (
          <Text className='text-3xl text-white'>{item.$id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className='my-6 px-4 space-y-6'>
            <View className='justify-between items-start flex-row mb-6'>
              <View>
                <Text className='font-pop-m text-sm text-gray-100'>
                  Welcome Back
                </Text>
                <Text className='text-2xl font-pop-sb text-white'>ReactNative Application</Text>
              </View>

              <View className='mt-1.5'>
                <Image source={images.logoSmall}
                  className='w-9 h-10'
                  resizeMode='contain'
                 />
              </View>
            </View>

            <SearchInput placeholder='Search for a video topic'/>

            <View className='w-full flex-1 pt-5 pb-8'>
              <Text className='text-gray-100 text-lg font-pop-r mb-3'>Latest Vides</Text>

              <Trending posts={[{$id: 1}, {$id: 2}, {$id: 3}]} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="Be the first one to upload a video" 
          />
        )}
      />
    </SafeAreaView>
  )
}

export default Home
