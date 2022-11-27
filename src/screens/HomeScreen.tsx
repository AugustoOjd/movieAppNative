import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/Theme';

interface Props extends StackScreenProps<any, any>{
    
}

const HomeScreen = ({ navigation}:Props) => {

    // const { navigate } = useNavigation()

  return (
    <View
        style={ styles.globalView }
    >
        <Text>
            Home screen
        </Text>

        <Button
            title='ir a Details'
            onPress={ ()=> navigation.navigate( 'DetailScreen' )}
        />
    </View>
  )
}

export default HomeScreen