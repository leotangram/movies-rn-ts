import { useEffect } from 'react'
import { useState } from 'react'
import movieDB from '../api/movieDB'
import { MovieFull } from '../interfaces/movieInterface'

interface MovieDetails {
  cast: any[]
  isLoading: boolean
  movieFull: MovieFull
}

const useMovieDetails = (movieId: number) => {
  const [state, setstate] = useState<MovieDetails>()

  useEffect(() => {
    getMovieDetails()
  }, [])

  const getMovieDetails = async () => {
    const response = await movieDB.get<MovieFull>(`/${movieId}`)
    console.log(response.data.overview)
  }

  return {
    state
  }
}

export default useMovieDetails
