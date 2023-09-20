import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import ExpoFastImage from 'expo-fast-image'
import { urlFor } from '../sanity'

const ImgGrid = ({ data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity  style={{ height: Math.round(Math.random() * 100 + 200)}} className="rounded-xl relative overflow-hidden m-1">
        <Image source={data.img} className="object-cover w-full h-full"/>
    </TouchableOpacity>
  )
}

export default ImgGrid