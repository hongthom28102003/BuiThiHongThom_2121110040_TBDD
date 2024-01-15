import React from "react";
import { Text, View } from "react-native";
import pathRouter from "../constants/navigationString";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import Icon from "react-native-vector-icons/Ionicons"; // Để sử dụng icon
import Icon2 from "react-native-vector-icons/FontAwesome5"; // Để sử dụng icon
import FontAwesome from "react-native-vector-icons/FontAwesome"; // Để sử dụng icon
import Entypo from "react-native-vector-icons/Entypo"; // Để sử dụng icon
import Categories from "../screens/categories";
import CartScreen from "../screens/cart";
import SettingScreen from "../screens/setting";

const Tab = createBottomTabNavigator();
const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName={pathRouter.HOME}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        // tabBarShowLabel: false,
        tabBarItemStyle: {
          padding: 1,
          marginBottom: 0,
        },
        tabBarStyle: {
          padding: 10,
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name={pathRouter.HOME}
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon name="home" size={25} color={focused ? "red" : "gray"} />
            );
          },
        }}
      />
      <Tab.Screen
        name={"Products"}
        component={Categories}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo name="grid" size={30} color={focused ? "red" : "gray"} />
            );
          },
        }}
      />
      <Tab.Screen
        name={"Cart"}
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon name="cart" size={25} color={focused ? "red" : "gray"} />
            );
          },
        }}
      />
      <Tab.Screen
        name={"User"}
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome
                name="user"
                size={25}
                color={focused ? "red" : "gray"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
