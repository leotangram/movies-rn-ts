import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

import { Movie } from '../interfaces/movieInterface'

interface MoviePoster {
  height?: number
  movie: Movie
  width?: number
}

const MoviePoster: FC<MoviePoster> = ({ height = 420, movie, width = 300 }) => {
  const { navigate } = useNavigation()
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate('Detail', movie)}
      style={{ ...styles.container, height, width }}
    >
      <Image source={{ uri }} style={styles.image} />
    </TouchableOpacity>
  )
}

export default MoviePoster

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    elevation: 9,
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
