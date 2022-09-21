import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import GetStarted from "../screens/GetStarted/GetStarted";
import Signin from "../screens/Auth/Signin";

const Stack = createNativeStackNavigator();


const MainNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Overview", headerShown: false }}
          />
          <Stack.Screen
            name="Get Started"
            component={GetStarted}
            options={{ title: "Get Started", headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={Signin}
            options={{ title: "Sign in", headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
