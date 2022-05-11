import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {BackBlueIcon, Logo} from '../../../assets';
import {Gap} from '../../components';

const LoginF_Header = ({text, onPress}) => {
  return (
    <View style={styles.container}>
      {/*Icon Back*/}
      <View style={styles.iconBack}>
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
          <BackBlueIcon />
        </TouchableOpacity>
      </View>
      {/*Logo dan Teks*/}
      <View style={styles.logoWrapper}>
        {/* <Gap height={20}/> */}
        <Logo />
        <Text style={styles.txt}>{text}</Text>
      </View>
    </View>
  );
};

export default LoginF_Header;

const styles = StyleSheet.create({
  container: {
    height: 234,
  },
  iconBack: {
    marginLeft: 29,
    marginTop: 42,
  },
  logoWrapper: {
    alignItems: 'center',
  },
  txt: {
    fontSize: 24,
    color: '#8DEAFF',
    fontFamily: 'Segoe UI Bold',
  },
});
