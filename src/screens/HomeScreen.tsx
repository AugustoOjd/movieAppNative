import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Dimensions, FlatList, Image, ScrollView, Text, View } from 'react-native';
import { styles } from '../theme/Theme';
import useMovies from '../hooks/useMovies';
import PosterMovie from '../components/PosterMovie';


import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';

interface Props extends StackScreenProps<any, any>{
    
}

const {width: windowWitdh} = Dimensions.get('window')

const HomeScreen = ({ navigation }:Props) => {

    const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies()

    if( isLoading ){
        return(
            <View>
                <Text>
                    ...Loading
                </Text>
            </View>
        )
    }


  return (

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
            />
        </View>

        {/* Peliculas populares */}
        {/* <View
            style={{
                backgroundColor: 'red',
                height: 300,
                
            }}
        >   
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: 'bold'
                }}
            >
                Populares
            </Text>
            <FlatList 
                data={cartelera}
                renderItem={ ({item}:any)=> (
                    <PosterMovie movie={item} width={150} height={200}/> 
                    )
                }
                keyExtractor={ (item)=> item.id.toString() }
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />

        </View> */}
        
        <HorizontalSlider title='Popular'   movies={popular!}/>

        <HorizontalSlider title='Top Rated' movies={topRated!}/>

        <HorizontalSlider title='Upcoming'  movies={upcoming!}/>



        {/* <Button
            title='ir a Details'
            onPress={ ()=> navigation.navigate( 'DetailScreen' )}
        /> */}
    </View>
    </ScrollView>
  )
}

export default HomeScreen