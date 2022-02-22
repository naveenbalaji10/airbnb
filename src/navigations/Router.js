import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import DestinationSearch from '../screens/DestinationSearch/index'
import GuestScreen from '../screens/Guests'
import HomeTabNavigator from './HomeTabNavigator'

const Stack=createNativeStackNavigator()
const Router = () => {
  return (
   <NavigationContainer>
       <Stack.Navigator>
           <Stack.Screen name='Home' component={HomeTabNavigator} options={{headerShown:false}}/>
          <Stack.Screen name='Destination Search' component={DestinationSearch} options={{title:'Search Your Destination'}}/>
          <Stack.Screen name='Guests' component={GuestScreen} options={{title:'How many people ?'}}/>
          {/* <Stack.Screen name='Destination Search' component={DestinationSearch} options={{title:'Search Your Destination'}}/>
          <Stack.Screen name='Destination Search' component={DestinationSearch} options={{title:'Search Your Destination'}}/>
          <Stack.Screen name='Destination Search' component={DestinationSearch} options={{title:'Search Your Destination'}}/> */}
       </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Router