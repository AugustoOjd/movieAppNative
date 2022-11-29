import React from 'react'
import { Movie } from '../interfaces/moviesInterface';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PosterMovie from './PosterMovie';

interface Props {
    title?: string,
    movies: Movie[]
}

const HorizontalSlider = ({title, movies}:Props) => {
  return (
    <View
    style={{
        // backgroundColor: 'red',
        height: 300,
        
    }}
    >
        <Text
            style={{
                fontSize: 30,
                fontWeight: 'bold'
            }}
            >
            {title}
        </Text>
        <FlatList
            data={movies}
            renderItem={({item}):any => (<PosterMovie movie={item} width={150} height={200}/>)}
            keyExtractor={ (item)=> item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default HorizontalSlider