import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text,Image ,TouchableOpacity} from "react-native";
import image from "../../../assets/Success.gif";
const CheckoutPage = () => {
    const navigation = useNavigation()
    const handlePressHome = () => {
        navigation.navigate("Home");
    }
  return (
    <View className="px-5 mt-10 flex items-center justify-center h-screen">
      <Image source={image} />
      <Text className="text-2xl">Checkout Successfully</Text>
      <Text className="text-xl text-gray-500">Thank you for your purchase</Text>
      <TouchableOpacity onPress={handlePressHome} className="px-5 mt-10 py-2 bg-green-500 rounded-lg">
        <Text className="text-xl text-white font-bold">Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckoutPage;
