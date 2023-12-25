import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./TabRoutes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductDetail } from "../screens/productDetail";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={TabRoutes} name={pathRouter.HOME} />
        <Stack.Screen component={ProductDetail} name={"Detail"} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
