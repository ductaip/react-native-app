import { Client } from 'react-native-appwrite'

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.native.application',
    projectId: '67a08aab002334b25daa',
    databaseId: '67a08e51003e628f789f',
    userCollectionId: '67a08ebf001f71d73f57',
    videoCollectionId: '67a08f15002bac4465cb',
    storageId: '67a0932c0005c69781d0'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform) 
;