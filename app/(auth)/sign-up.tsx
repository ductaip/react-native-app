import { Alert, Image, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import Form from '@/components/Form'
import CustomButton from '@/components/Button'
import { Link, router } from 'expo-router'
import { createUser } from '@/lib/appwrite'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields')
    }
    
    try {
      const result = await createUser(form.email, form.username, form.password);
    } catch(error: any) {
      Alert.alert('Error', error.message)
    }  
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center min-h-[80vh] px-4 my-6'>
          <Image 
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-[35px]'
          />

          <Text className='text-2xl text-white text-semibold mt-10 font-pop-sb'>Signup to App</Text>

          <Form 
            title='Username'
            placeholder='Username'
            value={form.username}
            handleChangeText={(e)=> setForm({...form, username: e})}
            otherStyles="mt-10"
          />
          <Form 
            title='Email'
            placeholder='Email'
            value={form.email}
            handleChangeText={(e)=> setForm({...form, email: e})}
            otherStyles="mt-10"
            keyboardType="email-address"
          />
          <Form 
            title='Password'
            placeholder='Password'
            value={form.password}
            handleChangeText={(e)=> setForm({...form, password: e})}
            otherStyles="mt-10"
          />

          <CustomButton 
            title="Sign up"
            handlePress={submit}
            containerStyles="w-full mt-10"
          />

          <View className='pt-5 flex-row gap-2 justify-center'>
            <Text className='text-lg text-gray-100 font-pop-r'>Have an account already?</Text>
            <Link href='/sign-in' className='text-lg text-secondary'>Sign in</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
