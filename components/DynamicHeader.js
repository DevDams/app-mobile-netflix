import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const statusBarHeight = getStatusBarHeight() + 50

const DynamicHeader = (props) => {
  const {headerHeight} = props;
  return (
    <>
      <View
        style={[
          styles.subHeader,
          {
            height: headerHeight / 2.5,
          },
        ]}>
        <Text style={styles.conversation}>Conversations</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    width: '100%',
    paddingHorizontal: 10,
    marginTop: statusBarHeight,
    // backgroundColor: "none",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  conversation: {color: 'white', fontSize: 16, fontWeight: 'bold'},
});
export default DynamicHeader;
