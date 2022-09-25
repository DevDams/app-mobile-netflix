import { ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { VStack } from "native-base";
import { getStatusBarHeight } from "react-native-status-bar-height";
import FONTS from "../contants/font";
import COLORS from "../contants/color";

const statusBarHeight = getStatusBarHeight();

const Categorie = ({ showCategorie }) => {
  const closeCategorie = () => {
    showCategorie(false)
  }

  return (
    <View style={styles.container}>
        <ScrollView indicatorStyle="black" style={{ width: "100%" }}>
          <VStack space={6} alignItems="center">
            <Text style={styles.accueilText}>Accueil</Text>
            <Text style={styles.otherText}>Ma liste</Text>
            <Text style={styles.otherText}>Contenu téléchargeable</Text>
            <Text style={styles.otherText}>Action</Text>
            <Text style={styles.otherText}>Anime</Text>
            <Text style={styles.otherText}>Comédies</Text>
            <Text style={styles.otherText}>Documentaires</Text>
            <Text style={styles.otherText}>Drames</Text>
            <Text style={styles.otherText}>Fantastique</Text>
            <Text style={styles.otherText}>Horreur</Text>
            <Text style={styles.otherText}>Jeunesse et famille</Text>
            <Text style={styles.otherText}>Made in South Africa</Text>
            <Text style={styles.otherText}>Musique et comédies musicales</Text>
            <Text style={styles.otherText}>Policiers</Text>
            <Text style={styles.otherText}>Romance</Text>
            <Text style={styles.otherText}>SF</Text>
            <Text style={styles.otherText}>Stand-up</Text>
            <Text style={styles.otherText}>Téléréalité</Text>
            <Text style={styles.otherText}>Thrillers</Text>
            <Text style={styles.otherText}>Audiodescription</Text>
          </VStack>
        </ScrollView>
        <TouchableOpacity activeOpacity={1} style={styles.closeButton} onPress={closeCategorie}>
        <Text style={styles.otherText}>X</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Categorie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: statusBarHeight,
    left: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    zIndex: 99,
  },
  accueilText: {
    color: "white",
    fontFamily: FONTS.medium,
    fontSize: 22,
    paddingTop: 120
  },
  otherText: {
    color: COLORS.gray,
    fontFamily: FONTS.regular,
    fontSize: 21,
  },
  closeButton: {
    backgroundColor: "white",
    width: 60,
    height: 60,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  }
});
