import React, { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Text, View } from 'react-native'
import { RootStackParams } from '../navigation/Navigation'

interface DetailScreenProps
  extends StackScreenProps<RootStackParams, 'Detail'> {}

const DetailScreen: FC<DetailScreenProps> = ({ route }) => {
  const movie = route.params

  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  )
}

export default DetailScreen
