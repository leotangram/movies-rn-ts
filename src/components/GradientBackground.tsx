import React, { useEffect } from 'react'
import { useContext } from 'react'
import { FC } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { GradientContext } from '../context/GradientContext'
import useFade from '../hooks/useFade'

const GradientBackground: FC = ({ children }) => {
  const { colors, prevColors, setPrevMainColors } = useContext(GradientContext)
  const { fadeIn, fadeOut, opacity } = useFade()

  useEffect(() => {
    fadeIn(() => {
      setPrevMainColors(colors)
      fadeOut()
    })
  }, [colors])

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, '#ffffff']}
        end={{ x: 0.5, y: 0.7 }}
        start={{ x: 0.1, y: 0.1 }}
        style={{ ...StyleSheet.absoluteFillObject }}
      />
      <Animated.View style={{ ...StyleSheet.absoluteFillObject, opacity }}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, '#ffffff']}
          end={{ x: 0.5, y: 0.7 }}
          start={{ x: 0.1, y: 0.1 }}
          style={{ ...StyleSheet.absoluteFillObject }}
        />
      </Animated.View>
      {children}
    </View>
  )
}

export default GradientBackground
