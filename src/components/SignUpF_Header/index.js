import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LogoKecil} from '../../../assets';
import splitLayoutProps from 'react-native/Libraries/StyleSheet/splitLayoutProps';
import Gap from '../Gap';

const SignUpF_Header = () => {
  return (
    <View style={styles.container}>
      <Gap width={62} />
      <LogoKecil />
      <Gap width={12} />
      <Text style={styles.txt}>Get Started!</Text>
    </View>
  );
};

export default SignUpF_Header;

const styles = StyleSheet.create({
  container: {
    height: 103,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    fontFamily: 'Segoe UI Bold',
    fontSize: 28,
    color: '#8DEAFF',
  },
});
