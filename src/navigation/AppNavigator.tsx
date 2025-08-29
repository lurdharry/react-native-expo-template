import HomeScreen from "@/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

export type AppNavigationProps = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<AppNavigationProps>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
