import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import pathRouter from "../constants/navigationString";
import { Text, View } from "react-native";
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={pathRouter.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
