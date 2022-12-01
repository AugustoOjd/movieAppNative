import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/moviesInterface';


interface Props {
    movie:      Movie,
    height?:    number,
    width?:     number
}



const PosterMovie = ({movie, height = 400, width = 260}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const navigation = useNavigation<any>()

  return (
    <TouchableOpacity
        onPress={()=> navigation.navigate('DetailScreen', movie)}
        activeOpacity={0.8}
        style={{
            width,
            height,
            marginTop: 10,
            marginHorizontal: 2,
            paddingBottom: 15,
            paddingHorizontal: 5
        }}
    >
        <View
            style={style.imageContainer}
        >
            <Image
                style={style.image} 
                source={{
                    uri
                }}
            />
        </View>

    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 15,
        
    },
    imageContainer: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        
        elevation: 12,
        }
})

export default PosterMovie