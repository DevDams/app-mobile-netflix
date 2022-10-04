import { StyleSheet, Text, View, Animated, ScrollView } from "react-native";
import { HStack, Button, VStack, Image } from "native-base";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../../contants/color";
import DynamicHeader from "../../../components/DynamicHeader";
import { getCloser } from "../../../helpers";
import MainHomeHeader from "../../../components/MainHomeHeader";
import { LinearGradient } from "expo-linear-gradient";
import Categorie from "../../../components/Categorie";

// icons
import PlayIcon from "./../../../assets/icons/dark/play.svg";
import CheckIcon from "./../../../assets/icons/light/check.svg";
import InfoIcon from "./../../../assets/icons/light/info.svg";
import FONTS from "../../../contants/font";
import MaListe from "../../../components/MaListe";
import DernierVisionnage from "../../../components/DernierVisionnage";

const { diffClamp } = Animated;
const headerHeight = 58 * 2;
const Banner = require("./../../../assets/violet.png");

const MainHome = () => {
  const [openCategorie, setOpenCategorie] = React.useState(false);
  const [topVal, setTopVal] = React.useState(0);
  const scrollView = React.createRef();

  const scrollY = useRef(new Animated.Value(0));
  const scrollYClamped = diffClamp(scrollY.current, 0, headerHeight);

  const translateY = scrollYClamped.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -(headerHeight / 2)],
  });
  const translateYNumber = useRef();
  translateY.addListener(({ value }) => {
    translateYNumber.current = value;
  });

  const handleScroll = ({ nativeEvent }) => {
    const offsetY = nativeEvent.contentOffset.y;
    setTopVal(offsetY);
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: { y: scrollY.current },
          },
        },
      ],
      {
        useNativeDriver: true,
      }
    );
  };

  const handleSnap = ({ nativeEvent }) => {
    const offsetY = nativeEvent.contentOffset.y;
    if (
      !(
        translateYNumber.current === 0 ||
        translateYNumber.current === -headerHeight / 2
      )
    ) {
      if (scrollView.current) {
        scrollView.current.scrollTo({
          offset:
            getCloser(translateYNumber.current, -headerHeight / 2, 0) ===
            -headerHeight / 2
              ? offsetY + headerHeight / 2
              : offsetY - headerHeight / 2,
        });
      }
    }
  };

  const handleOpenCategorie = (val) => {
    setOpenCategorie(val);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <MainHomeHeader />

      <Animated.View style={[styles.header, { transform: [{ translateY }] }]}>
        {topVal <= 70 ? (
          <DynamicHeader
            {...{ headerHeight }}
            showCategorie={handleOpenCategorie}
          />
        ) : null}
      </Animated.View>

      <Animated.ScrollView
        scrollEventThrottle={16}
        ref={scrollView}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleSnap}
        contentContainerStyle={{ paddingTop: headerHeight / 2.5 }}
      >
        <View
          style={{
            height: 530,
            width: "100%",
            backgroundColor: "blue",
            position: "absolute",
            top: 0,
          }}
        >
          <LinearGradient
            // Background Linear Gradient
            colors={[
              "rgba(0,0,0,0.8)",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
            ]}
            style={styles.gradient}
          />
          <Image
            style={{ width: "100%", height: "100%" }}
            source={Banner}
            resizeMode="cover"
            alt="Banner"
          />
          <View style={styles.bannerDetail}>
            <HStack space={3} alignItems="center" justifyContent="center">
              <Text style={styles.tagsText}>MainHome</Text>
              <View style={styles.tagsSperator}></View>
              <Text style={styles.tagsText}>MainHome</Text>
              <View style={styles.tagsSperator}></View>
              <Text style={styles.tagsText}>MainHome</Text>
              <View style={styles.tagsSperator}></View>
              <Text style={styles.tagsText}>MainHome</Text>
            </HStack>
            <HStack
              space={8}
              mt="6"
              alignItems="center"
              justifyContent="center"
            >
              <VStack space={0} alignItems="center">
                <CheckIcon width={38} height={38} />
                <Text style={styles.tagsText}>Ma liste</Text>
              </VStack>
              <Button style={styles.bannerPlayButton}>
                <HStack space={2} alignItems="center" justifyContent="center">
                  <PlayIcon
                    width={30}
                    height={30}
                    style={{ marginLeft: -10 }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      color: "black",
                      fontFamily: FONTS.medium,
                    }}
                  >
                    Lecture
                  </Text>
                </HStack>
              </Button>
              <VStack space={1} alignItems="center">
                <InfoIcon width={30} height={30} />
                <Text style={styles.tagsText}>Infos</Text>
              </VStack>
            </HStack>
          </View>
          <LinearGradient
            // Background Linear Gradient
            colors={[
              "transparent",
              "transparent",
              "rgba(0,0,0,0.7)",
              "rgba(0,0,0,0.95)",
            ]}
            style={styles.gradient}
          />
        </View>

        <View style={{ marginTop: 480, paddingHorizontal: 10 }}>
          <MaListe />
          <DernierVisionnage />
        </View>

        
      </Animated.ScrollView>

      {openCategorie ? <Categorie showCategorie={handleOpenCategorie} /> : null}
    </SafeAreaView>
  );
};

export default MainHome;

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    // backgroundColor: "#1c1c1c",
    left: 0,
    right: 0,
    width: "100%",
    zIndex: 1,
  },
  gradient: {
    position: "absolute",
    zIndex: 99,
    width: "100%",
    height: "100%",
  },
  bannerDetail: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    zIndex: 999,
  },
  tagsText: { color: "white", fontSize: 12, fontFamily: FONTS.regular },
  tagsSperator: {
    width: 5,
    height: 5,
    backgroundColor: "white",
    borderRadius: 100,
  },
  bannerPlayButton: {
    backgroundColor: "white",
    width: "35%",
    height: 40,
  },
});
