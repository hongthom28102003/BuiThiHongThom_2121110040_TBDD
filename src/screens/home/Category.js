import axios from "axios";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import images from "../../assets/image";
import avatar from "../../assets/images/Ellipse-1.jpg";

const Category = () => {
    const images = [
        "https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/QD12083/2-TRANG-QD12083.jpg",
        "https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac3/dd11031/3-xanh-dd11031.jpg",
        "https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/AD12069/2-XANH-AD12069.jpg",
        "https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/AD12054/2-HONG-AD12054.jpg"
    ]
    const [data, setData] = React.useState([]);
    axios
      .get("https://fakestoreapi.com/products/categories")
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
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        className="my-5"
      >
        {data.map((item,index) => (
          <View key={index} className="flex gap-3 mr-5">
            <View className="rounded-full bg-gray-200 p-1 w-16 h-16">
              <Image
                source={{ uri: images[index] }}
                className="w-full h-full rounded-full"
              />
            </View>
            <Text className="capitalize text-center">{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Category;
