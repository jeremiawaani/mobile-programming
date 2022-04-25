import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Chat, Home, Search, User} from '../../../assets';
import Gap from '../Gap';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Gap width={59} />
      <Home />
      <Gap width={44} />
      <Search />
      <Gap width={44} />
      <Chat />
      <Gap width={44} />
      <User />
      <Gap width={69} />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: '#C0C0C0',
    height: 51,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
