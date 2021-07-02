import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { RootStackParams } from '../navigation/Navigation'
import useMovieDetails from '../hooks/useMovieDetails'
import MovieDetails from '../components/MovieDetails'

const { height: screenHeight } = Dimensions.get('screen')

interface DetailScreenProps
  extends StackScreenProps<RootStackParams, 'Detail'> {}

const DetailScreen: FC<DetailScreenProps> = ({ route }) => {
  const movie = route.params
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  const { cast, isLoading, movieFull } = useMovieDetails(movie.id)

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{ uri }} style={styles.posterImage} />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator color="grey" size={35} style={{ marginTop: 20 }} />
      ) : (
        <MovieDetails cast={cast} movieFull={movieFull!} />
      )}
    </ScrollView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  imageContainer: {
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    elevation: 9,
    height: screenHeight * 0.7,
    shadowColor: '#000000',
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    width: '100%'
  },
  imageBorder: {
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    flex: 1,
    overflow: 'hidden'
  },
  posterImage: {
    flex: 1
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})
