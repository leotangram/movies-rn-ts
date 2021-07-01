import React from 'react'
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  View
} from 'react-native'
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
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        <View style={{ height: 440 }}>
          <Carousel
            data={premierMovies}
            itemWidth={300}
            renderItem={({ item }) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
          />
        </View>
        <View style={{ backgroundColor: 'red', height: 260 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>En cine</Text>
          <FlatList
            data={premierMovies}
            horizontal
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <MoviePoster height={200} movie={item} width={140} />
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeScreen
