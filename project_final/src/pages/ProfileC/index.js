import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  HeaderUser,
  ProfileC_Bottom,
  ProfileC_Top,
  Footer,
  HeaderClient,
} from '../../components';

const ProfileC = () => {
  return (
    <View>
      <HeaderClient title="My Profile" />
      <ProfileC_Top />
      <ProfileC_Bottom />
      <Footer />
    </View>
  );
};

export default ProfileC;

const styles = StyleSheet.create({});
