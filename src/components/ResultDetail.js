import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function ResultDetail({result}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:result.image_url}}/>
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Yıldızlı Restoran</Text>
      <Text>{result.review_count} Değerlendirme </Text>

    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    marginLeft:15
  },
  image: {
    width: 120,
    height:250 ,//change the width what them property.
    borderRadius:8,
    marginBottom:5,
  },
  name:{


    fontFamily:'Alata',
    fontWeight:'bold'

  },



})