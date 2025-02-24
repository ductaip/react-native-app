import { View, Text, FlatList } from 'react-native'

const Trending = ({posts}: any) => {
  return (
    <FlatList
        data={posts}
        keyExtractor={(item) => item.$id} 
        renderItem={({item}) => (
            <Text className='text-3xl text-white'>
                {item.$id}
            </Text>
        )}
        horizontal
    />
  )
}

export default Trending