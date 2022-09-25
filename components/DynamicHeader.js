import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { HStack } from "native-base";
import { getStatusBarHeight } from "react-native-status-bar-height";
import FONTS from "./../contants/font";
import ArrowDown from "./../assets/icons/light/arrow_down.svg";

const statusBarHeight = getStatusBarHeight() + 50;

const DynamicHeader = (props) => {
  const { headerHeight, showCategorie } = props;

  const openCategorie = () => {
    showCategorie(true)
  }
  return (
    <>
      <View
        style={[
          styles.subHeader,
          {
            height: headerHeight / 2.5,
            width: "100%",
            justifyContent: "center",
          },
        ]}
      >
        <HStack style={{ width: "80%" }} space={8} justifyContent="center">
          <Text style={styles.conversation}>Séries</Text>
          <Text style={styles.conversation}>Films</Text>
          <TouchableWithoutFeedback onPress={openCategorie}>
            <Text style={styles.conversation}>
              Catégories <ArrowDown width={12} height={12} />
            </Text>
          </TouchableWithoutFeedback>
        </HStack>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    width: "100%",
    paddingHorizontal: 10,
    marginTop: statusBarHeight,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  conversation: { color: "white", fontSize: 14, fontFamily: FONTS.medium },
});
export default DynamicHeader;
