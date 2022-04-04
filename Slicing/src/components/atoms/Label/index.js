import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Label = ({title, textFam = 'Poppins-Medium', textSize = 14}) => {
  return <Text style={styles.txt(textFam, textSize)}>{title}</Text>;
};

export default Label;

const styles = StyleSheet.create({
  txt: (textFam, textSize) => ({
    fontFamily: textFam,
    fontSize: textSize,
    color: '#000000',
  }),
});
