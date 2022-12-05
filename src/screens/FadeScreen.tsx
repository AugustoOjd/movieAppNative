import { View, Text, Animated, Button } from 'react-native'
import React, { useRef } from 'react'
import useFade from '../hooks/useFade';

const FadeScreen = () => {


    const { fadeIn, fadeOut, opacity } = useFade()


  return (
    <View
        style={{
            flex:1,
            backgroundColor: 'orange',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <Button
            title='Fadeout'
            onPress={() => fadeOut()}
        />

        <Animated.View
            style={{
                backgroundColor: '#084F6A',
                width: 150,
                height: 150,
                borderColor: 'white',
                borderWidth: 10,
                marginVertical: 10,
                opacity: opacity
            }}

        >

        </Animated.View>

        <Button
            title='FadeIn'
            onPress={()=> fadeIn()}
        />
    </View>
  )
}

export default FadeScreen