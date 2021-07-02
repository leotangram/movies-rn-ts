import React from 'react'
import { useContext } from 'react'
import { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { GradientContext } from '../context/GradientContext'

const GradientBackground: FC = ({ children }) => {
  const { colors } = useContext(GradientContext)

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[colors.primary, colors.secondary, '#ffffff']}
        end={{ x: 0.5, y: 0.7 }}
        start={{ x: 0.1, y: 0.1 }}
        style={{ ...StyleSheet.absoluteFillObject }}
      />
      {children}
    </View>
  )
}

export default GradientBackground
