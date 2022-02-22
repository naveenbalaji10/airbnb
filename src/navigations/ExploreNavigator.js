import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screens/Home'
import SearchResult from '../screens/SearchResults'
import SearchResultsTopBar from './SearchResultsTopBar'

const Stack=createNativeStackNavigator()

const ExploreNavigator = () => {
  return (
   <Stack.Navigator>
     <Stack.Screen name={"Home"} component={HomeScreen} options={{headerShown:false}} />
     <Stack.Screen name={"Search Results"} component={SearchResultsTopBar} options={{title:"Search your Destinations"}}/>
   </Stack.Navigator>
  )
}

export default ExploreNavigator