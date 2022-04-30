import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SignUpF_Button = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Sign Up</Text>
    </View>
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
