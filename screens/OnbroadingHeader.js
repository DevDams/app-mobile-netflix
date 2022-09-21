import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { HStack, Image } from "native-base";
import React from "react";
import FONTS from "../contants/font";

const NetflixSymbol = require("./../assets/Netflix_Symbol.png");

const OnbroadingHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HStack space={3} justifyContent="space-between" alignItems="center">
        <Image
          source={NetflixSymbol}
          style={{ width: 45, height: 45 }}
          resizeMode="contain"
          alt="Netflix symbol"
        />
        <HStack space={3} justifyContent="space-between" alignItems="center">
          <Text style={styles.link}>PRIVACY</Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.link}>SIGN IN</Text>
          </TouchableWithoutFeedback>
        </HStack>
      </HStack>
    </View>
  );
};

export default OnbroadingHeader;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: 50,
    width: "100%",
    top: 0,
    zIndex: 99,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  link: {
    fontFamily: FONTS.medium,
    color: "white",
    fontSize: 15,
    marginTop: 10,
  },
});
