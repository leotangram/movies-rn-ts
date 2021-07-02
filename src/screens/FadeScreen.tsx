import React, { useRef } from 'react'
import { Animated, Button, View } from 'react-native'

const FadeScreen = () => {
  const opacity = useRef(new Animated.Value(0)).current

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

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
    </View>
  )
}

export default FadeScreen
