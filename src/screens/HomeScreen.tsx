import React from 'react'
import { ActivityIndicator, Dimensions, View } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import useMovies from '../hooks/useMovies'
import MoviePoster from '../components/MoviePoster'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const { width: windowWidth } = Dimensions.get('window')

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
      <View style={{ height: 440 }}>
        <Carousel
          data={premierMovies}
          itemWidth={300}
          renderItem={({ item }) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
        />
      </View>
    </View>
  )
}

export default HomeScreen
