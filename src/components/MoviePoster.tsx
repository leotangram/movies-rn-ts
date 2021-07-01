import React, { FC } from 'react'
import { Image, StyleSheet, View } from 'react-native'

import { Movie } from '../interfaces/movieInterface'

interface MoviePoster {
  height?: number
  movie: Movie
  width?: number
}

const MoviePoster: FC<MoviePoster> = ({ height = 420, movie, width = 300 }) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  return (
    <View style={{ ...styles.container, height, width }}>
      <Image source={{ uri }} style={styles.image} />
    </View>
  )
}

export default MoviePoster

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    elevation: 10,
    marginHorizontal: 8,
    shadowColor: '#000000',
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowOpacity: 0.24,
    shadowRadius: 7
  },
  image: {
    borderRadius: 18,
    flex: 1
  }
})
