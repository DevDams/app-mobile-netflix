import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Button, Image, Input } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../contants/color";

import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import FONTS from "../../contants/font";
import { TextInput } from "react-native-paper";

const AvatarPurple = require("./../../assets/avatar-purple.png");

const AddProfil = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingTop: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("ChooseProfil")}
            >
              <AntDesign name="arrowleft" size={28} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Ajouter un profil</Text>
          </View>
          <Text>AddProfil</Text>
        </View>
        <Button style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Enregistrer</Text>
        </Button>
      </View>

      <View style={{ alignItems: "center" }}>
        <View style={styles.profilImage}>
          <Image
            style={{ width: "100%", height: "100%", position: "absolute" }}
            source={AvatarPurple}
            resizeMode="contain"
            alt="Avatar purple"
          />
          <View style={styles.editProfilImage}>
            <MaterialCommunityIcons
              name="pencil-outline"
              size={18}
              color="black"
            />
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <TextInput
          mode="outlined"
          render={(props) => (
            <Input
              {...props}
              type="text"
              size="md"
              variant="unstyled"
              style={{
                color: "white",
                paddingLeft: 16,
              }}
            />
          )}
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          outlineColor="transparent"
          activeOutlineColor="transparent"
          style={{
            borderWidth: 0,
            fontSize: 18,
            backgroundColor: COLORS.grayDark1,
            fontFamily: FONTS.regular,
            marginTop: 10,
            padding: 0,
            width: "70%",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddProfil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  header: {
    paddingHorizontal: 10,
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: FONTS.medium,
    color: "white",
    marginTop: 2,
    marginLeft: 10,
  },
  saveButton: {
    backgroundColor: "transparent",
  },
  saveButtonText: {
    fontFamily: FONTS.medium,
    fontSize: 15,
    color: COLORS.grayDark1,
    marginTop: -8,
  },
  profilImage: {
    width: 110,
    height: 110,
    position: "relative",
  },
  editProfilImage: {
    position: "absolute",
    bottom: -5,
    right: -5,
    backgroundColor: "white",
    width: 20,
    height: 20,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
