import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Center, HStack, Image } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../contants/color";
import FONTS from "../../contants/font";

// icons
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
const Netflix_Logo = require("./../../assets/Netflix_Logo.png");
const AvartarBlue = require("./../../assets/avatar-blue.png");
const AvatarYellow = require("./../../assets/avatar-yellow.png");

const ChooseProfil = ({ navigation }) => {
  const [editActivate, setEditActivate] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* DEBUT HEADER */}
      <View style={styles.header}>
        {editActivate ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingTop: 10,
            }}
          >
            <TouchableOpacity onPress={() => setEditActivate(false)}>
              <AntDesign name="arrowleft" size={28} color="white" />
            </TouchableOpacity>
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
            <TouchableOpacity
              activeOpacity={1}
              style={{ alignSelf: "flex-end", position: "absolute", top: 15 }}
              onPress={() => setEditActivate(true)}
            >
              <MaterialCommunityIcons
                name="pencil-outline"
                size={28}
                color="white"
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {/* FIN HEADER */}
      <View>
        <Text style={styles.profilContainerTitle}>Qui est ce ?</Text>
        <View style={styles.profilContainer}>
          <View style={styles.profilCardBox}>
            <View style={styles.profilCard}>
              {editActivate ? (
                <View style={styles.profilCardEditMode}>
                  <View style={{ width:"100%", height: "100%", backgroundColor: COLORS.black, opacity: 0.4, borderRadius: 10 }}>
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                      }}
                      source={AvartarBlue}
                      resizeMode="contain"
                      alt="Avatar blue"
                    />
                  </View>
                  <MaterialCommunityIcons
                    name="pencil-outline"
                    size={40}
                    color="white"
                    style={{ position: "absolute" }}
                  />
                </View>
              ) : (
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={AvartarBlue}
                  resizeMode="contain"
                  alt="Avatar blue"
                />
              )}
            </View>
            <Text
              style={{
                color: "white",
                fontFamily: FONTS.regular,
                fontSize: 11,
              }}
            >
              ADAMS AIME DE...
            </Text>
          </View>
          <View style={styles.profilCardBox}>
            <View style={styles.profilCard}>
              {editActivate ? (
                <View style={styles.profilCardEditMode}>
                  <View style={{ width:"100%", height: "100%", backgroundColor: COLORS.black, opacity: 0.4, borderRadius: 10 }}>
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                      }}
                      source={AvatarYellow}
                      resizeMode="contain"
                      alt="Avatar yellow"
                    />
                  </View>
                  <MaterialCommunityIcons
                    name="pencil-outline"
                    size={40}
                    color="white"
                    style={{ position: "absolute" }}
                  />
                </View>
              ) : (
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={AvatarYellow}
                  resizeMode="contain"
                  alt="Avatar yellow"
                />
              )}
            </View>
            <Text
              style={{
                color: "white",
                fontFamily: FONTS.regular,
                fontSize: 11,
              }}
            >
              LiLau
            </Text>
          </View>
          <TouchableOpacity activeOpacity={1} style={styles.profilCardBox} onPress={() => navigation.navigate('AddProfil')}>
            <View style={styles.profilCardAdd}>
              <AntDesign name="plus" size={50} color="white" />
            </View>
            <Text style={{ color: "white", fontFamily: FONTS.regular }}>
              Ajouter un profil
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
    paddingTop: 15,
  },
  headerTitle: {
    fontSize: 23,
    fontFamily: FONTS.medium,
    color: "white",
    marginTop: 2,
    marginLeft: 10,
  },
  profilContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    paddingHorizontal: 10,
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  profilContainerTitle: {
    color: "white",
    fontSize: 18,
    fontFamily: FONTS.regular,
    textAlign: "center",
    paddingTop: 100,
  },
  profilCardBox: {
    width: "50%",
    height: 160,
    borderRadius: 5,
    marginHorizontal: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  profilCard: {
    width: "60%",
    height: 100,
    borderRadius: 5,
    margin: 10,
    marginHorizontal: "auto",
  },
  profilCardAdd: {
    borderWidth: 1.5,
    borderColor: COLORS.gray,
    width: "60%",
    height: 100,
    borderRadius: 5,
    margin: 10,
    marginHorizontal: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  profilCardEditMode: {
    position: "relative",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
