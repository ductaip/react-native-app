import { Text, View } from 'react-native'
import React from 'react'
import Button from '@/components/Button'
import { router, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <React.Fragment>
      <Stack>
        <Stack.Screen 
          name='sign-in'
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='sign-up'
          options={{
            headerShown: false
          }}
        />
      </Stack>
      <StatusBar backgroundColor="#161622" style="dark" />
    </React.Fragment>
  )
}

export default AuthLayout
