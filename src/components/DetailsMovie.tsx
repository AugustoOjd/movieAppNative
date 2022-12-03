import React from 'react'
import { FlatList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/moviesInterface';

import currencyFormatter  from "currency-formatter";
import CastItem from './CastItem';

interface Props {
    movieFull:   MovieFull,
    cast:       Cast[]
}

const DetailsMovie = ({ movieFull, cast}:Props) => {
  return (
    <View
        style={{
            
        }}
    >
        {/* Detalles */}

        <View
            style={{
                flexDirection: 'row',
                marginHorizontal: 20
            }}
        >
            <Icon 
                name='star-outline'
                color={'gray'}
                size={ 18 }
                style={{
                    marginRight: 10
                }}
            />

            <Text
                style={{
                    marginRight: 10
                }}
                >
                { movieFull.vote_average}
            </Text>

            <Text>
                - { movieFull.genres.map( g => g.name).join(', ') }
            </Text>
        </View>

            {/* Historia */}
        <View
            style={{
                marginHorizontal: 20
            }}
        >
            <Text
                style={{
                    color: 'black',
                    fontSize: 22,
                    marginTop: 10,
                    fontWeight: 'bold'
                }}
            >
                Historia
            </Text>
            <Text
                style={{
                    color: 'black',
                    fontSize: 14
                }}
            >
                { movieFull.overview}
            </Text>

        </View>

        <View
            style={{
                marginHorizontal: 20
            }}
        >
            <Text
                style={{
                    color: 'black',
                    fontSize: 22,
                    marginTop: 10,
                    fontWeight: 'bold'
                }}
            >
                Presupuesto
            </Text>

            <Text>
                { currencyFormatter.format(movieFull.budget, { code: 'USD' }) }
            </Text>
        </View>


        {/* Casting */}

        <View
            style={{
                marginTop: 10,
                marginBottom: 100,
                marginHorizontal: 20
            }}
            >
            <Text
                style={{
                    color: 'black',
                    fontSize: 22,
                    marginTop: 10,
                    fontWeight: 'bold'
                }}
            >
                Actores
            </Text>

            <FlatList
              data={ cast }
              keyExtractor={ (item) => item.id.toString()}
              renderItem={ ({item}) => <CastItem actor={ item }/>}
              horizontal={ true }
              showsHorizontalScrollIndicator={ false }

              style={{
                height: 80,
                marginTop: 10,
                borderRadius: 10,
                
              }}
            >

            </FlatList>
            
        </View>
    </View>
  )
}

export default DetailsMovie