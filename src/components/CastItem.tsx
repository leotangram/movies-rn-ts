import React, { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Cast } from '../interfaces/creditsInterface'

interface CastItemProps {
  character: Cast
}

const CastItem: FC<CastItemProps> = ({ character }) => {
  const uri = `https://image.tmdb.org/t/p/w500/${character.profile_path}`

  return (
    <View style={styles.container}>
      <Image
        source={{ uri }}
        style={{ borderRadius: 10, height: 50, width: 50 }}
      />
      <View style={styles.characterInfo}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          {character.name}
        </Text>
        <Text style={{ fontSize: 16, opacity: 0.7 }}>
          {character.character}
        </Text>
      </View>
    </View>
  )
}

export default CastItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9
  },
  characterInfo: {
    marginLeft: 10
  }
})
