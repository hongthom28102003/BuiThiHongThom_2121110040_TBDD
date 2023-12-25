import React from "react";
import { Text, View } from "react-native";
import pathRouter from "../constants/navigationString";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import Icon from "react-native-vector-icons/Ionicons"; // Để sử dụng icon
import FontAwesome from "react-native-vector-icons/FontAwesome"; // Để sử dụng icon
import Categories from "../screens/categories";
import CartScreen from "../screens/cart";

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
        name={"Search"}
        component={Categories}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon name="search" size={25} color={focused ? "red" : "gray"} />
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
        component={Categories}
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
