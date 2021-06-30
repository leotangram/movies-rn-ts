import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import useMovies from '../hooks/useMovies'
import MoviePoster from '../components/MoviePoster'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const HomeScreen = () => {
  const { isLoading, premierMovies } = useMovies()
  const { top } = useSafeAreaInsets()

  if (isLoading) {
    return (
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    )
  }

  return (
    <View style={{ marginTop: top + 20 }}>
      <MoviePoster movie={premierMovies[0]} />
    </View>
  )
}

export default HomeScreen
