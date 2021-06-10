import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const statusCircle = (props) => {
  return (
    <View style={[styles.status, props.color]}>
      {console.log(props.color)}
      <View style={styles.currentStatus}></View>
    </View>
  );
};

export default statusCircle;
const styles = StyleSheet.create({
  status: {
    backgroundColor: 'transparent',
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: 'yellow',
    borderRadius: 40 / 2,
    justifyContent: 'flex-end',
  },
  currentStatus: {
    backgroundColor: 'royalblue',
    height: `${(40 / 100) * 100}%`,
    // borderBottomLeftRadius: 100000000,
    // borderBottomRightRadius: 100000000,
    // borderTopLeftRadius: 100000000,
    // borderTopRightRadius: 100000000,
  },
});
