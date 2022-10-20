import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import GetStarted from "../screens/GetStarted/GetStarted";
import Signin from "../screens/Auth/Signin";
import Main from "../screens/Main/Main";
import ChooseProfil from "../screens/ChooseProfil/ChooseProfil";

const Stack = createNativeStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 100,
    damping: 500,
    mass: 2,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01
  }
}

const MainNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: "horizontal",
            transtionSpec: {
              open: config,
              close: config
            }
          }}
          headerMode="float"
          initialRouteName="Home"
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Overview", headerShown: false }}
          />
          <Stack.Screen
            name="Get Started"
            component={GetStarted}
            options={{ title: "Get Started", headerShown: false, animation: "slide_from_bottom" }}
          />
          <Stack.Screen
            name="SignIn"
            component={Signin}
            options={{ title: "Sign in", headerShown: false, animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ title: "Main", headerShown: false, animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="ChooseProfil"
            component={ChooseProfil}
            options={{ title: "Choose Profil", headerShown: false, animation: "slide_from_right" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
