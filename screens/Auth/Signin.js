import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import COLORS from "../../contants/color";
import FONTS from "../../contants/font";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, HStack } from "native-base";
import { Feather } from "@expo/vector-icons";

const NetflixLogo = require("./../../assets/Netflix_Logo.png");

const HeaderBar = ({ navigation }) => {
  return (
    <View style={styles.HeaderBar}>
      <HStack space={3} justifyContent="flex-start">
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
          <Feather
            name="arrow-left"
            size={30}
            color="white"
            style={{ marginTop: 10 }}
          />
        </TouchableWithoutFeedback>
        <Image
          style={{ width: 120, height: 50 }}
          source={NetflixLogo}
          alt="Netflix Logo"
        />
      </HStack>
    </View>
  );
};

const Signin = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <HeaderBar navigation={navigation} />
      <Text>Signin</Text>

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  HeaderBar: {
    height: 60,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  container: {
    justifyContent: "flex-start",
  },
});
