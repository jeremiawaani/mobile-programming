import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const LoginF_Label = ({labelColor, labelSize, title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.txt(labelColor, (labelSize = 13))}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LoginF_Label;

const styles = StyleSheet.create({
  txt: (labelColor, labelSize) => ({
    color: labelColor,
    fontSize: labelSize,
    fontFamily: 'Segoe UI',
  }),
});
