import React from 'react'
import { Image, Text, View } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    actor: Cast
}

const CastItem = ({ actor }:Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

  return (
    <View
        style={{
            height: 70,
            flexDirection: 'row',
            backgroundColor: 'white',
            marginRight: 12,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            
            elevation: 5,
        }}
    >

        {
            actor.profile_path && (
                <Image 
                source={{
                    uri
                }}
                style={{
                    width: 70,
                    height: 70,
                    borderRadius: 10,
                    marginRight: 8
                }}
            />
            )
        }

        <View
            style={{
                marginRight: 10,
            }}
        >
            <Text
                style={{
                    marginTop: 6,
                    color: 'black',
                    fontWeight: 'bold'
                }}
                >
                {actor.name}
            </Text>
            <Text
                style={{
                    opacity: 0.8,
                    marginTop: 2
                }}
                >
                {actor.character}
            </Text>
        </View>

    </View>
  )
}

export default CastItem