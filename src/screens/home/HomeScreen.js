import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import avatar from "../../assets/images/Ellipse-1.jpg";
import search from "../../assets/images/search-svgrepo-com.png";
import Product from "../../components/common/Product";
import Category from "./Category";
import New from "./New";
import Feauted from "./Feauted";
import Hot from "./Hot";
import Header from "./Header";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import ProductContainer from "../../components/home/ProductContainer";

const HomeScreen = () => {
  const [data, setData] = React.useState({
    newProduct: [],
    smartphone: [],
    laptops: [],
    shoes: [],
    whatch: [],
    groceries: [],
    home:[]
  });
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();
  console.log(searchQuery);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2, response3, response4, response5,response6,response7] =
          await Promise.all([
            axios.get("https://dummyjson.com/products/category/skincare"),
            axios.get("https://dummyjson.com/products/category/mens-watches"),
            axios.get("https://dummyjson.com/products/category/fragrances"),
            axios.get("https://dummyjson.com/products/category/womens-shoes"),
            axios.get("https://dummyjson.com/products/category/womens-watches"),
            axios.get("https://dummyjson.com/products/category/groceries"),
            axios.get("https://dummyjson.com/products/category/home-decoration"),
          ]);

        setData({
          newProduct: response1.data.products,
          smartphone: response2.data.products,
          laptops: response3.data.products,
          shoes: response4.data.products,
          whatch: response5.data.products,
          groceries: response6.data.products,
          home: response7.data.products
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const handlePressSearch = () => {
    navigation.navigate("Search", { q: searchQuery });
  };
  const handleBlurSearch = () => {
    navigation.navigate("Search", { q: searchQuery });
  };
  return (
    <ScrollView className="">
      <View className=" px-3 my-10 mb-16 b">
        {/* header */}
        <Header />
        {/* search */}
        <View className="relative w-full">
          <TouchableOpacity
            onPress={handlePressSearch}
            className="flex absolute inset-y-0 left-0 items-center pl-2 justify-center z-10"
          >
            <Image className="w-6 h-6" source={search} />
          </TouchableOpacity>
          <TextInput
            type="text"
            id="voice-search"
            onBlur={handleBlurSearch}
            onChangeText={(text) => setSearchQuery(text)}
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
        <ProductContainer label={"Skincare"} data={data.newProduct} />
        <ProductContainer label={"Fragrances"} data={data.laptops} />
        <ProductContainer label={"Mens watches"} data={data.smartphone} />
        <ProductContainer label={"shoes"} data={data.shoes} />
        <ProductContainer label={"Smart watch"} data={data.whatch} />
        <ProductContainer label={"Groceries"} data={data.groceries} />
        <ProductContainer label={"Home decoration"} data={data.home} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
