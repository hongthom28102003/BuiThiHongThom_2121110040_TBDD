import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useCallback } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";
import { setIsLogin, setUser } from "../../redux/userSlice";

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });
  const [users, setUsers] = React.useState([]);
  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem("user").then((value) => {
        if (value) {
          setUsers(JSON.parse(value));
          console.log(JSON.parse(value));
        }
      });
    }, [])
  );
  const handlePressLogin = () => {
    // Thực hiện xác thực và đăng nhập ở đây
    const user = users.find((item) => item.email === data.email);
    if (user) {
      if (user.password === data.password) {
        dispatch(setIsLogin(true));
        dispatch(setUser(user));
        navigation.navigate("Home");
      } else {
        Toast.show({
          type: "error",
          text1: "Wrong password",
        });
      }
    } else {
      Toast.show({
        type: "error",
        text1: "User not found",
      });
    }
  };
  return (
    <View className="mt-10 px-5">
      <Text className="text-2xl text-center">Login</Text>
      <View>
        <TextInput
          onChangeText={(text) => setData({ ...data, email: text })}
          value={data.email}
          className="bg-gray-200 py-5 px-5 rounded-xl mt-20"
          placeholder="Email"
        />
        <TextInput
          value={data.password}
          onChangeText={(text) => setData({ ...data, password: text })}
          className="bg-gray-200 py-5 px-5 rounded-xl mt-10"
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={handlePressLogin}
          className="bg-blue-400 p-2 rounded-full mt-16"
        >
          <Text className="text-xl text-center font-bold text-white bg-blue-400 py-2 rounded-full">
            Login
          </Text>
        </TouchableOpacity>
        <View className="text-center flex flex-row gap-2 mt-5">
          <Text>Dont not Account </Text>
          <TouchableOpacity
            className=""
            onPress={() => navigation.navigate("Signup")}
          >
            <Text className="text-blue-400">Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
