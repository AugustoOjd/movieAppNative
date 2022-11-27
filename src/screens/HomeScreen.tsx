import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Dimensions, Image, Text, View } from 'react-native';
import { styles } from '../theme/Theme';
import useMovies from '../hooks/useMovies';
import PosterMovie from '../components/PosterMovie';


import Carousel from 'react-native-snap-carousel';

interface Props extends StackScreenProps<any, any>{
    
}

const {width: windowWitdh} = Dimensions.get('window')

const HomeScreen = ({ navigation}:Props) => {

    const {cartelera, isLoading} = useMovies()

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
    <View
        style={{
            marginTop: 10
        }}
    >
        {/* <PosterMovie movie={cartelera[0]}/> */}

        <View
            style={{
                height: 500
            }}
        >
            <Carousel 

                data={cartelera}
                renderItem={ ({item}:any )=> <PosterMovie movie={item}/>}
                sliderWidth={ windowWitdh }
                itemWidth={300}
                sliderHeight={350}
                itemHeight={300}
            />
        </View>
        {/* <Button
            title='ir a Details'
            onPress={ ()=> navigation.navigate( 'DetailScreen' )}
        /> */}
    </View>
  )
}

export default HomeScreen