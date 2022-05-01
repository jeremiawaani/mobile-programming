import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DetailsF_Button = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{title}</Text>
    </View>
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
