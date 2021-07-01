import { useEffect } from 'react'
import { useState } from 'react'
import movieDB from '../api/movieDB'
import { MovieDBResponse, Movie } from '../interfaces/movieInterface'

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([])
  const [popularMovies, setPopularMovies] = useState<Movie[]>([])

  const getMovies = async () => {
    const responseNowPlaing = await movieDB.get<MovieDBResponse>('/now_playing')
    const responsePopular = await movieDB.get<MovieDBResponse>('/popular')
    await movieDB.get<MovieDBResponse>('/top_rated')
    await movieDB.get<MovieDBResponse>('/upcoming')
    setNowPlayingMovies(responseNowPlaing.data.results)
    setPopularMovies(responsePopular.data.results)
    setIsLoading(false)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return {
    isLoading,
    nowPlayingMovies,
    popularMovies
  }
}

export default useMovies
