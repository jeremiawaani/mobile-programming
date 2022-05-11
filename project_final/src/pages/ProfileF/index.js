import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  HeaderUser,
  Footer,
  ProfileF_Bottom,
  ProfileF_Top,
} from '../../components';

const ProfileF = ({navigation}) => {
  return (
    <View>
      <HeaderUser
        title="My Profile"
        onPress={() => navigation.navigate('HomeF')}
      />
      <ProfileF_Top />
      <ProfileF_Bottom onPress={() => navigation.navigate('SelectUser')} />
      <Footer />
    </View>
  );
};

export default ProfileF;

const styles = StyleSheet.create({});
