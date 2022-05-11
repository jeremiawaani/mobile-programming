import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const SignUpF_Button = ({onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.txt}>Sign Up</Text>
    </TouchableOpacity>
  );
};

export default SignUpF_Button;

const styles = StyleSheet.create({
  container: {
    width: 251,
    height: 37,
    backgroundColor: '#50DFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontFamily: 'Segoe UI',
    fontSize: 13,
    color: '#ffffff',
  },
});
