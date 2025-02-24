import { View, Text, Image } from 'react-native'
import React from 'react'

import {images} from '../constants'
import CustomButton from './Button'
import { router } from 'expo-router'

const EmptyState = ({title, subtitle}: {title?: string, subtitle?: string}) => {
  return (
    <View className='justify-center items-center px-4'>
      <Image source={images.empty} className='w-[270px] h-[215px]' resizeMode='contain' />

      <Text className='text-xl text-center font-pop-sb text-white'>{title}</Text>
      <Text className='font-pop-m text-sm text-gray-100'>{subtitle}</Text>

        <CustomButton 
            title="Create video"
            handlePress={() => router.push('/create')}
            containerStyles='w-[80%] my-5'
            textStyles='font-pop-sb'
        />
    </View>
  )
}

export default EmptyState