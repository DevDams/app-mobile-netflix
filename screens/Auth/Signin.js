import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";
import React from "react";
import { StatusBar } from "expo-status-bar";
import COLORS from "../../contants/color";
import FONTS from "../../contants/font";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, HStack, VStack, Input } from "native-base";
import { Feather } from "@expo/vector-icons";

const NetflixLogo = require("./../../assets/Netflix_Logo.png");

const HeaderBar = ({ navigation }) => {
  return (
    <View style={styles.HeaderBar}>
      <HStack space={3} justifyContent="flex-start">
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
          <Feather
            name="arrow-left"
            size={30}
            color="white"
            style={{ marginTop: 10 }}
          />
        </TouchableWithoutFeedback>
        <Image
          style={{ width: 120, height: 50 }}
          source={NetflixLogo}
          alt="Netflix Logo"
        />
      </HStack>
    </View>
  );
};

const TextLabel = ({ focusEmail }) => {
  return (
    <Text
      style={{
        color: focusEmail ? "white" : "gray",
        textDecorationStyle: "solid",
        textDecorationLine: "none",
        backgroundColor: focusEmail ? COLORS.grayDark1 : COLORS.grayDark2,
        fontFamily: FONTS.regular,
      }}
    >
      {" "}
      Email or phone number{"  "}
    </Text>
  );
};

const TextLabelPassword = ({ focusPassword }) => {
  return (
    <Text
      style={{
        color: focusPassword ? "white" : "gray",
        textDecorationStyle: "solid",
        textDecorationLine: "none",
        backgroundColor: focusPassword ? COLORS.grayDark1 : COLORS.grayDark2,
        fontFamily: FONTS.regular,
      }}
    >
      {" "}
      Password{"  "}
    </Text>
  );
};

const Signin = ({ navigation }) => {
  const [text, setText] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [focusEmail, setFocusEmail] = React.useState(false);
  const [focusPassword, setFocusPassword] = React.useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <HeaderBar navigation={navigation} />

      <ScrollView contentContainerStyle={styles.formContainer}>
        {/* Email input */}
        <View
          style={{
            justifyContent: "center",
            height: focusEmail ? 65 : 55,
            backgroundColor: focusEmail ? COLORS.grayDark1 : COLORS.grayDark2,
            borderRadius: 3,
            paddingTop: 0,
            paddingBottom: focusEmail ? 0 : 15,
            paddingTop: focusEmail ? 5 : 0,
          }}
        >
          <TextInput
            mode="outlined"
            label={<TextLabel focusEmail={focusEmail} />}
            render={(props) => (
              <Input
                {...props}
                size="lg"
                variant="unstyled"
                style={{
                  color: "white",
                  marginTop: focusEmail ? 0 : 5,
                  paddingLeft: 16,
                }}
              />
            )}
            value={text}
            onChangeText={(text) => setText(text)}
            onFocus={() => setFocusEmail(true)}
            onBlur={() => setFocusEmail(false)}
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            outlineColor="transparent"
            activeOutlineColor="transparent"
            style={{
              color: "red",
              borderWidth: 0,
              fontSize: 18,
              backgroundColor: focusEmail ? COLORS.grayDark1 : COLORS.grayDark2,
              fontFamily: FONTS.regular,
              marginTop: 10,
              padding: 0,
            }}
            cursorColor="gray"
          />
        </View>

        {/* Password input */}
        <View
          style={{
            justifyContent: "center",
            height: focusPassword ? 65 : 55,
            backgroundColor: focusPassword ? COLORS.grayDark1 : COLORS.grayDark2,
            borderRadius: 3,
            paddingTop: 0,
            paddingBottom: focusPassword ? 0 : 15,
            paddingTop: focusPassword ? 5 : 0,
            marginTop: 20,
          }}
        >
          <TextInput
            mode="outlined"
            label={<TextLabelPassword focusPassword={focusPassword} />}
            render={(props) => (
              <Input
                {...props}
                size="lg"
                variant="unstyled"
                style={{
                  color: "white",
                  marginTop: focusPassword ? 0 : 5,
                  paddingLeft: 16,
                }}
              />
            )}
            value={password}
            onChangeText={(password) => setPassword(password)}
            onFocus={() => setFocusPassword(true)}
            onBlur={() => setFocusPassword(false)}
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            outlineColor="transparent"
            activeOutlineColor="transparent"
            style={{
              color: "red",
              borderWidth: 0,
              fontSize: 18,
              backgroundColor: focusPassword ? COLORS.grayDark1 : COLORS.grayDark2,
              fontFamily: FONTS.regular,
              marginTop: 10,
              padding: 0,
            }}
            cursorColor="gray"
          />
        </View>
      </ScrollView>

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  HeaderBar: {
    height: 60,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  container: {
    justifyContent: "flex-start",
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "black",
  },
});
