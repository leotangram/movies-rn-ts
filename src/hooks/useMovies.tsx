import React, { useEffect } from 'react'
import { useState } from 'react'
import movieDB from '../api/movieDB'
import { MovieDBNowPlaying, Movie } from '../interfaces/movieInterface'

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [premierMovies, setPremierMovies] = useState<Movie[]>([])

  const getMovies = async () => {
    const response = await movieDB.get<MovieDBNowPlaying>('/now_playing')
    setPremierMovies(response.data.results)
    setIsLoading(false)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return {
    isLoading,
    premierMovies
  }
}

export default useMovies
