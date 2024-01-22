import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./TabRoutes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductDetail } from "../screens/productDetail";
import Toast from "react-native-toast-message";
import LoginScreen from "../screens/login";
import SearchScreen from "../screens/search";
import Signup from "../screens/singup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CheckoutPage from "../screens/checkout";
const Stack = createNativeStackNavigator();

const Routes = () => {
  useEffect(() => {
    const users = [
      {
        id: 1,
        fullName: "Bui Thi Hong Thom",
        email: "thom@gmail.com",
        password: "123456",
      },
    ];
    AsyncStorage.setItem("user", JSON.stringify(users));
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={TabRoutes} name={pathRouter.HOME} />
        <Stack.Screen component={ProductDetail} name={"Detail"} />
        <Stack.Screen component={LoginScreen} name={"Login"} />
        <Stack.Screen component={SearchScreen} name={"Search"} />
        <Stack.Screen component={Signup} name={"Signup"} />
        <Stack.Screen component={CheckoutPage} name={"Checkout"} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
};

export default Routes;
