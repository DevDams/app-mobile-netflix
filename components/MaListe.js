import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Image } from "native-base";
import React from "react";
import FONTS from "../contants/font";

const SWAT = require("./../assets/swat.png");
const STRANGER = require("./../assets/stranger_things.png");
const TORONTO = require("./../assets/toronto.png");
const AVENGER = require("./../assets/the_avengers.png");
const DEN = require("./../assets/den.png");

const MaListe = () => {
  const movieList = [
    {
      id: 1,
      url: SWAT,
    },
    {
      id: 2,
      url: STRANGER,
    },
    {
      id: 3,
      url: TORONTO,
    },
    {
      id: 4,
      url: AVENGER,
    },
    {
      id: 5,
      url: DEN,
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
      <Text style={styles.sectionTitle}>Ma liste</Text>
      <ScrollView horizontal={true}>
        {movieList.map((item) => (
          <View style={styles.listeItem} key={item.id}>
            <Image
              style={{ width: "100%", height: "100%", borderRadius: 5 }}
              source={item.url}
              resizeMode="cover"
              alt="Banner"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MaListe;

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
    backgroundColor: "white",
    width: 110,
    height: 150,
    marginHorizontal: 5,
    borderRadius: 5,
  },
});
