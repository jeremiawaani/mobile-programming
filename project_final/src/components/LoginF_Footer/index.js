import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LoginF_Label, Gap} from '../../components';

const LoginF_Footer = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View
        style={{borderTopWidth: 1, width: 232, borderTopColor: '#C0C0C0'}}
      />
      <Gap height={16} />
      <LoginF_Label title="Don't have an account?" labelColor="#808080" />
      <Gap height={10} />
      <LoginF_Label title="Sign Up" labelColor="#50DFFF" onPress={onPress} />
      <View style={{height: 120, backgroundColor: '#fff'}}></View>
    </View>
  );
};

export default LoginF_Footer;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});
