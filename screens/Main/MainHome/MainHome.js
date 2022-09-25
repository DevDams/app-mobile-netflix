import { StyleSheet, Text, View, Animated, ScrollView } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../../contants/color";
import DynamicHeader from "../../../components/DynamicHeader";
import { getCloser } from "../../../helpers";
import MainHomeHeader from "../../../components/MainHomeHeader";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "native-base";
import Categorie from "../../../components/Categorie";

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
    setTopVal(offsetY)
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
    )
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
    setOpenCategorie(val)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <MainHomeHeader />

      <Animated.View style={[styles.header, { transform: [{ translateY }] }]}>
        {
          (topVal <= 70) ? <DynamicHeader {...{ headerHeight }} showCategorie={handleOpenCategorie} /> : null
        }
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
            height: 500,
            width: "100%",
            backgroundColor: "blue",
            position: "absolute",
            top: 0,
          }}
        >
          <LinearGradient
            // Background Linear Gradient
            colors={["rgba(0,0,0,0.8)", "transparent", "transparent", "transparent", "transparent", "transparent"]}
            style={styles.gradient}
          />
          <Image
            style={{ width: "100%", height: "100%" }}
            source={Banner}
            resizeMode="cover"
            alt="Banner"
          />
          <LinearGradient
            // Background Linear Gradient
            colors={["transparent", "transparent", "transparent", "transparent", "rgba(0,0,0,1)"]}
            style={styles.gradient}
          />
        </View>

        <Text style={{ color: "white", fontSize: 21, marginTop: 480 }}>
          MainHome
        </Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
        <Text style={{ color: "white", fontSize: 21 }}>MainHome</Text>
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
    height: "100%"
  },
});
