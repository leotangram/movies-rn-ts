import React from 'react'
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import useMovies from '../hooks/useMovies'
import MoviePoster from '../components/MoviePoster'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import HorizontalSlider from '../components/HorizontalSlider'

const { width: windowWidth } = Dimensions.get('window')

const HomeScreen = () => {
  const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies()
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
            data={nowPlaying}
            inactiveSlideOpacity={0.9}
            itemWidth={300}
            renderItem={({ item }) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
          />
        </View>
        <HorizontalSlider title="Popular" movies={popular} />
        <HorizontalSlider title="Top rated" movies={topRated} />
        <HorizontalSlider title="Upcoming" movies={upcoming} />
      </View>
    </ScrollView>
  )
}

export default HomeScreen
