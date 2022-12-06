import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react'
import { Dimensions, ScrollView, View, ActivityIndicator } from 'react-native';
import useMovies from '../hooks/useMovies';
import PosterMovie from '../components/PosterMovie';
import ImageColors from 'react-native-image-colors'

import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBancground from '../components/GradientBancground';
import { getImageColors } from '../helpers/getColores';
import { GradienteContext } from '../context/GradienteContext';

interface Props extends StackScreenProps<any, any>{
    
}

const {width: windowWitdh} = Dimensions.get('window')

const HomeScreen = ({ navigation }:Props) => {

    const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies()

    const { setMainColor } = useContext(GradienteContext)

    const getPosterColors = async (index: number) =>{
        const movie = nowPlaying![index]
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

        const [ primary = 'green', secondary = 'blue' ] = await getImageColors(uri)

        setMainColor({primary, secondary})
    }

    useEffect(() => {
        if( nowPlaying ){
            getPosterColors(0)
        }

    }, [nowPlaying])
    

    if( isLoading ){
        return(
            <View>
                <ActivityIndicator/>
            </View>
        )
    }


  return (

    <GradientBancground>

    <ScrollView>
    <View
    >
        <View
            style={{
                height: 420
            }}
        >
            {/* carousel posters */}
            <Carousel 

                data={nowPlaying!}
                renderItem={ ({item}:any )=> <PosterMovie movie={item}/>}
                sliderWidth={ windowWitdh }
                itemWidth={300}
                sliderHeight={300}
                itemHeight={250}
                onSnapToItem={ index => getPosterColors(index)}
            />
        </View>
        
        <HorizontalSlider title='Popular'   movies={popular!}/>

        <HorizontalSlider title='Top Rated' movies={topRated!}/>

        <HorizontalSlider title='Upcoming'  movies={upcoming!}/>

    </View>
    </ScrollView>

    </GradientBancground>
  )
}

export default HomeScreen