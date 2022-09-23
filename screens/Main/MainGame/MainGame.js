import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from "../../../contants/color";

const MainGame = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <View>
        <Text style={{ color: "white" }}>Main Game</Text>
      </View>
    </SafeAreaView>
  )
}

export default MainGame

const styles = StyleSheet.create({})