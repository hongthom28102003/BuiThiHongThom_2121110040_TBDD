import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import Product from "../../components/common/Product";

const Categories = ({ route }) => {
  const [data, setData] = useState({
    categories: [],
    products: [],
  });
  const [category, setCategory] = useState(route.params?.cat || "All");
  useFocusEffect(
    useCallback(() => {
      setCategory(route.params?.cat || "All");
    }, [route.params?.cat])
  );
  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        const response = await axios.get(
          "https://dummyjson.com/products/categories"
        );
        if (category === "All") {
          const response2 = await axios.get("https://dummyjson.com/products");
          setData({
            categories: response.data,
            products: response2.data.products,
          });
        } else {
          const response2 = await axios.get(
            `https://dummyjson.com/products/category/${category}`
          );
          setData({
            categories: response.data,
            products: response2.data.products,
          });
        }
      };
      fetchData();
    }, [category])
  );
  return (
    <View className="px-5">
      <Text className="text-center text-2xl mt-10 font-bold">Products</Text>
      <View className="mt-10">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex flex-row gap-3"
        >
          <TouchableOpacity
            className={`p-3 bg-white  rounded-lg ${
              category === "All" && "!bg-blue-500 text-white"
            }`}
            onPress={() => setCategory("All")}
          >
            <Text className={`${category === "All" && " text-white"}`}>
              All
            </Text>
          </TouchableOpacity>
          {data.categories.map((item) => (
            <TouchableOpacity
              onPress={() => setCategory(item)}
              className={`p-3 bg-white  rounded-lg ${
                category === item && "!bg-blue-500"
              }`}
            >
              <Text className={`${category === item && " text-white"}`}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View className="my-5">
        <ScrollView showsVerticalScrollIndicator={false} className="pb-10">
          <View className="flex flex-wrap flex-row gap-y-3 mb-72">
            {data.products?.map((item) => (
              <Product key={item.id} data={item} />
            ))}
            {data.products.length === 0 && (
              <Text className="mt-10 text-center text-gray-500 text-base ">
                Products not result
              </Text>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Categories;
