    import ImageColors from 'react-native-image-colors'

    export const getImageColors = async (uri: string) =>{

        const colors = await ImageColors.getColors(uri, {})

        let primary
        let secondary

        switch (colors.platform) {
            case 'android':
              // android colors properties
              primary = colors.dominant
              secondary = colors.average
              break
            case 'ios':
              // iOS colors properties
              const primaryColor = colors.primary
              break
            default:
              throw new Error('Unexpected platform key')
          }

          return [ primary, secondary]

    }