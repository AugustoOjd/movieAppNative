import React from 'react'
import { Image, Text, View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { useMovieDetails } from '../hooks/useMovieDetails';
import DetailsMovie from '../components/DetailsMovie';

const screenHeight = Dimensions.get('screen').height

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{

}

const DetailScreen = ({route}: Props) => {

  const movie = route.params
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  const { isLoading, cast, movieFull} = useMovieDetails( movie.id)


  return (

    <ScrollView>
      <View
        style={ styles.viewContainer}
      >
      <Image
          style={ styles.imageContainer}
          source={{
              uri
          }}
            />
      </View>
      <View
        style={ styles.titlesContainer}
      >

        <Text
          style={ styles.originTitle}
        > 
        {movie.original_title}
        </Text>
        <Text
          style={ styles.title}
        > 
        {movie.title}
        </Text>

      </View>

      <View>

        {
            isLoading
            ?
            <ActivityIndicator
            size={35}
            style={{
              marginTop: 20
            }}
            />
            :
            <DetailsMovie movieFull={ movieFull!} cast={ cast }/>
        }
          
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    width: '100%',
    height: screenHeight * 0.6,
    // backgroundColor: 'red'
  },

  imageContainer: {
    flex: 1,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    
    elevation: 12,
    resizeMode: 'contain'
  },

  titlesContainer: {
    padding: 10,
    // backgroundColor: 'red'
  },

  originTitle: {
    fontSize: 15,
    opacity: 0.8
  },
  
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black'
  }

})

export default DetailScreen