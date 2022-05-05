import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  Gap,
  SignUpF_Button,
  SignUpF_Footer,
  SignUpF_Header,
  SignUpF_TextInput,
} from '../../components';

const SignUpF = () => {
  return (
    <View style={styles.container}>
      <SignUpF_Header />
      <Gap height={12} />
      <View style={styles.content}>
        <SignUpF_TextInput title={'Name'} placeholder={'Name'} />
        <Gap height={8} />
        <SignUpF_TextInput
          title={'Phone Number'}
          placeholder={'Phone Number'}
        />
        <Gap height={8} />
        <SignUpF_TextInput title={'Username'} placeholder={'Username'} />
        <Gap height={8} />
        <SignUpF_TextInput title={'Password'} placeholder={'Password'} />
        <Gap height={33} />
        <TouchableOpacity activeOpacity={0.7}>
          <SignUpF_Button />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <SignUpF_Footer />
      </View>
    </View>
  );
};

export default SignUpF;

const styles = StyleSheet.create({
  container: {
    marginRight: 7,
  },
  content: {
    marginLeft: 55,
    marginTop: 12,
  },
  footer: {
    marginLeft: 66,
    borderTopWidth: 1,
    borderColor: '#C0C0C0',
    marginRight: 66,
    marginTop: 46,
  },
});
