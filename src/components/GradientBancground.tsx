import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from "react-native-linear-gradient";



interface Props {
    children: JSX.Element | JSX.Element[]
}

const GradientBancground = ({children}: Props) => {
  return (
    <View
        style={{
            flex:1
        }}
    >
        <LinearGradient
            colors={[ '#084F6A', '#75CEDB', 'white' ]}
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
        {children}
    </View>
  )
}



export default GradientBancground