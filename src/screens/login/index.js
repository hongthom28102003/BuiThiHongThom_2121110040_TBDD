import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";
import { setIsLogin } from "../../redux/userSlice";

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [data, setData] = React.useState({
    username: "",
    password: "",
  });
  const [user, setUser] = React.useState({
    username: "thom203",
    password: "123456",
  });
  const handlePressLogin = () => {
    // Thực hiện xác thực và đăng nhập ở đây
    if (data.username === user.username) {
      if (data.password === user.password) {
        Toast.show({
          type: "success",
          text1: "Login success",
        });
        dispatch(setIsLogin(true));
        navigation.navigate("Home");
      } else {
        Toast.show({
          type: "error",
          text1: "Password incorrect",
        });
      }
    } else {
      Toast.show({
        type: "error",
        text1: "Username incorrect",
      });
    }
    // axios
    //   .post("https://fakestoreapi.com/auth/login", { ...data })
    //   .then(function (response) {
    //     Toast.show({
    //       type: "success",
    //       text1: "Login success",
    //     });
    //     navigation.navigate("Home");
    //   })
    //   .catch(function (error) {
    //     Toast.show({
    //       type: "error",
    //       text1: "Username or password incorrect",
    //     });
    //   })
    //   .finally(function () {
    //     // always executed
    //   });
  };
  return (
    <View className="mt-10 px-5">
      <Text className="text-2xl text-center">Login</Text>
      <View>
        <TextInput
          onChangeText={(text) => setData({ ...data, username: text })}
          value={data.username}
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
      </View>
    </View>
  );
};

export default LoginScreen;
