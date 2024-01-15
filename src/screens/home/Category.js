import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";

const Category = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      setData(response.data);
    };
    fetchData();
  }, []);
  const handlePress = (item) => {
    navigation.navigate("Products", {
      cat: item,
    });
  };
  return (
    <View className="mt-3">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex flex-row gap-3"
      >
        {data.map((item) => (
          <TouchableOpacity
            onPress={() => handlePress(item)}
            className={`p-3 bg-white  rounded-lg `}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Category;
