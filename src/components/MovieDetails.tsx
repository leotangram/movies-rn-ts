import React, { FC } from 'react'
import { Text, View } from 'react-native'
import currencyFormatter from 'currency-formatter'
import { MovieFull } from '../interfaces/movieInterface'
import { Cast } from '../interfaces/creditsInterface'
import Icon from 'react-native-vector-icons/Ionicons'
import CastItem from './CastItem'

interface MovieDetailsProps {
  cast: Cast[]
  movieFull: MovieFull
}

const MovieDetails: FC<MovieDetailsProps> = ({ cast, movieFull }) => {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Icon color="grey" name="star-outline" size={16} />
          <Text> {movieFull.vote_average}</Text>
          <Text style={{ marginLeft: 5 }}>
            - {movieFull.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          Historia
        </Text>
        <Text style={{ fontSize: 16 }}>{movieFull.overview}</Text>
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          Presupuesto
        </Text>
        <Text style={{ fontSize: 18 }}>
          {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
        </Text>
        <View style={{ marginBottom: 100, marginTop: 10 }}>
          <Text
            style={{
              fontSize: 23,
              fontWeight: 'bold',
              marginTop: 10
            }}
          >
            Actores
          </Text>
          <CastItem character={cast[0]} />
        </View>
      </View>
    </>
  )
}

export default MovieDetails
