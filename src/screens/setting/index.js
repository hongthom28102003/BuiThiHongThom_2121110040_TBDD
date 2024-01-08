import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogin } from "../../redux/userSlice";

const SettingScreen = () => {
  const navigation = useNavigation();
  const { isLogin } = useSelector((state) => state.user);
  console.log("hello", isLogin);
  const dispatch = useDispatch();
  const handlePressLogin = () => {
    navigation.navigate("Login");
  };
  const handlePressLogout = () => {
    navigation.navigate("Login");
    dispatch(setIsLogin(false));
  };

  return (
    <View className="mt-10 px-5">
      <Text className="text-2xl text-center">Setting</Text>
      <View>
        {!isLogin ? (
          <TouchableOpacity
            onPress={handlePressLogin}
            className="bg-blue-400 p-2 rounded-full mt-20"
          >
            <Text className="text-white text-xl text-center font-bold">
              Login
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handlePressLogout}
            className="bg-red-400 p-2 rounded-full mt-20"
          >
            <Text className="text-white text-xl text-center font-bold">
              Logout
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SettingScreen;
