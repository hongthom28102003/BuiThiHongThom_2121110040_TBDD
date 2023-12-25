import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"; // Để sử dụng icon
import FontAwesome from "react-native-vector-icons/FontAwesome"; // Để sử dụng icon
import Category from "../home/Category";
import { useDispatch } from "react-redux";
import { minusToCart, plusToCart } from "../../redux/cartSlice";

const Cart = ({ data }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const handlePressMinus = () => {
    dispatch(minusToCart(data.id));
  };
  const handlePressPlus = () => {
    dispatch(plusToCart(data.id));
  };
  return (
    <View className="flex bg-white rounded-2xl flex-row mb-2 justify-between">
      <View className="flex flex-row">
        <Image
          resizeMode="contain"
          className="w-24 h-24 mt-3 rounded-2xl"
          source={{ uri: data.image }}
        ></Image>
        <View className="ml-3">
          <Text className="text-sm w-[80%] overflow-hidden mt-2  font-bold">
            {data.title}
          </Text>
          <View className="flex">
            <View className="flex flex-row border w-28 border-[#ccc]  mt-3">
              <TouchableOpacity
                onPress={handlePressMinus}
                className=" p-2 flex items-center justify-center rounded-lg"
              >
                <FontAwesome name="minus" size={15} color="#000"></FontAwesome>
              </TouchableOpacity>
              <TextInput
                className=" bg-[#fff] px-4 text-center "
                placeholder="1"
                value={data.qty.toString()}
              ></TextInput>
              <TouchableOpacity
                onPress={handlePressPlus}
                className=" p-2 flex items-center justify-center rounded-lg"
              >
                <FontAwesome name="plus" size={15} color="#000"></FontAwesome>
              </TouchableOpacity>
            </View>
          </View>
          <Text className="text-base mt-2 text-red-500 font-bold">
            ${data.price}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Cart;
