import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Gap from '../Gap';

const SignUpF_Footer = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Gap height={18} />
      <Text style={styles.txt}>Already have an account?</Text>
      <Gap height={8} />
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <Text style={styles.txtLogin}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpF_Footer;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: '#C0C0C0',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 120,
  },
  txt: {
    fontSize: 13,
    fontFamily: 'Segoe UI',
    color: '#808080',
  },
  txtLogin: {
    fontSize: 13,
    fontFamily: 'Segoe UI',
    color: '#50DFFF',
  },
});
