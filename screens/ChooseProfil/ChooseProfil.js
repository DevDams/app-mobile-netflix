import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../contants/color";
const Netflix_Logo = require("./../../assets/Netflix_Logo.png");

// icons
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { HStack, Image } from "native-base";
import FONTS from "../../contants/font";

const ChooseProfil = ({ navigation }) => {
  const [editActivate, setEditActivate] = useState(false);
  
  return (
    <SafeAreaView style={styles.container}>
      {/* DEBUT HEADER */}
      <View style={styles.header}>
        {editActivate ? (
          <View>
            <AntDesign name="arrowleft" size={24} color="black" />
            <Text style={styles.headerTitle}>Gérer les profils</Text>
          </View>
        ) : (
          <View>
            <Image
              style={{ width: 130, height: 60, alignSelf: "center" }}
              source={Netflix_Logo}
              resizeMode="contain"
              alt="Netflix Logo"
            />
            <MaterialCommunityIcons
              name="pencil-outline"
              size={28}
              color="white"
              style={{ alignSelf: "flex-end", position: "absolute", top: 15 }}
            />
          </View>
        )}
      </View>
      {/* FIN HEADER */}
    </SafeAreaView>
  );
};

export default ChooseProfil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  header: {
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 21,
    fontFamily: FONTS.medium,
    color: "white",
  },
});
