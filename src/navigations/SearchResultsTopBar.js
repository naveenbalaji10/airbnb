import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import SearchResult from '../screens/SearchResults'


const Tab =createMaterialTopTabNavigator()

const SearchResultsTopBar = () => {
  return (
     <Tab.Navigator>
         <Tab.Screen name='List' component={SearchResult} options={{tabBarActiveTintColor:'#f15454',tabBarIndicatorStyle:{backgroundColor:'#f15454'}}}/>
         <Tab.Screen name='Map' component={SearchResult}  options={{tabBarActiveTintColor:'#f15454',tabBarIndicatorStyle:{backgroundColor:'#f15454'}}}/>
     </Tab.Navigator>
  )
}


export default SearchResultsTopBar