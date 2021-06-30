import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import useMovies from '../hooks/useMovies'

const HomeScreen = () => {
  const { isLoading, premierMovies } = useMovies()

  if (isLoading) {
    return (
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    )
  }

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen
