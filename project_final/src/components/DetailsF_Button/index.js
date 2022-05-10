import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const DetailsF_Button = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
};

export default DetailsF_Button;

const styles = StyleSheet.create({
  container: {
    width: 66,
    height: 25,
    backgroundColor: '#000000',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: '#ffffff',
    fontSize: 13,
    fontFamily: 'Segoe UI',
  },
});
