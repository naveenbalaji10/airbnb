import { View,  FlatList} from 'react-native'
import React from 'react'

import feed from '../../../assets/data/feed'
import Post from '../../components/Post'

const SearchResult = () => {
  return (
    <View>
     <FlatList data={feed} renderItem={({item})=> <Post post={item}/>}/>
    </View>
  )
}

export default SearchResult