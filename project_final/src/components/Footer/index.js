import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Chat, Home, Search, User} from '../../../assets';

const Footer = ({search=<Search/>, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <Home />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        {search}
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <Chat />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <User />
      </TouchableOpacity>
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
    justifyContent: 'space-between',
    paddingHorizontal: 44,
    flexDirection: 'row',
    textAlign: 'center',
    backgroundColor: '#FFFFFF'
  },
});