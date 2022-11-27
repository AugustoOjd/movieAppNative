import 'react-native-gesture-handler';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, Text, View } from 'react-native'
import Navigation from './src/navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
        <Navigation/>
    </NavigationContainer>
  )
}

export default App