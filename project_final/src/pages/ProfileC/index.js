import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { HeaderUser, ProfileC_Bottom, ProfileC_Top, Footer } from '../../components';

const ProfileC = () => {
  return (
    <View>
      <HeaderUser title='My Profile' />
      <ProfileC_Top />
      <ProfileC_Bottom />
      <Footer />
    </View>
  );
};

export default ProfileC;

const styles = StyleSheet.create({});
