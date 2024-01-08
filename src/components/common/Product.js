import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useDispatch, useSelector } from "react-redux";
import { byToCart } from "../../redux/cartSlice";
import Toast from "react-native-toast-message";
const Product = ({ data }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handlePressProduct = () => {
    navigation.navigate("Detail", { id: data.id });
  };
  const handlePressToCart = () => {
    const product = {
      id: data.id,
      title: data.title,
      image: data.thumbnail,
      price: data.price,
    };
    dispatch(byToCart(product));
    Toast.show({
      type: "success",
      text1: "Add to cart successfully",
      text2: "This is your first product 👋",
    });
  };
  return (
    <TouchableOpacity
      onPress={handlePressProduct}
      className="mr-2  w-44 bg-[#ffff] p-2 rounded-md overflow-hidden"
    >
      <View className="relative bg-white h-44 w-max">
        <Image
          resizeMode="contain"
          className="w-full h-full"
          source={{ uri: data.thumbnail }}
        />
        <Image
          className=" w-5 h-5  absolute top-2 right-2 rounded-full bg-white"
          source={require("../../assets/images/heart-svgrepo-com.png")}
        />
      </View>
      <View className="px-5 mt-2">
        <Text className="text-md font-bold h-14 text-sm overflow-hidden">
          {data.title}
        </Text>
        <View className="text-base flex text-red-400 font-medium mt-2">
          <Text className="text-base font-medium mt-2">${data.price}</Text>
          <TouchableOpacity
            onPress={handlePressToCart}
            className="w-full py-2 mt-2 items-center justify-center bg-red-400 rounded-full flex flex-row"
          >
            <Feather
              className=" mr-3 p-2 rounded-full text-white"
              width="25"
              name="shopping-cart"
              color={"white"}
            />
            <Text className="ml-2 font-bold text-white">Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product;
