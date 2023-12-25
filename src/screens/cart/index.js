import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"; // Để sử dụng icon
import Ionicons from "react-native-vector-icons/Ionicons"; // Để sử dụng icon
import { useSelector } from "react-redux";
import Cart from "./Cart";

const CartScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const { cartAr } = useSelector((state) => state.cart);

  return (
    <View className="  mt-14 relative ">
      <View className="flex px-5 flex-row justify-between items-center">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="rounded-full bg-[#cccccc8f] mb-3 flex items-center justify-center w-10 h-10"
        >
          <FontAwesome name="angle-left" size={30} color="black"></FontAwesome>
        </TouchableOpacity>
        <Text className="text-2xl font-semibold">My Cart</Text>
        <TouchableOpacity className="rounded-full  mb-3 flex items-center justify-center w-10 h-10">
          <Ionicons
            name="notifications-circle-outline"
            size={40}
            color={"gray"}
          ></Ionicons>
        </TouchableOpacity>
      </View>
      <ScrollView className="px-5 h-[60vh] mt-5">
        <View>
          <View>
            {cartAr.length > 0 &&
              cartAr.map((item) => <Cart data={item} key={item.id} />)}
            {cartAr.length == 0 && (
              <View>
                <Text className="text-center text-3xl text-gray-400 mt-10">
                  Cart is Empty {":))"}
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>

      <View className={`bg-white px-5 pb-20 ${cartAr.length == 0 && "hidden"}`}>
        <View className=" mt-10">
          <View className="flex flex-row justify-between items-center">
            <Text className="text-xl text-gray-400">Total</Text>
            <Text className="text-xl font-bold">
              $
              {cartAr.reduce(
                (item, curentValue) => item + curentValue.total,
                0
              )}
            </Text>
          </View>
        </View>
        <TouchableOpacity className="bg-red-500 mt-5 py-3 rounded-full">
          <Text className="text-center text-white font-semibold text-base">
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
