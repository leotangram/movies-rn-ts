import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import useMovies from '../hooks/useMovies'
import MoviePoster from '../components/MoviePoster'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import HorizontalSlider from '../components/HorizontalSlider'
import GradientBackground from '../components/GradientBackground'
import { getImageColors } from '../helpers/getColors'
import { GradientContext } from '../context/GradientContext'

const { width: windowWidth } = Dimensions.get('window')

const HomeScreen = () => {
  const { setMainColors } = useContext(GradientContext)

  const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies()
  const { top } = useSafeAreaInsets()

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0)
    }
  }, [nowPlaying])

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index]
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri)
    setMainColors({
      primary,
      secondary
    })
  }

  if (isLoading) {
    return (
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    )
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: top + 20 }}>
          <View style={{ height: 440 }}>
            <Carousel
              data={nowPlaying}
              inactiveSlideOpacity={0.9}
              itemWidth={300}
              onSnapToItem={index => getPosterColors(index)}
              renderItem={({ item }) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
            />
          </View>
          <HorizontalSlider title="Popular" movies={popular} />
          <HorizontalSlider title="Top rated" movies={topRated} />
          <HorizontalSlider title="Upcoming" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  )
}

export default HomeScreen
