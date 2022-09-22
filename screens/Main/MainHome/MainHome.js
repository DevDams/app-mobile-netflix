import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../../contants/color";

const MainHome = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <View>
        <Text style={{ color: "white" }}>MainHome</Text>
      </View>
    </SafeAreaView>
  );
};

export default MainHome;

const styles = StyleSheet.create({});
