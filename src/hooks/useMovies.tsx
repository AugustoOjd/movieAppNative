
import React, { useEffect, useState } from 'react'
import apiMovie from '../api/apiMovie'
import { Movie, MovieResponse } from '../interfaces/moviesInterface'


interface MovieState {
  nowPlaying: Movie[],
  popular:    Movie[],
  topRated:   Movie[],
  upcoming:   Movie[]
}

const useMovies = () => {
    
    const [isLoading, setIsLoading] = useState(true)
    const [moviesState, setMoviesState] = useState<MovieState>()

    const getMovie = async () => {
        const nowPlayingPromise   = await apiMovie.get<MovieResponse>('/now_playing')
        const popularPromise      = await apiMovie.get<MovieResponse>('/popular')
        const topRatedPromise     = await apiMovie.get<MovieResponse>('/top_rated')
        const upcomingPromise     = await apiMovie.get<MovieResponse>('/upcoming')

        const response = await Promise.all([
          nowPlayingPromise,
          popularPromise,   
          topRatedPromise,  
          upcomingPromise  
        ])

        setMoviesState({
          nowPlaying: response[0].data.results,
          popular:    response[1].data.results,
          topRated:   response[2].data.results,
          upcoming:   response[3].data.results,
        })

        setIsLoading(false)
    }

    useEffect(() => {
        // now_playing
        getMovie()

    }, [])

  return {
    ...moviesState,
    isLoading
  }
}

export default useMovies