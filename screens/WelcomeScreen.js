import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import OB from "../assets/ob2.jpg"
import Icon from "react-native-vector-icons/AntDesign"
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View className='flex-1'>
      <ImageBackground source={OB} className="flex-1 h-screen" resizeMode='cover'/>
      <SafeAreaView className="flex-1 justify-end items-center pb-14">
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} className="border-[2px] w-[90px] h-[90px] rounded-full items-center justify-center border-[#e3e3e3] bg-[#1c1c1c]">
                <Icon name='arrowright' className='text-white' color='#e3e3e3' size={30}/>
            </TouchableOpacity>
            <View className="mt-5 items-center">
                <Text className="text-[18px] uppercase text-white font-[500] mb-2">AI Generated</Text>
                <Text className="text-[16px] uppercase text-white font-[500] ">4K WALLPAPER</Text>
            </View>
      </SafeAreaView>
    </View>
  )
}

export default WelcomeScreen