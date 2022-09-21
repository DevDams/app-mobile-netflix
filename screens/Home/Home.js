import { StyleSheet, Text, View } from "react-native";
import { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../contants/color";
import { StatusBar } from "expo-status-bar";
import { Button } from "native-base";
import FONTS from "../../contants/font";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import OnbroadingScreen from "../OnbroadingScreen";
import OnbroadingHeader from "../OnbroadingHeader";

SplashScreen.preventAutoHideAsync();

const Home = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Netflix-Medium": require("./../../assets/fonts/netflix_medium.ttf"),
    "Netflix-Regular": require("./../../assets/fonts/netflix_regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      onLayout={onLayoutRootView}
      style={{ flex: 1, backgroundColor: COLORS.black }}
    >
      <View style={styles.container}>
        <OnbroadingHeader navigation={navigation} />
        <OnbroadingScreen />
        <Button style={styles.startButton} onPress={() => navigation.navigate('Get Started')}>
          <Text style={styles.startButtonText}>GET STARTED</Text>
        </Button>
        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  startButton: {
    width: "95%",
    alignSelf: "center",
    color: COLORS.white,
    textTransform: "uppercase",
    backgroundColor: COLORS.red,
    fontSize: 18,
    position: "absolute",
    bottom: 20,
  },
  startButtonText: {
    fontFamily: FONTS.regular,
    color: "white",
    fontSize: 18
  },
});
