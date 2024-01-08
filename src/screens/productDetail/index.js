import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"; // Để sử dụng icon
import { useDispatch } from "react-redux";
import { byToCart } from "../../redux/cartSlice";
import Feauted from "../home/Feauted";

export const ProductDetail = ({ route }) => {
  const { id } = route.params;
  const navigation = useNavigation();
  const [heart, setHeart] = useState(false);
  const [qty, setQty] = useState(1);
  const [data, setData] = React.useState([]);
  const [feauted, setFeauted] = React.useState([]);
  const scrollViewRef = useRef();
  const scrollToTop = () => {
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(function (response) {
        setData(response.data);
        scrollToTop();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    axios.get(`https://dummyjson.com/products`).then(function (response) {
      setFeauted(response.data.products);
    });
  }, [id]);
  const handlePressMinus = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };
  const handlePressPlus = () => {
    setQty(qty + 1);
  };
  const handleAddToCart = () => {
    const product = {
      id: data.id,
      title: data.title,
      image: data.thumbnail,
      price: data.price,
    };
    dispatch(byToCart(product));
    navigation.navigate("Cart");
  };
  return (
    <View className="px-5  h-[100vh] mt-14 relative">
      <ScrollView ref={scrollViewRef} className="mb-28">
        <View>
          <View className="flex flex-row justify-between items-center">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="rounded-full bg-[#cccccc8f] mb-3 flex items-center justify-center w-10 h-10"
            >
              <FontAwesome
                name="angle-left"
                size={30}
                color="black"
              ></FontAwesome>
            </TouchableOpacity>
            <Text className="text-2xl font-semibold">Details</Text>
            <TouchableOpacity
              onPress={() => setHeart(!heart)}
              className="rounded-full bg-[#cccccc8f] mb-3 flex items-center justify-center w-10 h-10"
            >
              <FontAwesome
                name="heart"
                size={20}
                color={heart ? "red" : "gray"}
              ></FontAwesome>
            </TouchableOpacity>
          </View>
        </View>
        <View className="bg-white rounded-lg w-full  ">
          <View className="h-96">
            <Image
              className="w-full h-full"
              width={"100%"}
              resizeMode="contain"
              source={{ uri: data.thumbnail }}
            ></Image>
          </View>
        </View>
        <View className="mt-8">
          <Text className="text-blue-400">{data.category}</Text>
          <Text className="text-xl capitalize font-bold mt-2">
            {data.title}
          </Text>
          <View className="flex flex-row items-center gap-x-2 mt-2">
            <FontAwesome name="star" size={20} color="#f1c40f"></FontAwesome>
            <FontAwesome name="star" size={20} color="#f1c40f"></FontAwesome>
            <FontAwesome name="star" size={20} color="#f1c40f"></FontAwesome>
            <FontAwesome name="star" size={20} color="#f1c40f"></FontAwesome>
            <FontAwesome name="star" size={20} color="#ccc"></FontAwesome>
            <Text className="text-lg text-gray-500">
              {data.rating?.rate}/5.0 ({data.rating?.count} Reviews)
            </Text>
          </View>
          <View className="flex flex-row items-center mt-3">
            <TouchableOpacity
              onPress={handlePressMinus}
              className="w-10 bg-[#ccc] p-2 flex items-center justify-center rounded-lg"
            >
              <FontAwesome name="minus" size={20} color="#fff"></FontAwesome>
            </TouchableOpacity>

            <TextInput
              className="w-10 bg-[#fff] p-2 text-center "
              placeholder="1"
              value={qty.toString()}
            ></TextInput>
            <TouchableOpacity
              onPress={handlePressPlus}
              className="w-10 bg-[#ccc] p-2 flex items-center justify-center rounded-lg"
            >
              <FontAwesome name="plus" size={20} color="#fff"></FontAwesome>
            </TouchableOpacity>
          </View>
          <Text className="text-lg text-gray-500 text-[14px] mt-2">
            {data.description}{" "}
          </Text>
        </View>
        <View>
          <Feauted data={feauted} />
        </View>
      </ScrollView>
      <View className="absolute bg-white  left-0 w-screen  bottom-14 h-16 ">
        <View className="flex py-3 flex-row justify-around items-center">
          <Text className="text-xl text-center font-bold basis-1/2">
            ${data.price}
          </Text>
          <TouchableOpacity
            onPress={handleAddToCart}
            className="bg-yellow-500 w-40 py-3 rounded-lg"
          >
            <Text className="text-white text-center font-bold">
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
