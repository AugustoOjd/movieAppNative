
import React, { useEffect, useState } from 'react'
import apiMovie from '../api/apiMovie'
import { Movie, MovieDBNowPlaying } from '../interfaces/moviesInterface'

const useMovies = () => {
    
    const [isLoading, setIsLoading] = useState(true)
    const [cartelera, setCartelera] = useState<Movie[]>([])

    const getMovie = async () => {
        const resp = await apiMovie.get<MovieDBNowPlaying>('/now_playing')

        setCartelera( resp.data.results)

        setIsLoading(false)
    }

    useEffect(() => {
        // now_playing
        getMovie()

    }, [])

  return {
    cartelera,
    isLoading
  }
}

export default useMovies