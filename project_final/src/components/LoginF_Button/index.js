import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const LoginF_Button = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <Text style={styles.txt}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginF_Button;

const styles = StyleSheet.create({
  txt: {
    borderRadius: 10,
    backgroundColor: '#50DFFF',
    fontFamily: 'Segoe UI',
    fontSize: 13,
    color: '#FFFFFF',
    width: 251,
    height: 37,
    paddingLeft: 107,
    paddingTop: 10,
  },
});
