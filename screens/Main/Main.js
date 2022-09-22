import { StyleSheet, View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MainGame from "./MainGame/MainGame";
import MainHome from "./MainHome/MainHome";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import COLORS from "../../contants/color";

const Tab = createBottomTabNavigator();

const Icon = createIconSetFromIcoMoon(
  require("./../../assets/icons/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

function MyTabBar({ state, descriptors, navigation }) {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("./../../assets/icons/icomoon.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{ flexDirection: "row", height: 55, alignItems: "center", backgroundColor: COLORS.grayDark2 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            activeOpacity={1}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, backgroundColor: COLORS.grayDark2, alignItems: "center" }}
            key={index}
          >
            <Icon name={route.name === 'Home' ? "home" : route.name === 'Game' ? "loop" : route.name === 'Recommandations' ? "news" : route.name === 'Stories' ? "rire" : "download"} size={20} color={isFocused ? COLORS.white : COLORS.gray} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Main = () => {
  return (
    <SafeAreaProvider>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "black", borderTopColor: "black" },
        }}
        tabBar={(props) => <MyTabBar {...props} />}
      >
        <Tab.Screen
          name="Home"
          component={MainHome}
          options={{ title: "Main", headerShown: false }}
        />
        <Tab.Screen
          name="Game"
          component={MainGame}
          options={{ title: "Main", headerShown: false }}
        />
        <Tab.Screen
          name="Recommandations"
          component={MainGame}
          options={{ title: "Main", headerShown: false }}
        />
        <Tab.Screen
          name="Stories"
          component={MainGame}
          options={{ title: "Main", headerShown: false }}
        />
        <Tab.Screen
          name="Download"
          component={MainGame}
          options={{ title: "Main", headerShown: false }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};

export default Main;

const styles = StyleSheet.create({});
