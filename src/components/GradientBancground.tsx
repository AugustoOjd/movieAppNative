import { View, Text, StyleSheet, Animated } from 'react-native'
import React, { useContext, useEffect } from 'react'
import LinearGradient from "react-native-linear-gradient";
import { GradienteContext } from '../context/GradienteContext';
import useFade from '../hooks/useFade';



interface Props {
    children: JSX.Element | JSX.Element[]
}

const GradientBancground = ({children}: Props) => {

    const { colors, prevColors, setPrevMainColor } = useContext(GradienteContext)

    const { opacity, fadeIn, fadeOut} = useFade()

    useEffect(() => {
        fadeIn( ()=> {
            setPrevMainColor( colors )
            fadeOut(0)
        })
    }, [colors])
    

  return (
    <View
        style={{
            flex:1
        }}
    >
        <LinearGradient
            colors={[ prevColors.primary, prevColors.secondary, 'white' ]}
            style={{
                ...StyleSheet.absoluteFillObject
            }}
            start={{
                x: 0.1, y: 0.1
            }}
            end={{
                x: 0.7, y: 0.7
            }}
        />

        <Animated.View
            style={{
                ...StyleSheet.absoluteFillObject, 
                opacity
            }}
        >
        <LinearGradient
            colors={[ colors.primary, colors.secondary, 'white' ]}
            style={{
                ...StyleSheet.absoluteFillObject
            }}
            start={{
                x: 0.1, y: 0.1
            }}
            end={{
                x: 0.7, y: 0.7
            }}
        />
        </Animated.View>
        {children}
    </View>
  )
}



export default GradientBancground