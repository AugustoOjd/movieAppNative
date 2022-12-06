import 'react-native-gesture-handler';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { GradienteProvider } from './src/context/GradienteContext';


const AppState = ({children}:any)=>{

  return(
    <GradienteProvider>
      {children}
    </GradienteProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <FadeScreen/> */}
        <Navigation/>
      </AppState>
    </NavigationContainer>
  )
}

export default App