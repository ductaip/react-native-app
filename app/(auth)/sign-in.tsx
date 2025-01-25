import { Image, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import Form from '@/components/Form'
import CustomButton from '@/components/Button'
import { Link, router } from 'expo-router'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center min-h-[80vh] px-4 my-6'>
          <Image 
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-[35px]'
          />

          <Text className='text-2xl text-white text-semibold mt-10 font-pop-sb'>Login to App</Text>

          <Form 
            title='Email'
            placeholder='Email'
            value={form.email}
            handleChangeText={(e)=> setForm({...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <Form 
            title='Password'
            placeholder='Password'
            value={form.password}
            handleChangeText={(e)=> setForm({...form, password: e})}
            otherStyles="mt-7"
          />

          <CustomButton 
            title="Sign in"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-10"
          />

          <View className='pt-5 flex-row gap-2 justify-center'>
            <Text className='text-lg text-gray-100 font-pop-r'>Don't have account?</Text>
            <Link href='/sign-up' className='text-lg text-secondary'>Sign up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
