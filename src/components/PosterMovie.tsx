import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/moviesInterface';


interface Props {
    movie: Movie
}

const PosterMovie = ({movie}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <View
        style={{
            width: 300,
            height: 420,
        }}
    >
        {/* <Text>
            {movie.title}
        </Text> */}
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

    </View>
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
    	height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 10,
        }
})

export default PosterMovie