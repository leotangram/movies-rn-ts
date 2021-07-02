import React from 'react'
import { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

// interface GradientBackgroundProps {

// }

const GradientBackground: FC = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#084f6a', '#75cedb', '#ffffff']}
        end={{ x: 0.5, y: 0.7 }}
        start={{ x: 0.1, y: 0.1 }}
        style={{ ...StyleSheet.absoluteFillObject }}
      />
      {children}
    </View>
  )
}

export default GradientBackground
