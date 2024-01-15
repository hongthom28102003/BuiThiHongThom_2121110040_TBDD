import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogin } from "../../redux/userSlice";
import avatar from "../../assets/images/f5a3eed2a35608085147.jpg";

const SettingScreen = () => {
  const navigation = useNavigation();
  const { isLogin, user } = useSelector((state) => state.user);

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
      <Text className="text-2xl text-center font-bold">Setting</Text>
      {isLogin && (
        <View className="mt-10">
          <View className="flex items-center flex-row mb-3 justify-center">
            <View className="w-20 h-20 rounded-full bg-gray-500">
              <Image
                source={ avatar }
                className="w-full h-full rounded-full"
              />
            </View>
          </View>

          <Text className="text-2xl text-center">{user.fullName}</Text>
          <Text className="text-sm text-center text-gray-500 mt-2">
            {" "}
            {user.email}
          </Text>
        </View>
      )}
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
