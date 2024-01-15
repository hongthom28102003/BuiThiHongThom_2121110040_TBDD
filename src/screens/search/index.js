import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, TextInput, ScrollView } from "react-native";
import Product from "../../components/common/Product";
const SearchScreen = ({ route }) => {
  const { q } = route.params;
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(q || "");
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${search}`
      );
      setData(response.data.products);
    };
    fetch();
  }, [search]);
  return (
    <View className="px-5 mt-16">
      <Text className="text-2xl text-center font-bold">Search</Text>
      <TextInput
        onChangeText={(text) => setSearch(text)}
        className="border mt-5 px-5 py-3 rounded-lg  border-gray-400"
        placeholder="Search..."
        value={search}
      />
      <View className="pb-10">
        <Text className="my-3 font-bold">Result ({data.length})</Text>
        <ScrollView className="pb-10">
          <View className="flex flex-wrap flex-row gap-y-3 mb-56">
            {data.map((item) => (
              <Product key={item.id} data={item} />
            ))}
            {data.length === 0 && (
              <Text className="mt-10 text-center text-gray-500 text-base ">
                Search not result
              </Text>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SearchScreen;
