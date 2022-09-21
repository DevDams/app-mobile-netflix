import { StyleSheet, Text, View } from "react-native";
import { Image } from "native-base";
import { Dimensions } from "react-native";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import Onboarding from "react-native-onboarding-swiper";
import FONTS from "../contants/font";
import COLORS from "../contants/color";

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("screen").height;


const slides = [
  {
    key: 1,
    title: "Unlimited movies, TV shows & more",
    text: "Watch anywhere. Cancel anytime.",
    image: require("./../assets/brand.png"),
    backgroundColor: "#fff",
  },
  {
    key: 2,
    title: "Download and watch offline",
    text: "Always have something to watch offline.",
    image: require("./../assets/brand.png"),
    backgroundColor: "#fff",
  },
  {
    key: 3,
    title: "No pesky contacts",
    text: "Join today, cancel anytime.",
    image: require("./../assets/brand.png"),
    backgroundColor: "#fff",
  },
  {
    key: 4,
    title: "Watch everywhere",
    text: "Stream on your phone, tablet, laptop, TV and more.",
    image: require("./../assets/brand.png"),
    backgroundColor: "#fff",
  },
];

const OnbroadingScreen = () => {
  return (
    <AppIntroSlider
      data={slides}
      renderItem={({ item }) => {
        return (
          <View style={styles.slide}>
            <Image
              source={item.image}
              style={{ width: widthScreen, height: heightScreen }}
              resizeMode="contain"
              alt="Alternate Text"
            />
            <View style={styles.overlay} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.text}</Text>
          </View>
        );
      }}
      activeDotStyle={{
        backgroundColor: "white",
        width: 10,
        height: 10,
        borderRadius: 100,
        bottom: 50
      }}
      dotStyle={{
        backgroundColor: "gray",
        width: 10,
        height: 10,
        borderRadius: 100,
        bottom: 50
      }}
      showNextButton={false}
      showPrevButton={false}
      showDoneButton={false}
      onDone={() => console.log('DONE')}
    />
  );
};

export default OnbroadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  ImageView: {
    position: "absolute",
    width: "100%",
    top: 0,
  },
  title: {
    fontSize: 42,
    color: "white",
    bottom: 400,
    fontFamily: FONTS.medium,
    textAlign: "center",
    paddingHorizontal: 30
  },
  description: {
    fontSize: 20,
    color: COLORS.grayLight,
    bottom: 400,
    fontFamily: FONTS.regular,
    textAlign: "center",
    paddingHorizontal: 30
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)'
  }
});
