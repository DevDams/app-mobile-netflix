import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Spinner } from "native-base";
import React, { useEffect } from "react";
import COLORS from "../contants/color";
import FONTS from "../contants/font";

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("ChooseProfil");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Spinner size="lg" color={COLORS.red} />
      <Text style={styles.text}>Signing in</Text>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontFamily: FONTS.regular,
    color: COLORS.white,
    marginTop: 20,
  },
});
