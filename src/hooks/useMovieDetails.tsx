import { useEffect } from 'react'
import { useState } from 'react'
import movieDB from '../api/movieDB'
import { MovieFull } from '../interfaces/movieInterface'
import { Cast, CreditsResponse } from '../interfaces/creditsInterface'

interface MovieDetails {
  cast: Cast[]
  isLoading: boolean
  movieFull?: MovieFull
}

const useMovieDetails = (movieId: number) => {
  const [state, setstate] = useState<MovieDetails>({
    cast: [],
    isLoading: true,
    movieFull: undefined
  })

  useEffect(() => {
    getMovieDetails()
  }, [])

  const getMovieDetails = async () => {
    const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`)
    const castPromise = await movieDB.get<CreditsResponse>(
      `/${movieId}/credits`
    )
    const [movieDetailsResponse, castPromiseResponse] = await Promise.all([
      movieDetailsPromise,
      castPromise
    ])

    setstate({
      cast: castPromiseResponse.data.cast,
      isLoading: false,
      movieFull: movieDetailsResponse.data
    })
  }

  return {
    ...state
  }
}

export default useMovieDetails
