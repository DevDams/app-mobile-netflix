import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../contants/color";
import FONTS from "../../contants/font";
import { Button } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const GetStarted = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
          <AntDesign name="close" size={24} color="black" style={styles.closeButton} />
        </TouchableWithoutFeedback>

        <Text style={styles.title}>Ready to watch?</Text>
        <Text style={styles.description}>
          Entrer your email to create or sign in to your account.
        </Text>

        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={{
              marginTop: -5,
              marginBottom: 5,
              color: "black",
              fontFamily: FONTS.regular,
            }}
          />
        </View>

        <Button style={styles.startButton}>
          <Text style={styles.startButtonText}>GET STARTED</Text>
        </Button>
      </View>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginTop: 100,
  },
  closeButton: {
    position: "absolute",
    right: 30,
    top: -80,
  },
  title: {
    fontFamily: FONTS.medium,
    fontSize: 28,
    textAlign: "center",
  },
  description: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
    color: COLORS.gray,
  },
  inputBox: {
    marginTop: 40,
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderRadius: 3,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  inputLabel: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: COLORS.gray,
  },
  startButton: {
    width: "100%",
    alignSelf: "center",
    color: COLORS.white,
    textTransform: "uppercase",
    backgroundColor: COLORS.red,
    marginTop: 25,
  },
  startButtonText: {
    fontFamily: FONTS.regular,
    color: "white",
    fontSize: 16,
  },
});
