import { Image, Text, View } from 'react-native'
import {Tabs, Redirect } from 'expo-router'
import { Ionicons } from '@expo/vector-icons' 


const TabsLayout = () => {
  return (
    <Tabs>
            <Tabs.Screen
            name="home"
            options={{
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons
                    name={focused ? 'home' : 'home-outline'}
                    size={size}
                    color={color}
                    />
                ),
                tabBarActiveTintColor: '#007AFF', // Màu icon khi được chọn
                tabBarInactiveTintColor: '#8e8e93', // Màu icon khi không được chọn
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons
                    name={focused ? 'person' : 'person-outline'}
                    size={size}
                    color={color}
                    />
                ),
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: '#8e8e93',
            }}
        />
        <Tabs.Screen
            name="bookmark"
            options={{
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons
                    name={focused ? 'bookmark' : 'bookmark-outline'}
                    size={size}
                    color={color}
                    />
                ),
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: '#8e8e93',
            }}
        />
        <Tabs.Screen
            name="create"
            options={{
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons
                    name={focused ? 'add-circle' : 'add-circle-outline'}
                    size={size}
                    color={color}
                    />
                ),
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: '#8e8e93',
            }}
        />
    </Tabs>
  )
}

export default TabsLayout
