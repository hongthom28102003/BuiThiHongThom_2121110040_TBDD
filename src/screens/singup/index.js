import React, { useCallback, useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const Signup = () => {
  const [data, setData] = useState({
    fullName: "",
    password: "",
    email: "",
    confirmPassword: "",
  });
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem("user").then((value) => {
        if (value) {
          setUsers(JSON.parse(value));
        }
      });
    }, [])
  );
  const handlePressSignup = () => {
    if (data.fullName === "" || data.email === "" || data.password === "") {
      Toast.show({
        type: "error",
        text1: "Please fill all the fields",
      });
      return;
    }
    if (data.password !== data.confirmPassword) {
      Toast.show({
        type: "error",
        text1: "Confirm password not match",
      });
      return;
    }
    const newArr = [
      ...users,
      { ...data, id: Math.floor(Math.random() * 1000) },
    ];
    AsyncStorage.setItem("user", JSON.stringify(newArr));
    Toast.show({
      type: "success",
      text1: "Signup successfully",
    });
    navigation.navigate("Login");
  };
  return (
    <View className="mt-10 px-5">
      <Text className="text-2xl text-center">Signup</Text>
      <View>
        <TextInput
          onChangeText={(text) => setData({ ...data, fullName: text })}
          value={data.fullName}
          className="bg-gray-200 py-5 px-5 rounded-xl mt-20"
          placeholder="Full name"
        />
        <TextInput
          onChangeText={(text) => setData({ ...data, email: text })}
          value={data.email}
          className="bg-gray-200 py-5 px-5 rounded-xl mt-10"
          placeholder="Email"
        />
        <TextInput
          value={data.password}
          onChangeText={(text) => setData({ ...data, password: text })}
          className="bg-gray-200 py-5 px-5 rounded-xl mt-10"
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          value={data.confirmPassword}
          onChangeText={(text) => setData({ ...data, confirmPassword: text })}
          className="bg-gray-200 py-5 px-5 rounded-xl mt-10"
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={handlePressSignup}
          className="bg-blue-400 p-2 rounded-full mt-16"
        >
          <Text className="text-xl text-center font-bold text-white bg-blue-400 py-2 rounded-full">
            Singup
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
