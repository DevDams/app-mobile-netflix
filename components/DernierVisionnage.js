import { StyleSheet, Text, View, ScrollView } from "react-native";
import { HStack, Image } from "native-base";
import React from "react";
import FONTS from "../contants/font";
import COLORS from "../contants/color";

// icons
import DotMenu from "./../assets/icons/dark/dot_menu.svg";
import InfoIcon from "./../assets/icons/dark/info_icon.svg";

// images
const SWAT = require("./../assets/swat.png");
const STRANGER = require("./../assets/stranger_things.png");
const TORONTO = require("./../assets/toronto.png");
const AVENGER = require("./../assets/the_avengers.png");
const DEN = require("./../assets/den.png");

const DernierVisionnage = () => {
  const movieList = [
    {
      id: 1,
      url: DEN,
    },
    {
      id: 2,
      url: AVENGER,
    },
    {
      id: 3,
      url: TORONTO,
    },
    {
      id: 4,
      url: STRANGER,
    },
    {
      id: 5,
      url: SWAT,
    },
    {
      id: 6,
      url: STRANGER,
    },
    {
      id: 7,
      url: SWAT,
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Reprendre où vous étiez arrêté</Text>
      <ScrollView horizontal={true}>
        {movieList.map((item) => (
          <View style={styles.listeItem} key={item.id}>
            <Image
              style={{ width: "100%", height: "100%", borderRadius: 5 }}
              source={item.url}
              resizeMode="cover"
              alt="Banner"
            />
            <View style={styles.bottomMenu}>
              <View style={styles.timebar}>
                <View style={styles.timebarProgress}></View>
              </View>
              <HStack
                space={8}
                alignItems="center"
                justifyContent="center"
                style={{ height: "100%" }}
              >
                <InfoIcon width="25" height="25" />
                <DotMenu width="20" height="20" />
              </HStack>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DernierVisionnage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
  },
  sectionTitle: {
    color: "white",
    fontFamily: FONTS.medium,
    fontSize: 24,
    marginLeft: 5,
  },
  listeItem: {
    backgroundColor: COLORS.grayDark2,
    width: 110,
    height: 190,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  bottomMenu: {
    position: "absolute",
    bottom: 0,
    backgroundColor: COLORS.grayDark2,
    width: "100%",
    height: 45,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  timebar: {
    backgroundColor: COLORS.gray,
    width: "100%",
    height: 4,
  },
  timebarProgress: {
    backgroundColor: COLORS.red,
    width: "10%",
    height: "100%",
  },
});
