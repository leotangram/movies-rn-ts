import React, { FC } from 'react'
import { FlatList, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import MoviePoster from './MoviePoster'

interface HorizontalSliderProps {
  movies: Movie[]
  title?: string
}

const HorizontalSlider: FC<HorizontalSliderProps> = ({ title, movies }) => {
  return (
    <View style={{ height: !!title ? 260 : 220 }}>
      {title && (
        <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>
          {title}
        </Text>
      )}
      <FlatList
        data={movies}
        horizontal
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <MoviePoster height={200} movie={item} width={140} />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default HorizontalSlider
