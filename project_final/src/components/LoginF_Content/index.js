import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {} from '../../components';
import {ToggleOn} from '../../../assets';
import Gap from '../Gap';
import LoginF_TextInput from '../LoginF_TextInput';
import LoginF_Label from '../LoginF_Label';
import LoginF_Button from '../LoginF_Button';

const LoginF_Content = ({onPress}) => {
  return (
    <View style={styles.container}>
      <LoginF_TextInput placeholder="Username" />
      <Gap height={10} />
      <LoginF_TextInput placeholder="Password" />
      <View style={styles.rememberMe}>
        <ToggleOn />
        <Gap width={9} />
        <LoginF_Label title="Remember Me" labelColor="#808080" />
      </View>
      <Gap height={9} />
      <LoginF_Button title="Login" onPress={onPress} />
      <Gap height={20} />
      <LoginF_Label title="Forgot Password?" labelColor="#50DFFF" />
    </View>
  );
};

export default LoginF_Content;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginRight: 125,
  },
});
