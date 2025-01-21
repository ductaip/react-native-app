import { Image, Text, View } from 'react-native'
import {Tabs, Redirect } from 'expo-router'
import { Ionicons } from '@expo/vector-icons' 


const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#FFA001',
            tabBarInactiveTintColor: '#cdcde0',
            tabBarStyle: {
                backgroundColor: '#161622',
                borderTopWidth: 1,
                borderTopColor: '232533',
                height: 84,
            }
        }}
    >
        <Tabs.Screen
            name="home"
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons
                        name={focused ? 'home' : 'home-outline'}
                        size={size}
                        color={color}
                    />
                ),
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons
                        name={focused ? 'person' : 'person-outline'}
                        size={size}
                        color={color}
                    />
                ) 
            }}
        />
        <Tabs.Screen
            name="bookmark"
            options={{
                title: 'Bookmark',
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons
                        name={focused ? 'bookmark' : 'bookmark-outline'}
                        size={size}
                        color={color}
                    />
                ) 
            }}
        />
        <Tabs.Screen
            name="create"
            options={{
                title: 'Create',
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons
                        name={focused ? 'add-circle' : 'add-circle-outline'}
                        size={size}
                        color={color}
                    />
                ) 
            }}
        />
    </Tabs>
  )
}

export default TabsLayout
