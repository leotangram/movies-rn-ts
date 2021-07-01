import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Movie } from '../interfaces/movieInterface'
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'

export type RootStackParams = {
  Home: undefined
  Detail: Movie
}

const Stack = createStackNavigator<RootStackParams>()

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#ffffff'
        }
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  )
}

export default Navigation
