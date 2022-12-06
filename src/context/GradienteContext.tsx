import React, { createContext, useState } from "react";


interface ImageColors {
    primary:    string,
    secondary:  string
}

interface ContextProps {
    colors:     ImageColors,
    prevColors: ImageColors,
    setMainColor: (color: ImageColors) => void,
    setPrevMainColor: (color: ImageColors) => void

}

export const GradienteContext = createContext({} as ContextProps) 

export const GradienteProvider = ({children}: any) =>{

    const [colors, setColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    })

    const [prevColors, setPrevColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    })


    const setMainColor = (color: ImageColors) =>{
        setColors( color )
    }

    const setPrevMainColor = (color: ImageColors) =>{
        setPrevColors( color )
    }

    return(
        <GradienteContext.Provider value={{
            colors,
            prevColors,
            setMainColor,
            setPrevMainColor
        }}>
            {children}
        </GradienteContext.Provider>
    )
}