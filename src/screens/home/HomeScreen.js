import React from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import avatar from "../../assets/images/Ellipse-1.jpg";
import search from "../../assets/images/search-svgrepo-com.png";
import Product from "../../components/common/Product";
import Category from "./Category";
import New from "./New";
import Feauted from "./Feauted";
import Hot from "./Hot";
import Header from "./Header";
import axios from "axios";
const HomeScreen = () => {
  const [data, setData] = React.useState([]);
  axios
    .get("https://fakestoreapi.com/products")
    .then(function (response) {
      setData(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  
  return (
    <ScrollView className="">
      <View className=" px-3 my-10 mb-52 bg-[#fdebeb]">
        {/* header */}
        <Header />
        {/* search */}
        <View className="relative w-full">
          <View className="flex absolute inset-y-0 left-0 items-center pl-2 justify-center z-10">
            <Image className="w-6 h-6" source={search} />
          </View>
          <TextInput
            type="text"
            id="voice-search"
            style={{ paddingLeft: 40 }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </View>
        {/* categories */}
        <View>
          <View className="flex mt-5 items-center flex-row justify-between">
            <Text className="text-xl font-bold">Categories</Text>
            <Text className="text-blue-600">See All</Text>
          </View>
          <Category />
        </View>
        {/* products */}
        <New data={data} />
        <Feauted data={data} />
        <Hot data={data} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
