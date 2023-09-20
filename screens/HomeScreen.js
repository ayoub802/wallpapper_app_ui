import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome5";
import ImgGrid from "../components/ImgGrid";
import { walpappers } from "../constant/data";
import MasonryList from "@react-native-seoul/masonry-list";
import { isLoading } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { getCategory } from "../sanity";

const HomeScreen = ({ navigation }) => {
  const [imageGrid, setImageGrid] = useState([]);

  useEffect(() => {
    getCategory()
      .then((data) => {
        setImageGrid(data);
    })
      .catch((err) => alert(err));
  }, []);
  return (
    <SafeAreaView className="flex-1 px-5">
      <View className="border-b-[1.5px] border-b-[#e3e3e3]">
        <View className="items-center py-4 justify-between flex-row">
          <TouchableOpacity>
            <Icon name="bell" size={25} />
          </TouchableOpacity>
          <Text className="text-[20px] uppercase ">Wallkit</Text>
          <TouchableOpacity>
            <Icon name="heart" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mt-5">
            {
                imageGrid ? (
                    <MasonryList 
                      data={walpappers}
                      keyExtractor={(item) => item.id}
                      renderItem={({item}) => <ImgGrid data={item}/>}
                      showsVerticalScrollIndicator={false}
                      numColumns={2}
                    />
                ) : (
                    <>
                     <ActivityIndicator color={"#ff0000"} size={"large"} />
                    </>
                )
            }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
