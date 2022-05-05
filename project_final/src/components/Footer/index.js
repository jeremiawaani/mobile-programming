import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AddTabBottom, Chat, Home, Search, User} from '../../../assets';
import Gap from '../Gap';

const Footer = ({search=<Search/>}) => {
  return (
    <View style={styles.container}>
      <Home />
      <Gap width={60} />
      {search}
      <Gap width={60} />
      <Chat />
      <Gap width={60} />
      <User />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: '#C0C0C0',
    height: 51,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'center',
  },
});