import { StyleSheet, View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MainGame from "./MainGame/MainGame";
import MainHome from "./MainHome/MainHome";
import { SafeAreaProvider } from "react-native-safe-area-context";
import COLORS from "../../contants/color";

import HomeIcon from './../../assets/icons/dark/home.svg'
import HomeIconLight from './../../assets/icons/light/home.svg'
import NewsIcon from './../../assets/icons/dark/news.svg'
import NewsIconLight from './../../assets/icons/light/news.svg'
import SmileIcon from './../../assets/icons/dark/rire.svg'
import SmileIconLight from './../../assets/icons/light/smile.svg'
import GameIcon from './../../assets/icons/dark/game.svg'
import GameIconLight from './../../assets/icons/light/game.svg'
import DownloadIcon from './../../assets/icons/dark/download.svg'
import DownloadIconLight from './../../assets/icons/light/download.svg'

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: "row", height: 55, alignItems: "center", backgroundColor: COLORS.grayDark2 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

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
            style={{ flex: 1, backgroundColor: COLORS.grayDark2, alignItems: "center", justifyContent: "center", height: "100%" }}
            key={index}
          >
            {route.name === 'Home' && !isFocused ? (<HomeIcon width={22} height={22} />) : route.name === 'Home' && isFocused ? (<HomeIconLight width={22} height={22} />) : null}
            {route.name === 'Game' && !isFocused ? (<GameIcon width={25} height={25} />) : route.name === 'Game' && isFocused ? (<GameIconLight width={25} height={25} />) : null}
            {route.name === 'Recommandations' && !isFocused ? (<NewsIcon width={22} height={22} />) : route.name === 'Recommandations' && isFocused ? (<NewsIconLight width={22} height={22} />) : null}
            {route.name === 'Stories' && !isFocused ? (<SmileIcon width={22} height={22} />) : route.name === 'Stories' && isFocused ? (<SmileIconLight width={22} height={22} />) : null}
            {route.name === 'Download' && !isFocused ? (<DownloadIcon width={22} height={22} />) : route.name === 'Download' && isFocused ? (<DownloadIconLight width={22} height={22} />) : null}
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
        initialRouteName="Home"
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
