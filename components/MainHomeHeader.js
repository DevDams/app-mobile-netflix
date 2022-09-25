import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { HStack, Image } from "native-base";
import SearchIcon from "./../assets/icons/light/search.svg";
// import { LinearGradient } from "expo-linear-gradient";

const statusBarHeight = getStatusBarHeight();

const NetflixSymbol = require("./../assets/Netflix_Symbol.png");
const UserIcon = require("./../assets/user_icon.png");

const MainHomeHeader = () => {
  return (
    <View style={styles.container}>
      {/* <LinearGradient
        // Background Linear Gradient
        colors={["transparent", "rgba(0,0,0,0.8)",]}
        style={styles.gradient}
      /> */}
      <HStack space={3} justifyContent="space-between" alignItems="center" style={{ paddingHorizontal: 10, marginTop: statusBarHeight + 10 }}>
        <Image
          style={{ width: 40, height: 40 }}
          source={NetflixSymbol}
          resizeMode="contain"
          alt="Netflix Logo"
        />
        <HStack space={5} justifyContent="space-between">
          <TouchableWithoutFeedback>
            <SearchIcon width={18} height={18} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Image
              style={{ width: 20, height: 20 }}
              source={UserIcon}
              alt="User icon"
            />
          </TouchableWithoutFeedback>
        </HStack>
      </HStack>
    </View>
  );
};

export default MainHomeHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "transparent",
    zIndex: 2,
    position: "absolute",
    // top: statusBarHeight + 10,
  },
});
