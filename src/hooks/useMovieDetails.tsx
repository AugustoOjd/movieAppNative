

import React, {useEffect, useState} from 'react'
import apiMovie from '../api/apiMovie'
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/moviesInterface'


interface MovieDetails {
    isLoading: boolean,
    movieFull?: MovieFull,
    cast: Cast[],
}

export const useMovieDetails = ( movieId: number) => {

    const [movieDetail, setmovieDetail] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    })


    const getMovieDetails = async () => {

        const movieDetailsPromise   = await apiMovie.get<MovieFull>(`/${ movieId }`)
        const movieCastPromise      = await apiMovie.get<CreditsResponse>(`/${ movieId}/credits`)

        const [ movieDetailResp, castPromiseResp ] = await Promise.all([ movieDetailsPromise, movieCastPromise])

        setmovieDetail({
            isLoading: false,
            movieFull: movieDetailResp.data,
            cast: castPromiseResp.data.cast
        })

    }

    useEffect(() => {

        getMovieDetails()
    }, [])

    return {
        ...movieDetail
    }
    
}
