import React from 'react'
import { Animated, Button, View } from 'react-native'
import useFade from '../hooks/useFade'

const FadeScreen = () => {
  const { fadeIn, fadeOut, opacity } = useFade()

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: 'grey',
        flex: 1,
        justifyContent: 'center'
      }}
    >
      <Animated.View
        style={{
          backgroundColor: '#084f6a',
          borderColor: '#ffffff',
          borderWidth: 10,
          height: 150,
          marginBottom: 10,
          opacity,
          width: 150
        }}
      />
      <Button onPress={fadeIn} title="fadeIn" />
      <Button onPress={fadeOut} title="fadeOut" />
    </View>
  )
}

export default FadeScreen
