import React, { FC } from 'react'
import { Image, StyleSheet, View } from 'react-native'

import { Movie } from '../interfaces/movieInterface'

interface MoviePoster {
  movie: Movie
}

const MoviePoster: FC<MoviePoster> = ({ movie }) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} />
    </View>
  )
}

export default MoviePoster

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    elevation: 10,
    height: 420,
    shadowColor: '#000000',
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    width: 300
  },
  image: {
    borderRadius: 18,
    flex: 1
  }
})
