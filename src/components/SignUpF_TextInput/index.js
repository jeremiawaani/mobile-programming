import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import React from 'react';

const SignUpF_TextInput = ({title, placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{title}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder}></TextInputRN>
    </View>
  );
};

export default SignUpF_TextInput;

const styles = StyleSheet.create({
  container: {},
  txt: {
    fontFamily: 'Segoe UI',
    fontSize: 13,
    color: '#808080',
    marginBottom: 8,
  },
  input: {
    width: 251,
    height: 37,
    backgroundColor: '#F5F7FB',
    borderWidth: 1,
    borderColor: '#8DEAFF',
    borderRadius: 10,
    paddingLeft: 14,
    paddingTop: 9,
    paddingBottom: 11,
    color: '#959595',
    fontSize: 13,
  },
});
