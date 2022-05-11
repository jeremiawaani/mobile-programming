import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const HomeF_IconsContEarn = ({icons, onPress}) => {
  return (
    <View style={styles.iconStyle}>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View style={styles.iconWrapper}>{icons}</View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeF_IconsContEarn;

const styles = StyleSheet.create({
  iconWrapper: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
