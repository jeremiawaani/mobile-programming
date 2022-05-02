import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { HeaderUser, ProfileF_Bottom, ProfileF_Top, Footer } from '../../components';

const ProfileF = () => {
  return (
    <View>
      <HeaderUser title='My Profile' />
      <ProfileF_Top />
      <ProfileF_Bottom />
      <Footer />
    </View>
  );
};

export default ProfileF;

const styles = StyleSheet.create({});
