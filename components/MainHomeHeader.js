import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getStatusBarHeight } from 'react-native-status-bar-height';

const statusBarHeight = getStatusBarHeight()

const MainHomeHeader = () => {
  return (
    <View style={styles.container}>
      <Text>MainHomeHeader</Text>
    </View>
  )
}

export default MainHomeHeader

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "red",
    zIndex: 2,
    position: "absolute",
    top: statusBarHeight
  }
})