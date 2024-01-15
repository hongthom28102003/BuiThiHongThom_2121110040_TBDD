import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Product from "../../components/common/Product";
const ProductContainer = ({ data, label }) => {
  return (
    <View className="">
      <View className="flex mt-5 items-center flex-row justify-between">
        <Text className="text-xl capitalize font-bold">{label}</Text>
        <Text className="text-blue-600">See All</Text>
      </View>
      <View className="my-3">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className=""
        >
          {data.map((item) => (
            <Product key={item.id} data={item} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ProductContainer;
