import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/AntDesign";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import moment from "moment";
import { getMainIamgeById, urlFor } from "../sanity";

// const downloadFromAPI = async ({ imgApi }) => {
//     let date = moment().format('YYYYMMDDhhmmss');
//     let fileUri = FileSystem.documentDirectory + `${date}.jpg`;
//     const localhost = Platform.OS === "android" ? "192.168.11.119" : "127.0.0.1";

//     try {
//         const result = await FileSystem.downloadAsync(
//             `https://images.pexels.com/photos/10117504/pexels-photo-10117504.jpeg`,
//             fileUri
//           );
//           saveFile(result.uri);
//         } catch (err) {
//         console.log("FS Err: ", err);
//         ToastAndroid.show('Failed to download image', ToastAndroid.SHORT);
//       }
//   };

//   const saveFile = async (fileUri) => {
//     const { status } = await MediaLibrary.requestPermissionsAsync();
//     if (status === 'granted') {
//       try {
//         const asset = await MediaLibrary.createAssetAsync(fileUri);
//         const album = await MediaLibrary.getAlbumAsync('Download');
//         if (album == null) {
//           await MediaLibrary.createAlbumAsync('Download', asset, false);
//           ToastAndroid.show('Image downloading...', ToastAndroid.SHORT);
//         } else {
//           await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
//           ToastAndroid.show('Image saved', ToastAndroid.SHORT);
//         }
//       } catch (err) {
//         console.log('Save err: ', err);
//         ToastAndroid.show('Failed to save image', ToastAndroid.SHORT);
//       }
//     } else {
//       ToastAndroid.show('Please allow permissions to download', ToastAndroid.SHORT);
//     }
//   };

const DetaileScreen = ({ navigation }) => {

  const [loading, setLaoding] = useState(false);
  const [item, setItems] = useState(null);

  // useEffect(() => {
  //   getMainIamgeById(id.data._id)
  //     .then((data) => {
  //       setItems(data);
  //     })
  //     .catch((err) => alert(err));
  //   }, []);

  return (
    <View className="flex-1">
      <StatusBar style="light" />
      {/* <ImageBackground className="flex-1 h-screen" source={{ uri: urlFor(data.image).url()}} resizeMode="cover"/>
            <TouchableOpacity onPress={() => navigation.goBack()} className="absolute left-5 top-14 ">
                <View className="w-10 h-10 rounded-full bg-[#1c1c1c] items-center justify-center">
                    <Icon name='arrowleft' color="#fff" size={20}/>
                </View>
            </TouchableOpacity> */}

      {/* <SafeAreaView className="flex-1 justify-end items-center pb-[50px]">
                <TouchableOpacity onPress={() => downloadFromAPI(item.img)} >
                    <View className="w-12 h-12 rounded-full bg-[#fff] items-center justify-center">
                        <Icon name='download' color="#1c1c1c" size={20}/>
                    </View>
                </TouchableOpacity>
            </SafeAreaView> */}
    </View>
  );
};

export default DetaileScreen;
